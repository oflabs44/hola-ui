import {
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/registry/hola/ui/popover";
import { Button } from "@/registry/hola/ui/button";
import { Input } from "@/registry/hola/ui/input";
import { Field, FieldLabel } from "@/registry/hola/ui/field";
import { ShowcasePage, Showcase } from "../showcase";

const SIDES = ["top", "right", "bottom", "left"] as const;

export default function PopoverShowcase() {
  return (
    <ShowcasePage
      title="Popover"
      description="Anchored interactive panel on @base-ui/react/popover. Same Positioner anchoring as Tooltip, but click-to-open and focusable — content can hold forms, links, and buttons. Sides: top/right/bottom (default)/left."
    >
      <Showcase title="Default">
        <Popover>
          <PopoverTrigger render={<Button variant="outline">Open popover</Button>} />
          <PopoverContent>
            <PopoverHeader>
              <PopoverTitle>Dimensions</PopoverTitle>
              <PopoverDescription>Set the dimensions for the layer.</PopoverDescription>
            </PopoverHeader>
            <div className="mt-4 grid gap-3">
              <Field orientation="horizontal">
                <FieldLabel htmlFor="popover-width">Width</FieldLabel>
                <Input id="popover-width" defaultValue="100%" className="h-8 w-24" />
              </Field>
              <Field orientation="horizontal">
                <FieldLabel htmlFor="popover-height">Height</FieldLabel>
                <Input id="popover-height" defaultValue="25rem" className="h-8 w-24" />
              </Field>
            </div>
          </PopoverContent>
        </Popover>
      </Showcase>

      <Showcase title="With close action">
        <Popover>
          <PopoverTrigger render={<Button>Share</Button>} />
          <PopoverContent>
            <PopoverHeader>
              <PopoverTitle>Share link</PopoverTitle>
              <PopoverDescription>Anyone with the link can view.</PopoverDescription>
            </PopoverHeader>
            <div className="mt-3 flex items-center gap-2">
              <Input
                readOnly
                value="https://hola.ui/r/abc-123"
                className="h-8 flex-1"
              />
              <PopoverClose render={<Button size="sm">Copy</Button>} />
            </div>
          </PopoverContent>
        </Popover>
      </Showcase>

      <Showcase title="Sides">
        <div className="flex flex-wrap gap-2">
          {SIDES.map((side) => (
            <Popover key={side}>
              <PopoverTrigger
                render={
                  <Button variant="outline" size="sm">
                    {side}
                  </Button>
                }
              />
              <PopoverContent side={side} className="w-auto">
                <p className="text-sm text-fg">From the {side}</p>
              </PopoverContent>
            </Popover>
          ))}
        </div>
      </Showcase>
    </ShowcasePage>
  );
}
