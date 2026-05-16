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
        "peer group/switch relative inline-flex shrink-0 items-center bg-clip-padding",
        "rounded-full border bg-bg",
        // Sizing per data-size.
        "data-[size=default]:h-[20px] data-[size=default]:w-[34px]",
        "data-[size=sm]:h-[16px] data-[size=sm]:w-[28px]",
        // Off state — neutral surface, asymmetric light/dark.
        "border-(--hola-fg)/15 bg-(--hola-fg)/[0.06] shadow-xs",
        "dark:border-(--hola-fg)/20 dark:bg-(--hola-fg)/[0.08] dark:shadow-none",
        "hover:bg-(--hola-fg)/[0.1] dark:hover:bg-(--hola-fg)/[0.12]",
        // On state — fill with accent.
        "data-[checked]:border-(--hola-accent) data-[checked]:bg-(--hola-accent)",
        "data-[checked]:hover:bg-(--hola-accent)/90",
        // Focus + transitions.
        "outline-none transition-[background-color,border-color,box-shadow] duration-150",
        "focus-visible:ring-2 focus-visible:ring-(--hola-accent) focus-visible:ring-offset-2 focus-visible:ring-offset-bg",
        // Hit area for touch.
        "after:absolute after:-inset-x-1 after:-inset-y-2",
        // Disabled.
        "data-disabled:cursor-not-allowed data-disabled:opacity-50",
        className
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(
          "pointer-events-none block rounded-full bg-bg shadow-sm ring-0",
          "transition-transform duration-150",
          // Sizing per parent's data-size.
          "group-data-[size=default]/switch:size-[14px] group-data-[size=default]/switch:translate-x-[2px]",
          "group-data-[size=sm]/switch:size-[12px] group-data-[size=sm]/switch:translate-x-[1px]",
          // On state translation.
          "group-data-[size=default]/switch:group-data-[checked]/switch:translate-x-[17px]",
          "group-data-[size=sm]/switch:group-data-[checked]/switch:translate-x-[13px]",
          // Thumb colour on checked — white on accent reads cleaner than tinted.
          "group-data-[checked]/switch:bg-white"
        )}
      />
    </SwitchPrimitive.Root>
  );
}

export { Switch };
