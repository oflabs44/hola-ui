import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/registry/hola/lib/utils";

const alertVariants = cva(
  cn(
    "relative w-full rounded-[6px] border bg-clip-padding px-4 py-3 text-sm",
    "grid grid-cols-[auto_1fr] gap-x-3 gap-y-0.5",
    "has-[>svg]:items-start [&>svg]:col-start-1 [&>svg]:row-span-2 [&>svg]:mt-0.5 [&>svg]:size-4",
    "[&_p]:leading-relaxed"
  ),
  {
    variants: {
      variant: {
        default: cn(
          "border-(--hola-fg)/10 bg-(--hola-bg) text-fg [&>svg]:text-muted",
          "dark:border-(--hola-fg)/15 dark:bg-(--hola-surface-elevated)"
        ),
        destructive: cn(
          "border-(--hola-danger)/25 bg-(--hola-danger)/[0.06] text-(--hola-danger)",
          "dark:border-(--hola-danger)/35 dark:bg-(--hola-danger)/10"
        ),
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

function Alert({
  className,
  variant = "default",
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof alertVariants>) {
  return (
    <div
      data-slot="alert"
      role="alert"
      className={cn(alertVariants({ variant }), className)}
      {...props}
    />
  );
}

function AlertTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-title"
      className={cn("col-start-2 font-medium tracking-tight", className)}
      {...props}
    />
  );
}

function AlertDescription({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-description"
      className={cn(
        "col-start-2 opacity-80 [&_a]:underline [&_a]:underline-offset-4",
        className
      )}
      {...props}
    />
  );
}

export { Alert, AlertDescription, AlertTitle, alertVariants };
