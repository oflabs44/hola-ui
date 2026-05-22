"use client";

import { NavigationMenu as NavigationMenuPrimitive } from "@base-ui/react/navigation-menu";
import { cva } from "class-variance-authority";

import { cn } from "@/registry/hola/lib/utils";

function NavigationMenu({
  align = "start",
  className,
  children,
  ...props
}: NavigationMenuPrimitive.Root.Props &
  Pick<NavigationMenuPrimitive.Positioner.Props, "align">) {
  return (
    <NavigationMenuPrimitive.Root
      data-slot="navigation-menu"
      className={cn(
        "group/navigation-menu relative flex max-w-max flex-1 items-center justify-center",
        className
      )}
      {...props}
    >
      {children}
      <NavigationMenuPositioner align={align} />
    </NavigationMenuPrimitive.Root>
  );
}

function NavigationMenuList({
  className,
  ...props
}: NavigationMenuPrimitive.List.Props) {
  return (
    <NavigationMenuPrimitive.List
      data-slot="navigation-menu-list"
      className={cn(
        "group flex flex-1 list-none items-center justify-center gap-1",
        className
      )}
      {...props}
    />
  );
}

function NavigationMenuItem({
  className,
  ...props
}: NavigationMenuPrimitive.Item.Props) {
  return (
    <NavigationMenuPrimitive.Item
      data-slot="navigation-menu-item"
      className={cn("relative", className)}
      {...props}
    />
  );
}

const navigationMenuTriggerStyle = cva(
  cn(
    "group/navigation-menu-trigger inline-flex h-9 w-max cursor-default items-center justify-center gap-1",
    "rounded-[5px] px-3 text-sm font-medium text-fg",
    "outline-none select-none transition-colors duration-100",
    "hover:bg-(--hola-fg)/[0.06] dark:hover:bg-(--hola-fg)/[0.08]",
    "data-[popup-open]:bg-(--hola-fg)/[0.08] dark:data-[popup-open]:bg-(--hola-fg)/[0.1]",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--hola-accent)",
    "disabled:pointer-events-none disabled:opacity-50",
    "[&_svg]:pointer-events-none [&_svg]:shrink-0"
  )
);

function ChevronDownIcon() {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className="size-3.5 transition-transform duration-150 group-data-[popup-open]/navigation-menu-trigger:rotate-180"
    >
      <path d="m4 6 4 4 4-4" />
    </svg>
  );
}

function NavigationMenuTrigger({
  className,
  children,
  ...props
}: NavigationMenuPrimitive.Trigger.Props) {
  return (
    <NavigationMenuPrimitive.Trigger
      data-slot="navigation-menu-trigger"
      className={cn(navigationMenuTriggerStyle(), className)}
      {...props}
    >
      {children}
      <ChevronDownIcon />
    </NavigationMenuPrimitive.Trigger>
  );
}

function NavigationMenuContent({
  className,
  ...props
}: NavigationMenuPrimitive.Content.Props) {
  return (
    <NavigationMenuPrimitive.Content
      data-slot="navigation-menu-content"
      className={cn(
        "h-full w-auto p-4",
        "transition-[opacity,transform,translate] duration-300",
        "data-[starting-style]:opacity-0 data-[ending-style]:opacity-0",
        "data-[starting-style]:data-[activation-direction=right]:translate-x-[40%] data-[starting-style]:data-[activation-direction=left]:translate-x-[-40%]",
        "data-[ending-style]:data-[activation-direction=right]:translate-x-[-40%] data-[ending-style]:data-[activation-direction=left]:translate-x-[40%]",
        className
      )}
      {...props}
    />
  );
}

function NavigationMenuPositioner({
  className,
  side = "bottom",
  sideOffset = 8,
  align = "start",
  alignOffset = 0,
  ...props
}: NavigationMenuPrimitive.Positioner.Props) {
  return (
    <NavigationMenuPrimitive.Portal>
      <NavigationMenuPrimitive.Positioner
        side={side}
        sideOffset={sideOffset}
        align={align}
        alignOffset={alignOffset}
        className={cn(
          "isolate z-50 h-(--positioner-height) w-(--positioner-width) max-w-(--available-width)",
          "transition-[top,left,right,bottom] duration-300",
          "data-[instant]:transition-none",
          className
        )}
        {...props}
      >
        <NavigationMenuPrimitive.Popup
          data-slot="navigation-menu-popup"
          className={cn(
            "relative h-(--popup-height) w-(--popup-width) origin-(--transform-origin) overflow-hidden",
            "rounded-[6px] bg-(--hola-bg) dark:bg-(--hola-surface-elevated) bg-clip-padding",
            "border border-(--hola-fg)/10 dark:border-(--hola-fg)/15",
            "shadow-lg",
            "transition-[opacity,width,height,scale,translate] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
            "data-[starting-style]:opacity-0 data-[ending-style]:opacity-0"
          )}
        >
          <NavigationMenuPrimitive.Viewport className="relative size-full overflow-hidden" />
        </NavigationMenuPrimitive.Popup>
      </NavigationMenuPrimitive.Positioner>
    </NavigationMenuPrimitive.Portal>
  );
}

function NavigationMenuLink({
  className,
  ...props
}: NavigationMenuPrimitive.Link.Props) {
  return (
    <NavigationMenuPrimitive.Link
      data-slot="navigation-menu-link"
      className={cn(
        "block rounded-[5px] p-3 text-sm leading-none no-underline outline-none transition-colors",
        "hover:bg-(--hola-fg)/[0.06] dark:hover:bg-(--hola-fg)/[0.08]",
        "focus-visible:bg-(--hola-fg)/[0.06] dark:focus-visible:bg-(--hola-fg)/[0.08]",
        className
      )}
      {...props}
    />
  );
}

export {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
};
