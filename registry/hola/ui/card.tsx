import * as React from "react";

import { cn } from "@/registry/hola/lib/utils";

// -----------------------------------------------------------------------------
// Card — bordered surface container. Catalyst-philosophy visuals:
// translucent overlay border, asymmetric light/dark (raised vs etched),
// bg-clip-padding to keep bg inside the border. No size variant; consumers
// size via className.
// -----------------------------------------------------------------------------

function Card({
  className,
  size = "default",
  ...props
}: React.ComponentProps<"div"> & { size?: "default" | "sm" }) {
  return (
    <div
      data-slot="card"
      data-size={size}
      className={cn(
        "group/card flex flex-col gap-6 rounded-[10px] bg-clip-padding",
        "border border-(--hola-fg)/10 dark:border-(--hola-fg)/15",
        // Asymmetric: light = raised surface with shadow, dark = etched tint, no shadow.
        "bg-bg shadow-sm",
        "dark:bg-(--hola-surface) dark:shadow-none",
        // Size variants — tighter padding rhythm for sm.
        "data-[size=default]:py-6 data-[size=sm]:py-4",
        className
      )}
      {...props}
    />
  );
}

// -----------------------------------------------------------------------------
// CardHeader — grid layout supporting Title + Description (rows 1 + 2) and an
// optional CardAction in the right column.
// -----------------------------------------------------------------------------

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "group/card-header grid auto-rows-min items-start gap-1.5",
        "px-6 group-data-[size=sm]/card:px-4",
        "has-data-[slot=card-action]:grid-cols-[1fr_auto]",
        "has-data-[slot=card-description]:grid-rows-[auto_auto]",
        className
      )}
      {...props}
    />
  );
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-title"
      className={cn(
        "text-base font-semibold leading-none tracking-tight text-fg",
        className
      )}
      {...props}
    />
  );
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-description"
      className={cn("text-sm leading-normal text-muted", className)}
      {...props}
    />
  );
}

function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className
      )}
      {...props}
    />
  );
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn(
        "px-6 group-data-[size=sm]/card:px-4",
        className
      )}
      {...props}
    />
  );
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn(
        "flex items-center gap-3",
        "px-6 group-data-[size=sm]/card:px-4",
        "border-t border-(--hola-fg)/[0.06] pt-6 group-data-[size=sm]/card:pt-4 [&:not(:has(*))]:hidden",
        // Optional border-less footer — opt out via className="border-t-0 pt-0".
        className
      )}
      {...props}
    />
  );
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
};
