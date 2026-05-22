import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/registry/hola/ui/tooltip";
import { Button } from "@/registry/hola/ui/button";
import { ShowcasePage, Showcase } from "../showcase";

const SIDES = ["top", "right", "bottom", "left"] as const;

function PlusIcon() {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-4"
    >
      <path d="M8 3v10M3 8h10" />
    </svg>
  );
}

export default function TooltipShowcase() {
  return (
    <ShowcasePage
      title="Tooltip"
      description="Hover/focus hint on @base-ui/react/tooltip. Provider wraps the app (or a section) with a single delay; each Tooltip + Trigger + Content anchors to the trigger via Positioner. Inverted surface, soft shadow, arrow tracks the side."
    >
      <Showcase title="Default">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger render={<Button variant="outline">Hover me</Button>} />
            <TooltipContent>Tooltip on top</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </Showcase>

      <Showcase title="On icon button">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger
              render={
                <Button variant="ghost" size="icon" aria-label="Add">
                  <PlusIcon />
                </Button>
              }
            />
            <TooltipContent>Add item</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </Showcase>

      <Showcase title="Sides">
        <TooltipProvider>
          <div className="flex flex-wrap gap-2">
            {SIDES.map((side) => (
              <Tooltip key={side}>
                <TooltipTrigger
                  render={
                    <Button variant="outline" size="sm">
                      {side}
                    </Button>
                  }
                />
                <TooltipContent side={side}>From the {side}</TooltipContent>
              </Tooltip>
            ))}
          </div>
        </TooltipProvider>
      </Showcase>

      <Showcase title="Delayed">
        <TooltipProvider delay={500}>
          <Tooltip>
            <TooltipTrigger render={<Button variant="outline">Wait for it…</Button>} />
            <TooltipContent>Provider has delay=500</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </Showcase>
    </ShowcasePage>
  );
}
