"use client";

import * as React from "react";
import { Avatar as AvatarPrimitive } from "@base-ui/react/avatar";

import { cn } from "@/registry/hola/lib/utils";

// -----------------------------------------------------------------------------
// Avatar — Base UI Avatar with Catalyst's signature inset-outline treatment
// (subtle ring at the border edge that tints the surface beneath it).
// Sizes: sm / default / lg. Shapes: circle (default) / square (20% radius).
// -----------------------------------------------------------------------------

function Avatar({
  className,
  size = "default",
  shape = "circle",
  ...props
}: AvatarPrimitive.Root.Props & {
  size?: "sm" | "default" | "lg";
  shape?: "circle" | "square";
}) {
  return (
    <AvatarPrimitive.Root
      data-slot="avatar"
      data-size={size}
      data-shape={shape}
      className={cn(
        "group/avatar relative flex shrink-0 select-none overflow-hidden",
        // Sizes.
        "data-[size=sm]:size-6 data-[size=sm]:text-xs",
        "data-[size=default]:size-9 data-[size=default]:text-sm",
        "data-[size=lg]:size-12 data-[size=lg]:text-base",
        // Shape — circle (default) or 20% radius square (Catalyst's convention).
        "data-[shape=circle]:rounded-full",
        "data-[shape=square]:rounded-[20%]",
        // Catalyst's inset outline — a 1px translucent ring at the edge that
        // sits ON TOP of the image so it never disappears against a similarly
        // coloured bg.
        "after:absolute after:inset-0 after:rounded-[inherit] after:border after:border-(--hola-fg)/10",
        "after:mix-blend-darken dark:after:border-(--hola-fg)/15 dark:after:mix-blend-lighten",
        className
      )}
      {...props}
    />
  );
}

function AvatarImage({ className, ...props }: AvatarPrimitive.Image.Props) {
  return (
    <AvatarPrimitive.Image
      data-slot="avatar-image"
      className={cn("aspect-square size-full object-cover", className)}
      {...props}
    />
  );
}

function AvatarFallback({
  className,
  ...props
}: AvatarPrimitive.Fallback.Props) {
  return (
    <AvatarPrimitive.Fallback
      data-slot="avatar-fallback"
      className={cn(
        "flex size-full items-center justify-center font-medium uppercase",
        "bg-(--hola-fg)/[0.08] text-fg",
        "dark:bg-(--hola-fg)/[0.1]",
        className
      )}
      {...props}
    />
  );
}

// -----------------------------------------------------------------------------
// AvatarBadge — small indicator at bottom-right (online status, etc.). Sized
// by parent Avatar's data-size. Optional SVG child renders inside.
// -----------------------------------------------------------------------------

function AvatarBadge({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="avatar-badge"
      className={cn(
        "absolute right-0 bottom-0 z-10 inline-flex items-center justify-center rounded-full ring-2 ring-bg select-none",
        "group-data-[size=sm]/avatar:size-2 group-data-[size=sm]/avatar:[&>svg]:hidden",
        "group-data-[size=default]/avatar:size-2.5 group-data-[size=default]/avatar:[&>svg]:size-2",
        "group-data-[size=lg]/avatar:size-3 group-data-[size=lg]/avatar:[&>svg]:size-2",
        className
      )}
      {...props}
    />
  );
}

// -----------------------------------------------------------------------------
// AvatarGroup — overlapping stack of avatars with ring separation. Pairs with
// AvatarGroupCount to show "+N more" overflow.
// -----------------------------------------------------------------------------

function AvatarGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="avatar-group"
      className={cn(
        "group/avatar-group flex -space-x-2",
        "*:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:ring-bg",
        className
      )}
      {...props}
    />
  );
}

function AvatarGroupCount({
  className,
  size = "default",
  ...props
}: React.ComponentProps<"div"> & { size?: "sm" | "default" | "lg" }) {
  return (
    <div
      data-slot="avatar-group-count"
      data-size={size}
      className={cn(
        "relative flex shrink-0 items-center justify-center rounded-full ring-2 ring-bg",
        "bg-(--hola-fg)/[0.08] dark:bg-(--hola-fg)/[0.1]",
        "text-fg font-medium",
        "data-[size=sm]:size-6 data-[size=sm]:text-xs",
        "data-[size=default]:size-9 data-[size=default]:text-sm",
        "data-[size=lg]:size-12 data-[size=lg]:text-base",
        className
      )}
      {...props}
    />
  );
}

export {
  Avatar,
  AvatarImage,
  AvatarFallback,
  AvatarBadge,
  AvatarGroup,
  AvatarGroupCount,
};
