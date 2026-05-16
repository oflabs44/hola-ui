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
        "group/radio peer relative isolate inline-flex aspect-square shrink-0 items-center justify-center",
        // Catalyst's responsive sizing: 4.5 mobile, 4 desktop.
        "size-4.5 rounded-full sm:size-4",
        // Surface — light: bg via before + shadow. Dark: subtle tint, no shadow.
        "before:absolute before:inset-0 before:-z-10 before:rounded-full before:bg-bg before:shadow-sm",
        "dark:before:hidden dark:bg-(--hola-fg)/[0.05]",
        // Border — translucent overlay. Becomes transparent on check (bg takes over).
        "border border-(--hola-fg)/15 hover:border-(--hola-fg)/30",
        "dark:border-(--hola-fg)/15 dark:hover:border-(--hola-fg)/30",
        "data-[checked]:border-transparent data-[checked]:bg-(--hola-accent)",
        "data-[checked]:before:bg-(--hola-accent)",
        "dark:data-[checked]:border-(--hola-fg)/5",
        // Inner 1px white highlight (Catalyst's premium signature).
        "after:absolute after:inset-0 after:rounded-full after:shadow-[inset_0_1px_oklch(1_0_0_/_0.15)]",
        "dark:after:-inset-px dark:after:hidden dark:data-[checked]:after:block",
        // Focus.
        "outline-none transition-[box-shadow,background-color,border-color] duration-100",
        "focus-visible:ring-2 focus-visible:ring-(--hola-accent) focus-visible:ring-offset-2 focus-visible:ring-offset-bg",
        // Invalid.
        "aria-invalid:border-(--hola-danger)",
        // Disabled.
        "disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    >
      <RadioPrimitive.Indicator
        data-slot="radio-group-indicator"
        className="grid place-content-center text-(--hola-accent-fg)"
      >
        {/* Inner dot — white (or accent-fg) against the accent outer. */}
        <span className="block size-1.5 rounded-full bg-current sm:size-1.5" />
      </RadioPrimitive.Indicator>
    </RadioPrimitive.Root>
  );
}

export { RadioGroup, RadioGroupItem };
