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
        "shrink-0 bg-transparent",
        // Catalyst's translucent border. Soft = half opacity for in-card use.
        soft ? "border-(--hola-fg)/[0.05]" : "border-(--hola-fg)/[0.1]",
        "data-[orientation=horizontal]:w-full data-[orientation=horizontal]:border-t",
        "data-[orientation=vertical]:self-stretch data-[orientation=vertical]:border-l",
        className
      )}
      {...props}
    />
  );
}

export { Separator };
