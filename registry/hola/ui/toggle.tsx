"use client";

import { Toggle as TogglePrimitive } from "@base-ui/react/toggle";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/registry/hola/lib/utils";

const toggleVariants = cva(
  cn(
    "group/toggle inline-flex shrink-0 items-center justify-center gap-1.5 whitespace-nowrap",
    "rounded-[6px] border bg-clip-padding font-medium",
    "outline-none transition-[background-color,border-color,color,box-shadow] duration-100",
    "focus-visible:ring-2 focus-visible:ring-(--hola-accent)",
    "disabled:pointer-events-none disabled:opacity-50",
    "active:not-aria-[haspopup]:translate-y-px",
    "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
    "forced-colors:[--toggle-icon:ButtonText]"
  ),
  {
    variants: {
      variant: {
        // Default — transparent off, tinted on. Same vibe as Button ghost but with pressed state.
        default: cn(
          "border-transparent bg-transparent text-fg",
          "hover:bg-(--hola-fg)/[0.06]",
          "data-[pressed]:bg-(--hola-fg)/[0.1]",
          "dark:hover:bg-(--hola-fg)/[0.08]",
          "dark:data-[pressed]:bg-(--hola-fg)/[0.14]"
        ),
        // Outline — bordered, transparent off, tinted on.
        outline: cn(
          "border-(--hola-fg)/10 bg-transparent text-fg shadow-xs",
          "hover:bg-(--hola-fg)/[0.04]",
          "data-[pressed]:bg-(--hola-fg)/[0.08]",
          "dark:border-(--hola-fg)/15 dark:hover:bg-(--hola-fg)/[0.06] dark:shadow-none",
          "dark:data-[pressed]:bg-(--hola-fg)/[0.12]"
        ),
      },
      size: {
        default: "h-9 min-w-9 px-2.5 text-sm",
        sm: "h-8 min-w-8 px-2 text-xs",
        lg: "h-10 min-w-10 px-3 text-sm",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Toggle({
  className,
  variant = "default",
  size = "default",
  ...props
}: TogglePrimitive.Props & VariantProps<typeof toggleVariants>) {
  return (
    <TogglePrimitive
      data-slot="toggle"
      className={cn(toggleVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Toggle, toggleVariants };
