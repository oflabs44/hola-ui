import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/registry/hola/ui/accordion";
import { ShowcasePage, Showcase } from "../showcase";

export default function AccordionShowcase() {
  return (
    <ShowcasePage
      title="Accordion"
      description="Vertically stacked, expandable sections on @base-ui/react/accordion. Item borders are translucent overlays; trigger flips a chevron via data-[panel-open]; panel height animates via Base UI's --accordion-panel-height CSS var."
    >
      <Showcase title="Default (single)">
        <Accordion className="w-full max-w-md">
          <AccordionItem value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern for an accordion: each
              trigger is a button, panels are labelled by their trigger, and arrow keys
              move focus between triggers.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Is it styled?</AccordionTrigger>
            <AccordionContent>
              Yes. Borders use the translucent --hola-fg overlay so dividers tint with
              the underlying surface, and the chevron rotates on open.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Is it animated?</AccordionTrigger>
            <AccordionContent>
              Yes. Panel height animates from 0 to --accordion-panel-height (computed by
              Base UI) using the data-starting-style/data-ending-style transitions.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </Showcase>

      <Showcase title="Multiple open">
        <Accordion multiple className="w-full max-w-md">
          <AccordionItem value="a">
            <AccordionTrigger>First</AccordionTrigger>
            <AccordionContent>
              With <code className="rounded bg-(--hola-fg)/[0.06] px-1 py-0.5 font-mono text-xs">multiple</code>, more
              than one panel can be open at once.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="b">
            <AccordionTrigger>Second</AccordionTrigger>
            <AccordionContent>
              Useful for FAQs or settings panels where users want side-by-side context.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="c">
            <AccordionTrigger>Third</AccordionTrigger>
            <AccordionContent>
              Default is single-open: opening one collapses the others.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </Showcase>

      <Showcase title="Disabled item">
        <Accordion className="w-full max-w-md">
          <AccordionItem value="a">
            <AccordionTrigger>Available</AccordionTrigger>
            <AccordionContent>This one opens normally.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="b" disabled>
            <AccordionTrigger>Locked</AccordionTrigger>
            <AccordionContent>You shouldn&apos;t see this content.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="c">
            <AccordionTrigger>Also available</AccordionTrigger>
            <AccordionContent>And so does this one.</AccordionContent>
          </AccordionItem>
        </Accordion>
      </Showcase>
    </ShowcasePage>
  );
}
