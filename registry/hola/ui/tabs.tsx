"use client";

import { Tabs as TabsPrimitive } from "@base-ui/react/tabs";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/registry/hola/lib/utils";

function Tabs({
  className,
  orientation = "horizontal",
  ...props
}: TabsPrimitive.Root.Props) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      orientation={orientation}
      className={cn(
        "group/tabs flex gap-3 data-[orientation=horizontal]:flex-col",
        className
      )}
      {...props}
    />
  );
}

const tabsListVariants = cva(
  cn(
    "group/tabs-list inline-flex w-fit items-center justify-center text-sm text-muted",
    "group-data-[orientation=vertical]/tabs:h-fit group-data-[orientation=vertical]/tabs:flex-col"
  ),
  {
    variants: {
      variant: {
        default: cn(
          "rounded-[6px] p-1 gap-1",
          "bg-(--hola-fg)/[0.06] dark:bg-(--hola-fg)/[0.08]"
        ),
        line: cn(
          "gap-4 bg-transparent",
          "border-b border-(--hola-fg)/10 dark:border-(--hola-fg)/15",
          "group-data-[orientation=vertical]/tabs:border-b-0 group-data-[orientation=vertical]/tabs:border-r"
        ),
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

function TabsList({
  className,
  variant = "default",
  ...props
}: TabsPrimitive.List.Props & VariantProps<typeof tabsListVariants>) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      data-variant={variant}
      className={cn(tabsListVariants({ variant }), className)}
      {...props}
    />
  );
}

function TabsTrigger({ className, ...props }: TabsPrimitive.Tab.Props) {
  return (
    <TabsPrimitive.Tab
      data-slot="tabs-trigger"
      className={cn(
        // base
        "relative inline-flex cursor-default items-center justify-center gap-1.5 whitespace-nowrap",
        "text-sm font-medium text-muted transition-colors duration-100 select-none",
        "hover:text-fg data-[active]:text-fg",
        "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        // default variant: pill-style active state
        "group-data-[variant=default]/tabs-list:h-7 group-data-[variant=default]/tabs-list:rounded-[4px] group-data-[variant=default]/tabs-list:px-3",
        "group-data-[variant=default]/tabs-list:data-[active]:bg-(--hola-bg) group-data-[variant=default]/tabs-list:data-[active]:shadow-xs",
        "dark:group-data-[variant=default]/tabs-list:data-[active]:bg-(--hola-surface-elevated)",
        // line variant: underline-style active state
        "group-data-[variant=line]/tabs-list:py-2",
        "group-data-[variant=line]/tabs-list:after:absolute group-data-[variant=line]/tabs-list:after:inset-x-0 group-data-[variant=line]/tabs-list:after:-bottom-px group-data-[variant=line]/tabs-list:after:h-0.5 group-data-[variant=line]/tabs-list:after:bg-(--hola-fg) group-data-[variant=line]/tabs-list:after:opacity-0 group-data-[variant=line]/tabs-list:after:transition-opacity",
        "group-data-[variant=line]/tabs-list:data-[active]:after:opacity-100",
        // vertical orientation
        "group-data-[orientation=vertical]/tabs:w-full group-data-[orientation=vertical]/tabs:justify-start",
        // focus + disabled
        "outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--hola-accent)",
        "disabled:pointer-events-none disabled:opacity-50",
        className
      )}
      {...props}
    />
  );
}

function TabsContent({ className, ...props }: TabsPrimitive.Panel.Props) {
  return (
    <TabsPrimitive.Panel
      data-slot="tabs-content"
      className={cn("flex-1 outline-none", className)}
      {...props}
    />
  );
}

export { Tabs, TabsContent, TabsList, TabsTrigger, tabsListVariants };
