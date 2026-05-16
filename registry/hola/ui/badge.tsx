import { mergeProps } from "@base-ui/react/merge-props";
import { useRender } from "@base-ui/react/use-render";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/registry/hola/lib/utils";

const badgeVariants = cva(
  cn(
    "inline-flex w-fit shrink-0 items-center justify-center gap-x-1.5",
    "rounded-md px-1.5 py-0.5",
    "text-sm/5 font-medium sm:text-xs/5",
    "border border-transparent bg-clip-padding",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--hola-accent)",
    "forced-colors:outline",
    "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-3"
  ),
  {
    variants: {
      variant: {
        // Solid brand — the one non-tinted variant, for "Primary" / "New" emphasis.
        default: cn(
          "bg-(--hola-brand) text-(--hola-brand-fg)",
          "[a&]:hover:bg-(--hola-brand)/85",
          "dark:border-(--hola-fg)/5"
        ),
        // Catalyst-zinc-style tinted neutral — the workhorse status pill.
        secondary: cn(
          "bg-(--hola-fg)/[0.08] text-fg",
          "[a&]:hover:bg-(--hola-fg)/[0.14]",
          "dark:bg-(--hola-fg)/[0.05] dark:[a&]:hover:bg-(--hola-fg)/[0.1]"
        ),
        // Translucent border, transparent bg.
        outline: cn(
          "border-(--hola-fg)/15 text-fg",
          "[a&]:hover:bg-(--hola-fg)/[0.04]",
          "dark:border-(--hola-fg)/20"
        ),
        // Bare text. Used for inline tags in dense surfaces.
        ghost: cn(
          "text-muted",
          "[a&]:hover:bg-(--hola-fg)/[0.06] [a&]:hover:text-fg"
        ),
        // Catalyst-style tinted danger — Linear/Resend status-badge look.
        destructive: cn(
          "bg-(--hola-danger)/15 text-(--hola-danger)",
          "[a&]:hover:bg-(--hola-danger)/25",
          "dark:bg-(--hola-danger)/10"
        ),
        // Text-only with underline on hover.
        link: cn(
          "text-(--hola-accent) underline-offset-2",
          "[a&]:hover:underline"
        ),
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

function Badge({
  className,
  variant = "default",
  render,
  ...props
}: useRender.ComponentProps<"span"> & VariantProps<typeof badgeVariants>) {
  return useRender({
    defaultTagName: "span",
    props: mergeProps<"span">(
      { className: cn(badgeVariants({ variant }), className) },
      props
    ),
    render,
    state: { slot: "badge", variant },
  });
}

export { Badge, badgeVariants };
