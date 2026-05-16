import { Separator } from "@/registry/hola/ui/separator";
import { ShowcasePage, Showcase } from "../showcase";

export default function SeparatorShowcase() {
  return (
    <ShowcasePage
      title="Separator"
      description="Horizontal or vertical divider on @base-ui/react/separator. Translucent overlay — tints with the surface beneath it. `soft` prop halves opacity for use inside cards."
    >
      <Showcase title="Horizontal (default)">
        <div className="w-full max-w-md space-y-4">
          <div>Above</div>
          <Separator />
          <div>Below</div>
        </div>
      </Showcase>

      <Showcase title="Soft (for in-card dividers)">
        <div className="w-full max-w-md space-y-4">
          <div>Above</div>
          <Separator soft />
          <div>Below</div>
        </div>
      </Showcase>

      <Showcase title="Vertical">
        <div className="flex h-12 items-center gap-4">
          <span>Left</span>
          <Separator orientation="vertical" />
          <span>Middle</span>
          <Separator orientation="vertical" />
          <span>Right</span>
        </div>
      </Showcase>

      <Showcase
        title="In a list"
        description="The canonical use — divide horizontal stacks of items."
      >
        <div className="w-full max-w-md">
          {["Account", "Billing", "Notifications", "Security"].map((item, i, arr) => (
            <div key={item}>
              <div className="py-3 text-sm">{item}</div>
              {i < arr.length - 1 && <Separator soft />}
            </div>
          ))}
        </div>
      </Showcase>
    </ShowcasePage>
  );
}
