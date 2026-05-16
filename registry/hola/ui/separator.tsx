"use client";

import { Separator as SeparatorPrimitive } from "@base-ui/react/separator";

import { cn } from "@/registry/hola/lib/utils";

function Separator({
  className,
  orientation = "horizontal",
  soft = false,
  ...props
}: SeparatorPrimitive.Props & { soft?: boolean }) {
  return (
    <SeparatorPrimitive
      data-slot="separator"
      orientation={orientation}
      className={cn(
        "shrink-0",
        // Catalyst's soft variant — half the opacity, for in-card / subtle dividers.
        soft ? "bg-(--hola-fg)/[0.05]" : "bg-(--hola-fg)/[0.1]",
        "data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full",
        "data-[orientation=vertical]:w-px data-[orientation=vertical]:self-stretch",
        className
      )}
      {...props}
    />
  );
}

export { Separator };
