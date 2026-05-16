import { Slider } from "@/registry/hola/ui/slider";
import { Field, FieldDescription, FieldLabel } from "@/registry/hola/ui/field";
import { ShowcasePage, Showcase } from "../showcase";

export default function SliderShowcase() {
  return (
    <ShowcasePage
      title="Slider"
      description="Range input on @base-ui/react/slider. Single thumb for one value, multiple thumbs for ranges (just pass an array defaultValue). Horizontal or vertical orientation."
    >
      <Showcase title="Single thumb">
        <Slider defaultValue={[50]} className="max-w-sm" />
      </Showcase>

      <Showcase
        title="Range (two thumbs)"
        description="Pass an array defaultValue with two values — the slider renders two thumbs and the Indicator becomes the filled middle range."
      >
        <Slider defaultValue={[20, 80]} className="max-w-sm" />
      </Showcase>

      <Showcase
        title="With step + custom range"
        description="step={5} snaps to multiples of 5; min/max define the bounds."
      >
        <Slider defaultValue={[40]} min={0} max={200} step={5} className="max-w-sm" />
      </Showcase>

      <Showcase title="Disabled">
        <Slider defaultValue={[60]} disabled className="max-w-sm" />
      </Showcase>

      <Showcase title="Vertical">
        <div className="h-48">
          <Slider defaultValue={[60]} orientation="vertical" />
        </div>
      </Showcase>

      <Showcase
        title="In a Field"
        description="Pair with Field for full label + description."
      >
        <Field className="max-w-sm">
          <FieldLabel htmlFor="vol">Volume</FieldLabel>
          <Slider id="vol" defaultValue={[75]} />
          <FieldDescription>Master volume across all outputs.</FieldDescription>
        </Field>
      </Showcase>

      <Showcase
        title="Price range filter"
        description="Real-world: two-thumb slider for filtering by min + max price."
      >
        <Field className="max-w-sm">
          <FieldLabel>Price range ($)</FieldLabel>
          <Slider defaultValue={[20, 180]} min={0} max={500} step={5} />
          <FieldDescription>Drag either end to refine.</FieldDescription>
        </Field>
      </Showcase>
    </ShowcasePage>
  );
}
