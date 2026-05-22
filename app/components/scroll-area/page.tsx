import { ScrollArea } from "@/registry/hola/ui/scroll-area";
import { Separator } from "@/registry/hola/ui/separator";
import { ShowcasePage, Showcase } from "../showcase";

const tags = Array.from({ length: 50 }, (_, i) => `v1.2.0-beta.${i + 1}`);

const lorem = `The quick brown fox jumps over the lazy dog. ${"Pack my box with five dozen liquor jugs. ".repeat(8)}`;

function TagList({ count = tags.length }: { count?: number }) {
  const items = tags.slice(0, count);

  return (
    <div className="p-3">
      <h4 className="mb-2 text-sm font-medium text-fg">Tags</h4>
      {items.map((tag, i) => (
        <div key={tag}>
          <div className="py-1 font-mono text-xs text-muted">{tag}</div>
          {i < items.length - 1 ? <Separator className="my-1" /> : null}
        </div>
      ))}
    </div>
  );
}

const frameClass =
  "rounded-[6px] border border-(--hola-fg)/10 dark:border-(--hola-fg)/15";

export default function ScrollAreaShowcase() {
  return (
    <ShowcasePage
      title="Scroll Area"
      description="Custom-styled scrollbar overlay on @base-ui/react/scroll-area. Viewport content fades at the scroll axis edges via a CSS mask gradient — items dissolve into the surface as they leave view. Scrollbars are thin rounded thumbs that only show when content overflows. The fade prop accepts: vertical (default), horizontal, both, or none."
    >
      <Showcase title="Vertical (default fade)">
        <ScrollArea className={`h-64 w-56 ${frameClass}`}>
          <TagList />
        </ScrollArea>
      </Showcase>

      <Showcase title="Horizontal fade">
        <ScrollArea fade="horizontal" className={`w-80 ${frameClass}`}>
          <div className="flex gap-3 p-3">
            {tags.slice(0, 12).map((tag) => (
              <div
                key={tag}
                className="shrink-0 rounded-[5px] border border-(--hola-fg)/10 dark:border-(--hola-fg)/15 px-3 py-1.5 font-mono text-xs text-fg"
              >
                {tag}
              </div>
            ))}
          </div>
        </ScrollArea>
      </Showcase>

      <Showcase title="Both axes (corners feather)">
        <ScrollArea fade="both" className={`h-48 w-80 ${frameClass}`}>
          <div className="w-[800px] p-4 text-sm text-fg">
            <p>{lorem}</p>
            <p className="mt-3">{lorem}</p>
            <p className="mt-3">{lorem}</p>
          </div>
        </ScrollArea>
      </Showcase>

      <Showcase title="No fade">
        <ScrollArea fade="none" className={`h-64 w-56 ${frameClass}`}>
          <TagList count={20} />
        </ScrollArea>
      </Showcase>

      <Showcase title="Larger fade ramp (48px)">
        <ScrollArea fadeSize={48} className={`h-64 w-56 ${frameClass}`}>
          <TagList />
        </ScrollArea>
      </Showcase>
    </ShowcasePage>
  );
}
