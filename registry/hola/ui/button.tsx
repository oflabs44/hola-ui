import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/registry/hola/lib/utils";

const buttonVariants = cva(
  cn(
    "relative isolate inline-flex shrink-0 items-center justify-center whitespace-nowrap",
    "font-medium select-none outline-none bg-clip-padding",
    "transition-[background-color,box-shadow,border-color,color,transform] duration-100",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--hola-accent)",
    "disabled:pointer-events-none disabled:opacity-50",
    "active:not-aria-[haspopup]:translate-y-px",
    "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
    "forced-colors:[--btn-icon:ButtonText]"
  ),
  {
    variants: {
      variant: {
        // Solid near-black (light) / near-white (dark). Layered pseudo elements
        // give it the "tactile" Catalyst feel: optical border + inset surface +
        // 1px white highlight + hover overlay layer.
        default: cn(
          "border border-transparent text-(--hola-brand-fg)",
          "bg-(--hola-brand)",
          "before:absolute before:inset-0 before:-z-10 before:rounded-[inherit]",
          "before:bg-(--hola-brand) before:shadow-sm",
          "after:absolute after:inset-0 after:-z-10 after:rounded-[inherit]",
          "after:shadow-[inset_0_1px_oklch(1_0_0_/_0.15)]",
          "hover:after:bg-(--hola-fg)/[0.08] active:after:bg-(--hola-fg)/[0.12]",
          "dark:before:hidden dark:border-(--hola-fg)/5",
          "dark:after:-inset-px dark:after:rounded-[inherit]",
          "dark:hover:after:bg-(--hola-fg)/[0.08] dark:active:after:bg-(--hola-fg)/[0.12]"
        ),
        // Subtle filled background, no shadow.
        secondary: cn(
          "border border-transparent text-fg",
          "bg-(--hola-fg)/[0.06] hover:bg-(--hola-fg)/[0.1] active:bg-(--hola-fg)/[0.14]",
          "dark:bg-(--hola-fg)/[0.08] dark:hover:bg-(--hola-fg)/[0.12] dark:active:bg-(--hola-fg)/[0.16]"
        ),
        // Transparent + translucent overlay border.
        outline: cn(
          "border border-(--hola-fg)/10 bg-transparent text-fg",
          "hover:bg-(--hola-fg)/[0.025] active:bg-(--hola-fg)/[0.05]",
          "dark:border-(--hola-fg)/15 dark:hover:bg-(--hola-fg)/5 dark:active:bg-(--hola-fg)/10"
        ),
        // Transparent, hover-only background.
        ghost: cn(
          "border border-transparent bg-transparent text-fg",
          "hover:bg-(--hola-fg)/5 active:bg-(--hola-fg)/10"
        ),
        // Solid red, same layered treatment as default.
        destructive: cn(
          "border border-transparent text-(--hola-danger-fg)",
          "bg-(--hola-danger)",
          "before:absolute before:inset-0 before:-z-10 before:rounded-[inherit]",
          "before:bg-(--hola-danger) before:shadow-sm",
          "after:absolute after:inset-0 after:-z-10 after:rounded-[inherit]",
          "after:shadow-[inset_0_1px_oklch(1_0_0_/_0.18)]",
          "hover:after:bg-white/10 active:after:bg-white/15",
          "dark:before:hidden",
          "dark:after:-inset-px dark:after:rounded-[inherit]"
        ),
        // Text-only with underline on hover.
        link: cn(
          "border border-transparent bg-transparent",
          "text-(--hola-accent) underline-offset-4 hover:underline"
        ),
      },
      size: {
        default: "h-8 gap-1.5 rounded-[6px] px-2.5 text-sm/5",
        sm: "h-7 gap-1 rounded-[5px] px-2 text-xs/4",
        lg: "h-10 gap-2 rounded-[7px] px-3.5 text-sm/5",
        icon: "size-8 rounded-[6px]",
        "icon-sm": "size-7 rounded-[5px]",
        "icon-lg": "size-10 rounded-[7px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
