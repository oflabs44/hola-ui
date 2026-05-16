"use client";

import { Slider as SliderPrimitive } from "@base-ui/react/slider";

import { cn } from "@/registry/hola/lib/utils";

function Slider({
  className,
  defaultValue,
  value,
  min = 0,
  max = 100,
  ...props
}: SliderPrimitive.Root.Props) {
  // Determine how many thumbs to render. Array values = range slider; scalar = single.
  const thumbValues = Array.isArray(value)
    ? value
    : Array.isArray(defaultValue)
      ? defaultValue
      : [min, max];

  return (
    <SliderPrimitive.Root
      data-slot="slider"
      defaultValue={defaultValue}
      value={value}
      min={min}
      max={max}
      thumbAlignment="edge"
      className={cn(
        "data-[orientation=horizontal]:w-full",
        "data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-40",
        className
      )}
      {...props}
    >
      <SliderPrimitive.Control
        className={cn(
          "relative flex w-full touch-none select-none items-center",
          "data-[orientation=vertical]:h-full data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col",
          "data-disabled:opacity-50 data-disabled:cursor-not-allowed"
        )}
      >
        <SliderPrimitive.Track
          data-slot="slider-track"
          className={cn(
            "relative grow select-none overflow-hidden rounded-full",
            "bg-(--hola-fg)/[0.08] dark:bg-(--hola-fg)/[0.1]",
            "data-[orientation=horizontal]:h-1.5 data-[orientation=horizontal]:w-full",
            "data-[orientation=vertical]:h-full data-[orientation=vertical]:w-1.5"
          )}
        >
          <SliderPrimitive.Indicator
            data-slot="slider-range"
            className={cn(
              "select-none bg-(--hola-accent)",
              "data-[orientation=horizontal]:h-full",
              "data-[orientation=vertical]:w-full"
            )}
          />
        </SliderPrimitive.Track>

        {thumbValues.map((_, index) => (
          <SliderPrimitive.Thumb
            key={index}
            data-slot="slider-thumb"
            className={cn(
              "block size-4 shrink-0 select-none rounded-full",
              "border-2 border-(--hola-accent) bg-bg shadow-sm",
              "transition-[box-shadow,transform] duration-100",
              "outline-none",
              "hover:ring-4 hover:ring-(--hola-accent)/20",
              "focus-visible:ring-4 focus-visible:ring-(--hola-accent)/30",
              "active:scale-95",
              "disabled:pointer-events-none disabled:opacity-50"
            )}
          />
        ))}
      </SliderPrimitive.Control>
    </SliderPrimitive.Root>
  );
}

export { Slider };
