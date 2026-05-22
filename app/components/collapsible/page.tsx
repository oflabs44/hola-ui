"use client";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/registry/hola/ui/collapsible";
import { Button } from "@/registry/hola/ui/button";
import { ShowcasePage, Showcase } from "../showcase";

// Height animation via Base UI's --collapsible-panel-height var.
const PANEL_ANIM =
  "overflow-hidden h-(--collapsible-panel-height) transition-[height] duration-200 ease-out data-[starting-style]:h-0 data-[ending-style]:h-0";

function ChevronsUpDownIcon() {
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
      <path d="m6 10 2 2 2-2M6 6l2-2 2 2" />
    </svg>
  );
}

export default function CollapsibleShowcase() {
  return (
    <ShowcasePage
      title="Collapsible"
      description="Behavioural primitive on @base-ui/react/collapsible — Root, Trigger, Panel. Ships unstyled so consumers can compose visuals. Animate the panel via Base UI's --collapsible-panel-height CSS var, as shown below."
    >
      <Showcase title="Default">
        <Collapsible className="w-full max-w-sm space-y-2">
          <div className="flex items-center justify-between gap-4">
            <h4 className="text-sm font-medium text-fg">
              @oflabs44 starred 3 repositories
            </h4>
            <CollapsibleTrigger
              render={
                <Button variant="ghost" size="icon-sm" aria-label="Toggle">
                  <ChevronsUpDownIcon />
                </Button>
              }
            />
          </div>
          <div className="rounded-[6px] border border-(--hola-fg)/10 dark:border-(--hola-fg)/15 px-4 py-2 font-mono text-sm text-fg">
            @base-ui/react
          </div>
          <CollapsibleContent className={PANEL_ANIM}>
            <div className="space-y-2 pt-2">
              <div className="rounded-[6px] border border-(--hola-fg)/10 dark:border-(--hola-fg)/15 px-4 py-2 font-mono text-sm text-fg">
                @shadcn/ui
              </div>
              <div className="rounded-[6px] border border-(--hola-fg)/10 dark:border-(--hola-fg)/15 px-4 py-2 font-mono text-sm text-fg">
                @tailwindlabs/tailwindcss
              </div>
            </div>
          </CollapsibleContent>
        </Collapsible>
      </Showcase>

      <Showcase title="With text trigger">
        <Collapsible className="w-full max-w-md">
          <CollapsibleTrigger
            render={
              <Button variant="outline" className="w-full justify-between">
                <span>Show advanced options</span>
                <ChevronsUpDownIcon />
              </Button>
            }
          />
          <CollapsibleContent className={PANEL_ANIM}>
            <div className="mt-2 rounded-[6px] border border-(--hola-fg)/10 dark:border-(--hola-fg)/15 p-4 text-sm text-muted">
              <p>Trigger and panel are wired by Base UI&apos;s Collapsible primitive.</p>
              <p className="mt-2">
                The component itself ships unstyled — visuals live in the consumer&apos;s
                markup, including the open/close animation pattern.
              </p>
            </div>
          </CollapsibleContent>
        </Collapsible>
      </Showcase>
    </ShowcasePage>
  );
}
