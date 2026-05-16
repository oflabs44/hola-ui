import { AspectRatio } from "@/registry/hola/ui/aspect-ratio";
import { ShowcasePage, Showcase } from "../showcase";

export default function AspectRatioShowcase() {
  return (
    <ShowcasePage
      title="Aspect Ratio"
      description="Container that maintains a fixed aspect ratio regardless of width. Useful for images, videos, embeds, or any element that needs a predictable shape."
    >
      <Showcase title="16:9 (video)">
        <AspectRatio
          ratio={16 / 9}
          className="w-full max-w-md overflow-hidden rounded-[10px] border border-(--hola-fg)/10 bg-(--hola-fg)/[0.04]"
        >
          <div className="flex h-full items-center justify-center text-sm text-muted">16 / 9</div>
        </AspectRatio>
      </Showcase>

      <Showcase title="4:3 (photo)">
        <AspectRatio
          ratio={4 / 3}
          className="w-full max-w-xs overflow-hidden rounded-[10px] border border-(--hola-fg)/10 bg-(--hola-fg)/[0.04]"
        >
          <div className="flex h-full items-center justify-center text-sm text-muted">4 / 3</div>
        </AspectRatio>
      </Showcase>

      <Showcase title="1:1 (square)">
        <AspectRatio
          ratio={1}
          className="w-32 overflow-hidden rounded-[10px] border border-(--hola-fg)/10 bg-(--hola-fg)/[0.04]"
        >
          <div className="flex h-full items-center justify-center text-sm text-muted">1 / 1</div>
        </AspectRatio>
      </Showcase>

      <Showcase
        title="21:9 (cinematic banner)"
        description="Useful for hero images and full-width banners."
      >
        <AspectRatio
          ratio={21 / 9}
          className="w-full overflow-hidden rounded-[10px] border border-(--hola-fg)/10 bg-(--hola-fg)/[0.04]"
        >
          <div className="flex h-full items-center justify-center text-sm text-muted">21 / 9</div>
        </AspectRatio>
      </Showcase>
    </ShowcasePage>
  );
}
