"use client";

import * as React from "react";
import { Toggle as TogglePrimitive } from "@base-ui/react/toggle";
import { ToggleGroup as ToggleGroupPrimitive } from "@base-ui/react/toggle-group";
import { type VariantProps } from "class-variance-authority";

import { cn } from "@/registry/hola/lib/utils";
import { toggleVariants } from "@/registry/hola/ui/toggle";

const ToggleGroupContext = React.createContext<
  VariantProps<typeof toggleVariants> & {
    spacing?: number;
    orientation?: "horizontal" | "vertical";
  }
>({
  size: "default",
  variant: "default",
  spacing: 0,
  orientation: "horizontal",
});

function ToggleGroup({
  className,
  variant,
  size,
  spacing = 0,
  orientation = "horizontal",
  children,
  ...props
}: ToggleGroupPrimitive.Props &
  VariantProps<typeof toggleVariants> & {
    spacing?: number;
    orientation?: "horizontal" | "vertical";
  }) {
  return (
    <ToggleGroupPrimitive
      data-slot="toggle-group"
      data-variant={variant}
      data-size={size}
      data-spacing={spacing}
      data-orientation={orientation}
      style={{ "--gap": spacing } as React.CSSProperties}
      className={cn(
        "group/toggle-group flex w-fit flex-row items-center gap-[calc(var(--gap)*0.25rem)]",
        "data-vertical:flex-col data-vertical:items-stretch",
        "rounded-[6px]",
        // When spacing=0 + variant=outline, the group becomes a unified segmented control.
        "data-[spacing=0]:data-[variant=outline]:shadow-xs",
        className
      )}
      {...props}
    >
      <ToggleGroupContext.Provider value={{ variant, size, spacing, orientation }}>
        {children}
      </ToggleGroupContext.Provider>
    </ToggleGroupPrimitive>
  );
}

function ToggleGroupItem({
  className,
  children,
  variant = "default",
  size = "default",
  ...props
}: TogglePrimitive.Props & VariantProps<typeof toggleVariants>) {
  const context = React.useContext(ToggleGroupContext);
  const resolvedVariant = context.variant ?? variant;
  const resolvedSize = context.size ?? size;

  return (
    <TogglePrimitive
      data-slot="toggle-group-item"
      data-variant={resolvedVariant}
      data-size={resolvedSize}
      data-spacing={context.spacing}
      className={cn(
        toggleVariants({ variant: resolvedVariant, size: resolvedSize }),
        "shrink-0 focus:z-10 focus-visible:z-10",
        // Segmented-control mode (spacing=0): items lose individual rounding + shadow,
        // collapse borders, and pick up rounded corners only on the outer ends.
        "group-data-[spacing=0]/toggle-group:rounded-none",
        "group-data-[spacing=0]/toggle-group:shadow-none",
        "group-data-horizontal/toggle-group:data-[spacing=0]:data-[variant=outline]:border-l-0",
        "group-data-horizontal/toggle-group:data-[spacing=0]:data-[variant=outline]:first:border-l",
        "group-data-vertical/toggle-group:data-[spacing=0]:data-[variant=outline]:border-t-0",
        "group-data-vertical/toggle-group:data-[spacing=0]:data-[variant=outline]:first:border-t",
        "group-data-horizontal/toggle-group:data-[spacing=0]:first:rounded-l-[6px]",
        "group-data-horizontal/toggle-group:data-[spacing=0]:last:rounded-r-[6px]",
        "group-data-vertical/toggle-group:data-[spacing=0]:first:rounded-t-[6px]",
        "group-data-vertical/toggle-group:data-[spacing=0]:last:rounded-b-[6px]",
        className
      )}
      {...props}
    >
      {children}
    </TogglePrimitive>
  );
}

export { ToggleGroup, ToggleGroupItem };
