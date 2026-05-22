"use client";

import * as React from "react";
import { Dialog as SheetPrimitive } from "@base-ui/react/dialog";

import { cn } from "@/registry/hola/lib/utils";

const Sheet = SheetPrimitive.Root;
const SheetPortal = SheetPrimitive.Portal;

function SheetTrigger({ ...props }: SheetPrimitive.Trigger.Props) {
  return <SheetPrimitive.Trigger data-slot="sheet-trigger" {...props} />;
}

function SheetClose({ ...props }: SheetPrimitive.Close.Props) {
  return <SheetPrimitive.Close data-slot="sheet-close" {...props} />;
}

function SheetOverlay({
  className,
  ...props
}: SheetPrimitive.Backdrop.Props) {
  return (
    <SheetPrimitive.Backdrop
      data-slot="sheet-overlay"
      className={cn(
        "fixed inset-0 z-50 isolate",
        "bg-(--hola-fg)/20 backdrop-blur-[2px] dark:bg-black/60",
        "transition-opacity duration-200",
        "data-[starting-style]:opacity-0 data-[ending-style]:opacity-0",
        className
      )}
      {...props}
    />
  );
}

function XIcon() {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m4 4 8 8M12 4l-8 8" />
    </svg>
  );
}

function SheetContent({
  className,
  children,
  side = "right",
  showCloseButton = true,
  ...props
}: SheetPrimitive.Popup.Props & {
  side?: "top" | "right" | "bottom" | "left";
  showCloseButton?: boolean;
}) {
  return (
    <SheetPortal>
      <SheetOverlay />
      <SheetPrimitive.Popup
        data-slot="sheet-content"
        data-side={side}
        className={cn(
          "fixed z-50 flex flex-col gap-4 p-6",
          "bg-(--hola-bg) dark:bg-(--hola-surface-elevated) bg-clip-padding",
          "shadow-xl outline-none",
          "transition-transform duration-200 ease-out",
          "border-(--hola-fg)/10 dark:border-(--hola-fg)/15",
          // Right.
          "data-[side=right]:inset-y-0 data-[side=right]:right-0 data-[side=right]:h-full data-[side=right]:w-3/4 data-[side=right]:max-w-sm data-[side=right]:border-l",
          "data-[side=right]:data-[starting-style]:translate-x-full data-[side=right]:data-[ending-style]:translate-x-full",
          // Left.
          "data-[side=left]:inset-y-0 data-[side=left]:left-0 data-[side=left]:h-full data-[side=left]:w-3/4 data-[side=left]:max-w-sm data-[side=left]:border-r",
          "data-[side=left]:data-[starting-style]:-translate-x-full data-[side=left]:data-[ending-style]:-translate-x-full",
          // Top.
          "data-[side=top]:inset-x-0 data-[side=top]:top-0 data-[side=top]:w-full data-[side=top]:border-b",
          "data-[side=top]:data-[starting-style]:-translate-y-full data-[side=top]:data-[ending-style]:-translate-y-full",
          // Bottom.
          "data-[side=bottom]:inset-x-0 data-[side=bottom]:bottom-0 data-[side=bottom]:w-full data-[side=bottom]:border-t",
          "data-[side=bottom]:data-[starting-style]:translate-y-full data-[side=bottom]:data-[ending-style]:translate-y-full",
          className
        )}
        {...props}
      >
        {children}
        {showCloseButton && (
          <SheetPrimitive.Close
            data-slot="sheet-close"
            className={cn(
              "absolute top-3.5 right-3.5 inline-flex size-7 items-center justify-center",
              "rounded-[5px] text-muted outline-none transition-colors duration-100",
              "hover:bg-(--hola-fg)/[0.06] hover:text-fg active:bg-(--hola-fg)/[0.1]",
              "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--hola-accent)",
              "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
            )}
          >
            <XIcon />
            <span className="sr-only">Close</span>
          </SheetPrimitive.Close>
        )}
      </SheetPrimitive.Popup>
    </SheetPortal>
  );
}

function SheetHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sheet-header"
      className={cn("flex flex-col gap-1.5 text-left", className)}
      {...props}
    />
  );
}

function SheetFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sheet-footer"
      className={cn(
        "mt-auto flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
        className
      )}
      {...props}
    />
  );
}

function SheetTitle({ className, ...props }: SheetPrimitive.Title.Props) {
  return (
    <SheetPrimitive.Title
      data-slot="sheet-title"
      className={cn(
        "text-base font-semibold leading-none tracking-tight text-fg",
        className
      )}
      {...props}
    />
  );
}

function SheetDescription({
  className,
  ...props
}: SheetPrimitive.Description.Props) {
  return (
    <SheetPrimitive.Description
      data-slot="sheet-description"
      className={cn("text-sm text-muted", className)}
      {...props}
    />
  );
}

export {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetOverlay,
  SheetPortal,
  SheetTitle,
  SheetTrigger,
};
