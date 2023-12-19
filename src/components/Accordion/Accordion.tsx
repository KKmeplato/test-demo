import * as RadixAccordion from "@radix-ui/react-accordion";
import {
  AccordionMultipleProps as RadixAccordionMultipleProps,
  AccordionSingleProps as RadixAccordionSingleProps
} from "@radix-ui/react-accordion";

import { AccordionItem } from "./components";
import { AccordionProps } from "./types";

export const Accordion = ({ items, onChange, ...rest }: AccordionProps) => {
  const params = {
    ...rest,
    collapsible: true,
    onValueChange: onChange
  } as RadixAccordionSingleProps | RadixAccordionMultipleProps;

  return (
    <RadixAccordion.Root className="flex flex-col gap-2" {...params}>
      {items.map((item, index) => (
        <AccordionItem key={index} {...item} />
      ))}
    </RadixAccordion.Root>
  );
};

Accordion.displayName = "Accordion";
