import { Textarea } from "@/registry/hola/ui/textarea";
import { Field, FieldDescription, FieldError, FieldLabel } from "@/registry/hola/ui/field";
import { ShowcasePage, Showcase } from "../showcase";

export default function TextareaShowcase() {
  return (
    <ShowcasePage
      title="Textarea"
      description="Multi-line text input. Uses field-sizing-content to grow with content (no JS), resize-y for user-controlled resize. Same surface + focus treatment as Input."
    >
      <Showcase title="Default">
        <Textarea placeholder="Tell us about yourself…" className="max-w-md" />
      </Showcase>

      <Showcase
        title="With value"
        description="Auto-grows as you type — try editing and adding lines."
      >
        <Textarea
          defaultValue="hola-ui is a personal design system layering on shadcn (Base UI). Built on Geist, with Catalyst-flavoured visuals."
          className="max-w-md"
        />
      </Showcase>

      <Showcase title="States">
        <div className="flex w-full flex-col gap-3 sm:max-w-md">
          <Textarea placeholder="normal" />
          <Textarea disabled defaultValue="cannot edit — disabled" />
          <Textarea aria-invalid defaultValue="invalid state" />
        </div>
      </Showcase>

      <Showcase
        title="In a Field"
        description="The canonical pattern — Label + Textarea + Description."
      >
        <Field className="max-w-md">
          <FieldLabel htmlFor="bio">Bio</FieldLabel>
          <Textarea id="bio" placeholder="A few sentences about yourself…" />
          <FieldDescription>Markdown is supported. 500 character limit.</FieldDescription>
        </Field>
      </Showcase>

      <Showcase
        title="In a Field with required + error"
        description="data-invalid on the Field cascades danger colour; required indicator auto-appears."
      >
        <Field className="max-w-md" data-invalid="true">
          <FieldLabel htmlFor="feedback">Feedback</FieldLabel>
          <Textarea id="feedback" required aria-invalid placeholder="Share your thoughts…" />
          <FieldError>This field is required.</FieldError>
        </Field>
      </Showcase>
    </ShowcasePage>
  );
}
