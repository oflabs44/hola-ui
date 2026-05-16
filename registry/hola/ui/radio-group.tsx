"use client";

import { Radio as RadioPrimitive } from "@base-ui/react/radio";
import { RadioGroup as RadioGroupPrimitive } from "@base-ui/react/radio-group";

import { cn } from "@/registry/hola/lib/utils";

function RadioGroup({ className, ...props }: RadioGroupPrimitive.Props) {
  return (
    <RadioGroupPrimitive
      data-slot="radio-group"
      className={cn("grid w-full gap-2", className)}
      {...props}
    />
  );
}

function RadioGroupItem({ className, ...props }: RadioPrimitive.Root.Props) {
  return (
    <RadioPrimitive.Root
      data-slot="radio-group-item"
      className={cn(
        "group/radio peer relative inline-flex aspect-square size-4 shrink-0 items-center justify-center",
        "rounded-full border bg-clip-padding",
        // Default state.
        "border-(--hola-fg)/25 bg-bg shadow-xs",
        "dark:border-(--hola-fg)/30 dark:bg-(--hola-fg)/[0.04] dark:shadow-none",
        "hover:border-(--hola-fg)/40 dark:hover:border-(--hola-fg)/50",
        // Checked — border becomes accent (dot rendered inside).
        "data-[checked]:border-(--hola-accent)",
        // Focus.
        "outline-none transition-[box-shadow,border-color] duration-100",
        "focus-visible:ring-2 focus-visible:ring-(--hola-accent)",
        // Invalid.
        "aria-invalid:border-(--hola-danger) aria-invalid:ring-2 aria-invalid:ring-(--hola-danger)",
        // Hit area for touch.
        "after:absolute after:-inset-x-3 after:-inset-y-2",
        // Disabled.
        "disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    >
      <RadioPrimitive.Indicator
        data-slot="radio-group-indicator"
        className="grid place-content-center"
      >
        <span className="block size-2 rounded-full bg-(--hola-accent)" />
      </RadioPrimitive.Indicator>
    </RadioPrimitive.Root>
  );
}

export { RadioGroup, RadioGroupItem };
