"use client";

import { Checkbox as CheckboxPrimitive } from "@base-ui/react/checkbox";

import { cn } from "@/registry/hola/lib/utils";

function Checkbox({ className, ...props }: CheckboxPrimitive.Root.Props) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        "group/cb peer relative isolate inline-flex shrink-0 items-center justify-center",
        // Catalyst's responsive sizing: 4.5 on mobile, 4 desktop.
        "size-4.5 rounded-[5px] sm:size-4",
        // Surface — light: white bg via before + shadow. Dark: subtle white tint, no shadow.
        "before:absolute before:inset-0 before:-z-10 before:rounded-[4px] before:bg-bg before:shadow-sm",
        "dark:before:hidden dark:bg-(--hola-fg)/[0.05]",
        // Border — translucent overlay. Becomes transparent on check (bg takes over).
        "border border-(--hola-fg)/15 hover:border-(--hola-fg)/30",
        "dark:border-(--hola-fg)/15 dark:hover:border-(--hola-fg)/30",
        "data-[checked]:border-transparent data-[checked]:bg-(--hola-accent)",
        "data-[indeterminate]:border-transparent data-[indeterminate]:bg-(--hola-accent)",
        "dark:data-[checked]:border-(--hola-fg)/5 dark:data-[indeterminate]:border-(--hola-fg)/5",
        // When checked, swap before bg to the accent (light mode only — dark uses element bg).
        "data-[checked]:before:bg-(--hola-accent) data-[indeterminate]:before:bg-(--hola-accent)",
        // Inner 1px white highlight (Catalyst's premium signature).
        // Only one ::after per element — labels handle touch hit-area instead.
        "after:absolute after:inset-0 after:rounded-[4px] after:shadow-[inset_0_1px_oklch(1_0_0_/_0.15)]",
        "dark:after:-inset-px dark:after:hidden dark:data-[checked]:after:block dark:data-[indeterminate]:after:block",
        // Focus.
        "outline-none transition-[box-shadow,background-color,border-color] duration-100",
        "focus-visible:ring-2 focus-visible:ring-(--hola-accent) focus-visible:ring-offset-2 focus-visible:ring-offset-bg",
        // Invalid.
        "aria-invalid:border-(--hola-danger)",
        // Disabled.
        "disabled:cursor-not-allowed disabled:opacity-50",
        // Forced colors (Windows high-contrast).
        "forced-colors:[--check-stroke:HighlightText] forced-colors:data-[checked]:bg-[Highlight] forced-colors:data-[indeterminate]:bg-[Highlight]",
        className
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className="grid place-content-center text-(--hola-accent-fg)"
      >
        <svg
          viewBox="0 0 14 14"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="size-3.5 sm:size-3"
        >
          {/* Checkmark — visible by default, hidden when indeterminate. */}
          <path
            d="M3 8L6 11L11 3.5"
            className="opacity-100 group-data-[indeterminate]/cb:opacity-0"
          />
          {/* Dash — visible only when indeterminate. */}
          <path
            d="M3 7H11"
            className="opacity-0 group-data-[indeterminate]/cb:opacity-100"
          />
        </svg>
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}

export { Checkbox };
