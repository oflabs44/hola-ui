import * as React from "react";

import { cn } from "@/registry/hola/lib/utils";

function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="skeleton"
      className={cn(
        "animate-pulse rounded-[6px]",
        "bg-(--hola-fg)/[0.08] dark:bg-(--hola-fg)/[0.1]",
        className
      )}
      {...props}
    />
  );
}

export { Skeleton };
