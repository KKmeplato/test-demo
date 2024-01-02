#!/usr/bin/env bash
# --------------------------------------------------------
# Script to automatically update and push
# a new package version, based on CI inputs.
# --------------------------------------------------------
# FROM CI ENV = { BUMP_LEVEL, INPUT_VERSION}

# Function to perform Git operations
perform_git_operations() {
    git add package.json package-lock.json
    git commit -m "Bump version to $1"
    git tag -a "v$1" -m "Release Version v$1"
    git push origin main --follow-tags
}

# Function to bump version and perform git operations
bump_and_commit() {
    npm --no-git-tag-version version $1
    COMMIT_TAG="$(node -p "require('./package.json').version")"
    perform_git_operations "$COMMIT_TAG"
    echo "COMMIT_TAG=${COMMIT_TAG}" >>$GITHUB_ENV
}

export CURRENT_VERSION=$(node -p "require('./package.json').version")
echo "CURRENT_VERSION=${CURRENT_VERSION}" >>$GITHUB_ENV
echo "Input version is: $INPUT_VERSION"

# ci dropdown allows: "minor", "patch" or "semver"
echo "Bump level is: $BUMP_LEVEL"
echo "Current version is: $CURRENT_VERSION"

# Check if bumpLevel is default and semver is empty
if [ "$BUMP_LEVEL" == "semver" ] && [ -z "$INPUT_VERSION" ]; then
    echo "Bump level is semver, but semver is empty!"
    exit 1
fi

# Check if semVer is actually > currentVersion -> Compare versions using semver library
if [ -n "$INPUT_VERSION" ] && [ "$(node -e "console.log(require('semver').gt('$INPUT_VERSION', '$CURRENT_VERSION'))")" == "false" ]; then
    echo "Provided version is not greater than the current version."
    exit 1
fi

# Check if semVer is a valid semantic version
SEMVER_PATTERN="^(v?2)\.([0-9]+)\.([0-9]+)(?:-([0-9A-Za-z-]+(?:\.[0-9A-Za-z-]+)*))?(?:\+[0-9A-Za-z-]+)?$"
if [ -n "$INPUT_VERSION" ] && ! echo "$INPUT_VERSION" | grep -E -q "$SEMVER_PATTERN"; then
    echo "Invalid semantic version. Please provide a version that matches the pattern."
    exit 1
fi

# Check if bumpLevel and semver are specified
if [ -n "$BUMP_LEVEL" ] && [ -n "$INPUT_VERSION" ]; then
    echo "Both bumpLevel and semver input version are specified."
fi

# Calculate the expected version based on bump level
if [ "$BUMP_LEVEL" == "minor" ] && [ -n "$INPUT_VERSION" ]; then
    EXPECTED_VERSION=$(node -e "console.log(require('semver').inc('$CURRENT_VERSION', '$BUMP_LEVEL'))")
elif [ "$BUMP_LEVEL" == "patch" ] && [ -n "$INPUT_VERSION" ]; then
    EXPECTED_VERSION=$(node -e "console.log(require('semver').inc('$CURRENT_VERSION', '$BUMP_LEVEL'))")
fi

echo "EXPECTED version is ${EXPECTED_VERSION}"

# Check if bumpLevel and input are specified
if [ -n "$BUMP_LEVEL" ] && [ -n "$INPUT_VERSION" ]; then
    if [ "$BUMP_LEVEL" != "semver" ]; then
        if [ "$INPUT_VERSION" == "$EXPECTED_VERSION" ]; then
            # Check if bumplevel is minor/patch and Input version matches with expected output,Create a tag and push to branch.
            echo "Creating tag for specified version ($INPUT_VERSION)..."
            bump_and_commit "$EXPECTED_VERSION"
        else
            echo "Error: Specified bump-level ($BUMP_LEVEL) does not match expected version ($EXPECTED_VERSION). CI fails because instructions are unclear"
            exit 1
        fi
    fi
fi

# Use the specified version and bump level to input version
if [ "$BUMP_LEVEL" == "semver" ]; then
    bump_and_commit "$INPUT_VERSION"
fi

# Check if bumpLevel is minor/patch AND semver is empty, then use it for bumping
if [[ "${BUMP_LEVEL}" == "minor" || "${BUMP_LEVEL}" == "patch" ]] && [ -z "$INPUT_VERSION" ]; then
    echo "Using default bump level for versioning."

    # Perform version bumping using npm
    if [ "${BUMP_LEVEL}" == "minor" ]; then
        echo "Bumping version with 'minor' level."
        npm --no-git-tag-version version minor
    elif [ "${BUMP_LEVEL}" == "patch" ]; then
        echo "Bumping version with 'patch' level."
        npm --no-git-tag-version version patch
    fi

    bump_and_commit "$EXPECTED_VERSION"
fi
