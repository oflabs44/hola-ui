"use client";

import { Switch as SwitchPrimitive } from "@base-ui/react/switch";

import { cn } from "@/registry/hola/lib/utils";

function Switch({
  className,
  size = "default",
  ...props
}: SwitchPrimitive.Root.Props & { size?: "sm" | "default" }) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      data-size={size}
      className={cn(
        "peer group/switch relative inline-flex shrink-0 cursor-default rounded-full",
        "transition-colors duration-200",
        // Sizing — Catalyst's default is responsive (mobile bigger).
        "data-[size=default]:h-6 data-[size=default]:w-10 data-[size=default]:p-[3px]",
        "data-[size=default]:sm:h-5 data-[size=default]:sm:w-8",
        "data-[size=sm]:h-4 data-[size=sm]:w-7 data-[size=sm]:p-[2px]",
        // Off state — Catalyst-style ring-inset instead of border for cleaner edge.
        "bg-(--hola-fg)/[0.08] ring-1 ring-inset ring-(--hola-fg)/10",
        "dark:bg-(--hola-fg)/[0.08] dark:ring-(--hola-fg)/15",
        "hover:bg-(--hola-fg)/[0.12] hover:ring-(--hola-fg)/20",
        "dark:hover:bg-(--hola-fg)/[0.12] dark:hover:ring-(--hola-fg)/25",
        // On state — accent fill, ring matches.
        "data-[checked]:bg-(--hola-accent) data-[checked]:ring-(--hola-accent)",
        "data-[checked]:hover:bg-(--hola-accent)/95",
        // Focus.
        "outline-none focus-visible:ring-2 focus-visible:ring-(--hola-accent) focus-visible:ring-offset-2 focus-visible:ring-offset-bg",
        // Disabled.
        "data-disabled:cursor-not-allowed data-disabled:opacity-50",
        // Forced colors.
        "forced-colors:outline",
        className
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(
          "pointer-events-none block rounded-full bg-white shadow-sm ring-1 ring-black/5",
          "transition-transform duration-200 ease-in-out",
          // Default sizing — responsive thumb.
          "group-data-[size=default]/switch:size-4.5",
          "group-data-[size=default]/switch:sm:size-3.5",
          // Default translate distances.
          "group-data-[size=default]/switch:group-data-[checked]/switch:translate-x-4",
          "group-data-[size=default]/switch:sm:group-data-[checked]/switch:translate-x-3",
          // Small sizing.
          "group-data-[size=sm]/switch:size-3",
          "group-data-[size=sm]/switch:group-data-[checked]/switch:translate-x-3"
        )}
      />
    </SwitchPrimitive.Root>
  );
}

export { Switch };
