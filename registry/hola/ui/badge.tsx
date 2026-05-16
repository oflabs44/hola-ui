import { mergeProps } from "@base-ui/react/merge-props";
import { useRender } from "@base-ui/react/use-render";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/registry/hola/lib/utils";

const badgeVariants = cva(
  cn(
    "inline-flex w-fit shrink-0 items-center justify-center gap-1 overflow-hidden whitespace-nowrap",
    "h-5 px-2 py-0.5 rounded-full",
    "text-xs font-medium",
    "border border-transparent bg-clip-padding",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--hola-accent)",
    "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-3"
  ),
  {
    variants: {
      variant: {
        // Solid brand badge — for "new", "pro", primary labels
        default: cn(
          "bg-(--hola-brand) text-(--hola-brand-fg)",
          "[a&]:hover:bg-(--hola-brand)/85",
          "dark:border-(--hola-fg)/5"
        ),
        // Tinted neutral — the workhorse status pill
        secondary: cn(
          "bg-(--hola-fg)/[0.08] text-fg",
          "[a&]:hover:bg-(--hola-fg)/[0.12]",
          "dark:bg-(--hola-fg)/[0.1] dark:[a&]:hover:bg-(--hola-fg)/[0.14]"
        ),
        // Outlined — neutral border, transparent
        outline: cn(
          "border-(--hola-fg)/15 text-fg",
          "[a&]:hover:bg-(--hola-fg)/[0.04]",
          "dark:border-(--hola-fg)/20"
        ),
        // Ghost — bare text, hover background
        ghost: cn(
          "text-fg",
          "[a&]:hover:bg-(--hola-fg)/[0.06]"
        ),
        // Tinted destructive — Linear/Resend style status badge for errors
        destructive: cn(
          "bg-(--hola-danger)/[0.12] text-(--hola-danger)",
          "[a&]:hover:bg-(--hola-danger)/[0.18]",
          "dark:bg-(--hola-danger)/[0.18]"
        ),
        // Link badge — text only with underline on hover
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
