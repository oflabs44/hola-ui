"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/registry/hola/lib/utils";
import { Button } from "@/registry/hola/ui/button";
import { Input } from "@/registry/hola/ui/input";

// -----------------------------------------------------------------------------
// InputGroup — composable wrapper that hosts the border / bg / focus ring.
// Children (InputGroupInput, InputGroupAddon, InputGroupButton, InputGroupText)
// are transparent and rely on the group's surface. Supports inline addons
// (icons / text / buttons left or right) and block addons (full-width top or
// bottom — for things like character counters or multi-line context).
// -----------------------------------------------------------------------------

function InputGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      role="group"
      data-slot="input-group"
      className={cn(
        "group/input-group relative flex w-full min-w-0 items-center",
        // Surface — asymmetric light/dark per Catalyst.
        "h-9 rounded-[6px] border bg-clip-padding",
        "border-(--hola-fg)/10 hover:border-(--hola-fg)/20",
        "dark:border-(--hola-fg)/15 dark:hover:border-(--hola-fg)/25",
        "bg-bg shadow-xs dark:bg-(--hola-fg)/[0.04] dark:shadow-none",
        // Focus — solid 2px accent ring when any contained control is focused.
        "outline-none transition-[box-shadow,border-color] duration-100",
        "has-[[data-slot=input-group-control]:focus-visible]:ring-2",
        "has-[[data-slot=input-group-control]:focus-visible]:ring-(--hola-accent)",
        // Invalid — when any contained control is aria-invalid.
        "has-[[data-slot][aria-invalid=true]]:ring-2",
        "has-[[data-slot][aria-invalid=true]]:ring-(--hola-danger)",
        // Block addons force vertical layout and grow the group's height.
        "has-[>textarea]:h-auto",
        "has-[>[data-align=block-start]]:h-auto has-[>[data-align=block-start]]:flex-col",
        "has-[>[data-align=block-end]]:h-auto has-[>[data-align=block-end]]:flex-col",
        // Auto-tighten input padding when an inline addon sits adjacent.
        "has-[>[data-align=inline-start]]:[&>[data-slot=input-group-control]]:pl-1.5",
        "has-[>[data-align=inline-end]]:[&>[data-slot=input-group-control]]:pr-1.5",
        // Disabled state propagation.
        "has-[[data-slot=input-group-control]:disabled]:opacity-50",
        "has-[[data-slot=input-group-control]:disabled]:pointer-events-none",
        className
      )}
      {...props}
    />
  );
}

// -----------------------------------------------------------------------------
// InputGroupAddon — slot for icons / text / buttons inside the group.
// `align` controls position; clicking the addon focuses the contained input.
// -----------------------------------------------------------------------------

const inputGroupAddonVariants = cva(
  cn(
    "flex cursor-text select-none items-center justify-center gap-2",
    "h-auto py-1.5 text-sm font-medium text-muted",
    "group-has-[[data-slot=input-group-control]:disabled]/input-group:opacity-50",
    "[&>svg:not([class*='size-'])]:size-4"
  ),
  {
    variants: {
      align: {
        "inline-start": "order-first pl-2 has-[>button]:-ml-1",
        "inline-end": "order-last pr-2 has-[>button]:-mr-1",
        "block-start": "order-first w-full justify-start px-2.5 pt-2",
        "block-end": "order-last w-full justify-start px-2.5 pb-2",
      },
    },
    defaultVariants: {
      align: "inline-start",
    },
  }
);

function InputGroupAddon({
  className,
  align = "inline-start",
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof inputGroupAddonVariants>) {
  return (
    <div
      role="group"
      data-slot="input-group-addon"
      data-align={align}
      className={cn(inputGroupAddonVariants({ align }), className)}
      onClick={(e) => {
        // Don't steal focus when clicking a button inside the addon.
        if ((e.target as HTMLElement).closest("button")) return;

        e.currentTarget.parentElement
          ?.querySelector<HTMLInputElement>("[data-slot=input-group-control]")
          ?.focus();
      }}
      {...props}
    />
  );
}

// -----------------------------------------------------------------------------
// InputGroupInput — Input stripped of its own border / bg / shadow / ring.
// The group's root surface carries those instead.
// -----------------------------------------------------------------------------

function InputGroupInput({ className, ...props }: React.ComponentProps<"input">) {
  return (
    <Input
      data-slot="input-group-control"
      className={cn(
        "h-full flex-1",
        "rounded-none border-0 bg-transparent shadow-none",
        "focus-visible:ring-0 aria-invalid:ring-0",
        "dark:bg-transparent dark:shadow-none",
        className
      )}
      {...props}
    />
  );
}

// -----------------------------------------------------------------------------
// InputGroupButton — Button sized + styled for use inside the group's addon.
// Defaults to ghost variant + xs size; consumer can override.
// -----------------------------------------------------------------------------

const inputGroupButtonVariants = cva("flex items-center shadow-none", {
  variants: {
    size: {
      xs: "h-6 gap-1 rounded-[4px] px-1.5 text-xs [&>svg:not([class*='size-'])]:size-3.5",
      sm: "h-7 gap-1.5 rounded-[5px] px-2 text-xs",
      "icon-xs": "size-6 rounded-[4px] p-0 [&>svg:not([class*='size-'])]:size-3.5",
      "icon-sm": "size-7 rounded-[5px] p-0",
    },
  },
  defaultVariants: {
    size: "xs",
  },
});

function InputGroupButton({
  className,
  type = "button",
  variant = "ghost",
  size = "xs",
  ...props
}: Omit<React.ComponentProps<typeof Button>, "size" | "type"> &
  VariantProps<typeof inputGroupButtonVariants> & {
    type?: "button" | "submit" | "reset";
  }) {
  return (
    <Button
      type={type}
      data-size={size}
      variant={variant}
      className={cn(inputGroupButtonVariants({ size }), className)}
      {...props}
    />
  );
}

// -----------------------------------------------------------------------------
// InputGroupText — span wrapper for static text or icons inside an addon
// (currency symbols, units like "kg", help icons).
// -----------------------------------------------------------------------------

function InputGroupText({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      className={cn(
        "flex items-center gap-2 text-sm text-muted",
        "[&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    />
  );
}

export {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
};
