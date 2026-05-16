import * as React from "react";
import { Input as InputPrimitive } from "@base-ui/react/input";

import { cn } from "@/registry/hola/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <InputPrimitive
      type={type}
      data-slot="input"
      className={cn(
        // Layout
        "block w-full min-w-0",
        "h-9 rounded-[6px] border bg-clip-padding",
        "px-2.5 py-1",
        // Typography — Catalyst's responsive scale (mobile bigger than desktop)
        "text-base text-fg sm:text-sm/5",
        "placeholder:text-muted",
        // Border — translucent overlay
        "border-(--hola-fg)/10",
        "hover:border-(--hola-fg)/20",
        "dark:border-(--hola-fg)/15",
        "dark:hover:border-(--hola-fg)/25",
        // Background — Catalyst asymmetric: raised in light, etched in dark
        "bg-bg shadow-xs",
        "dark:bg-(--hola-fg)/[0.04] dark:shadow-none",
        // Focus — Catalyst-style: border stays subtle, the solid 2px ring
        // carries the weight. Border thickening on focus would read as 3px.
        "outline-none transition-[box-shadow] duration-100",
        "focus-visible:ring-2 focus-visible:ring-(--hola-accent)",
        // Invalid (form validation via aria-invalid)
        "aria-invalid:ring-2 aria-invalid:ring-(--hola-danger)",
        // File input — inline with the field
        "file:mr-2 file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-fg",
        // Selection
        "selection:bg-(--hola-accent)/20 selection:text-fg",
        // Disabled
        "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    />
  );
}

export { Input };
