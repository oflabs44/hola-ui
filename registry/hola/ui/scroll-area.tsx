"use client";

import { ScrollArea as ScrollAreaPrimitive } from "@base-ui/react/scroll-area";

import { cn } from "@/registry/hola/lib/utils";

type FadeMode = "none" | "vertical" | "horizontal" | "both";

function ScrollArea({
  className,
  children,
  fade = "vertical",
  fadeSize = 24,
  ...props
}: ScrollAreaPrimitive.Root.Props & {
  fade?: FadeMode;
  fadeSize?: number;
}) {
  return (
    <ScrollAreaPrimitive.Root
      data-slot="scroll-area"
      className={cn("relative overflow-hidden", className)}
      {...props}
    >
      <ScrollAreaPrimitive.Viewport
        data-slot="scroll-area-viewport"
        data-fade={fade === "none" ? undefined : fade}
        style={buildFadeStyle(fade, fadeSize)}
        className={cn(
          "size-full rounded-[inherit] outline-none",
          "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--hola-accent)"
        )}
      >
        {children}
      </ScrollAreaPrimitive.Viewport>
      <ScrollBar />
      <ScrollBar orientation="horizontal" />
      <ScrollAreaPrimitive.Corner data-slot="scroll-area-corner" />
    </ScrollAreaPrimitive.Root>
  );
}

// Compose mask-image gradients so content fades to transparent at the edges
// of the scroll axis. `to bottom` for vertical, `to right` for horizontal;
// `both` stacks the two with mask-composite: intersect so corners feather.
// WebkitMaskComposite "source-in" mirrors maskComposite "intersect" for older Safari.
function buildFadeStyle(
  fade: FadeMode,
  size: number
): React.CSSProperties | undefined {
  if (fade === "none") return undefined;

  const ramp = (direction: string) =>
    `linear-gradient(${direction}, transparent, black ${size}px, black calc(100% - ${size}px), transparent)`;

  const v = ramp("to bottom");
  const h = ramp("to right");

  if (fade === "vertical") return { WebkitMaskImage: v, maskImage: v };
  if (fade === "horizontal") return { WebkitMaskImage: h, maskImage: h };

  const stacked = `${v}, ${h}`;

  return {
    WebkitMaskImage: stacked,
    maskImage: stacked,
    WebkitMaskComposite: "source-in",
    maskComposite: "intersect",
  };
}

function ScrollBar({
  className,
  orientation = "vertical",
  ...props
}: ScrollAreaPrimitive.Scrollbar.Props) {
  return (
    <ScrollAreaPrimitive.Scrollbar
      data-slot="scroll-area-scrollbar"
      orientation={orientation}
      className={cn(
        "flex touch-none select-none p-0.5 transition-opacity duration-150",
        "data-[orientation=vertical]:h-full data-[orientation=vertical]:w-2",
        "data-[orientation=horizontal]:h-2 data-[orientation=horizontal]:w-full data-[orientation=horizontal]:flex-col",
        className
      )}
      {...props}
    >
      <ScrollAreaPrimitive.Thumb
        data-slot="scroll-area-thumb"
        className={cn(
          "flex-1 rounded-full",
          "bg-(--hola-fg)/20 hover:bg-(--hola-fg)/30",
          "dark:bg-(--hola-fg)/25 dark:hover:bg-(--hola-fg)/35"
        )}
      />
    </ScrollAreaPrimitive.Scrollbar>
  );
}

export { ScrollArea, ScrollBar };
