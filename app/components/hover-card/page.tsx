import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/registry/hola/ui/hover-card";
import { Button } from "@/registry/hola/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/registry/hola/ui/avatar";
import { ShowcasePage, Showcase } from "../showcase";

export default function HoverCardShowcase() {
  return (
    <ShowcasePage
      title="Hover Card"
      description="Hover-anchored rich preview on @base-ui/react/preview-card. Same Positioner anchoring as Popover but opens on pointer hover or keyboard focus — used for profile cards, link previews, and other non-essential expansions of an inline reference."
    >
      <Showcase title="User card">
        <HoverCard>
          <HoverCardTrigger
            render={
              <Button variant="link" className="px-0">
                @oflabs44
              </Button>
            }
          />
          <HoverCardContent>
            <div className="flex gap-3">
              <Avatar size="default">
                <AvatarImage src="https://github.com/oflabs44.png" alt="oflabs44" />
                <AvatarFallback>OF</AvatarFallback>
              </Avatar>
              <div className="space-y-1">
                <h4 className="text-sm font-semibold text-fg">Femi Dayo</h4>
                <p className="text-xs text-muted">@oflabs44 — building hola-ui</p>
                <p className="text-xs text-muted">Joined 2024</p>
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>
      </Showcase>

      <Showcase title="Inline link preview">
        <p className="text-sm text-fg">
          The component sits on top of{" "}
          <HoverCard>
            <HoverCardTrigger
              render={
                <a
                  href="https://base-ui.com"
                  className="font-medium text-(--hola-accent) underline-offset-4 hover:underline"
                >
                  Base UI
                </a>
              }
            />
            <HoverCardContent>
              <h4 className="text-sm font-semibold text-fg">Base UI</h4>
              <p className="mt-1 text-xs text-muted">
                Unstyled, accessible React primitives. The library this registry is built on.
              </p>
            </HoverCardContent>
          </HoverCard>{" "}
          — a low-level primitive library.
        </p>
      </Showcase>
    </ShowcasePage>
  );
}
