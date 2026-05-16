import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
  FieldTitle,
} from "@/registry/hola/ui/field";
import { Input } from "@/registry/hola/ui/input";
import { Button } from "@/registry/hola/ui/button";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "@/registry/hola/ui/input-group";
import { ShowcasePage, Showcase } from "../showcase";

function MailIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3.5" width="12" height="9" rx="1.5" />
      <path d="m2.5 4.5 5.5 4 5.5-4" />
    </svg>
  );
}

export default function FieldShowcase() {
  return (
    <ShowcasePage
      title="Field"
      description="Composition wrapper for form fields. Compose Label + Input + Description + Error in a consistent shape. Three orientation modes; data-invalid propagates --hola-danger to all children."
    >
      <Showcase
        title="Single field — vertical (default)"
        description="The most common shape: label above, optional description, control below."
      >
        <Field className="max-w-sm">
          <FieldLabel htmlFor="email">Email address</FieldLabel>
          <Input id="email" type="email" placeholder="hola@example.com" />
          <FieldDescription>
            We&apos;ll send a verification link to this address.
          </FieldDescription>
        </Field>
      </Showcase>

      <Showcase
        title="Horizontal orientation"
        description="Label inline with control. FieldContent stacks label + description while keeping the control aligned."
      >
        <Field orientation="horizontal" className="max-w-md">
          <FieldContent>
            <FieldLabel htmlFor="notify">Email notifications</FieldLabel>
            <FieldDescription>Daily digests at 8 AM your local time.</FieldDescription>
          </FieldContent>
          <Input id="notify" type="email" placeholder="optional" className="w-44" />
        </Field>
      </Showcase>

      <Showcase
        title="With error state"
        description="Set data-invalid=true on the Field to cascade --hola-danger colour to the label and description. FieldError renders a role=alert region."
      >
        <Field className="max-w-sm" data-invalid="true">
          <FieldLabel htmlFor="email-bad">Email address</FieldLabel>
          <Input id="email-bad" defaultValue="not-an-email" aria-invalid />
          <FieldError>Please enter a valid email address.</FieldError>
        </Field>
      </Showcase>

      <Showcase
        title="With InputGroup"
        description="Field composes with anything — InputGroup slots in for icon/addon inputs."
      >
        <Field className="max-w-sm">
          <FieldLabel htmlFor="contact">Contact email</FieldLabel>
          <InputGroup>
            <InputGroupAddon>
              <MailIcon />
            </InputGroupAddon>
            <InputGroupInput id="contact" type="email" placeholder="hola@example.com" />
            <InputGroupAddon align="inline-end">
              <InputGroupText>@hola.dev</InputGroupText>
            </InputGroupAddon>
          </InputGroup>
          <FieldDescription>Use your work address.</FieldDescription>
        </Field>
      </Showcase>

      <Showcase
        title="FieldGroup + FieldSet"
        description="Real-world form. FieldSet for grouped controls (with semantic <legend>), FieldGroup for vertical stacks with consistent rhythm."
      >
        <form className="w-full max-w-md">
          <FieldSet>
            <FieldLegend>Account details</FieldLegend>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="form-name">Full name</FieldLabel>
                <Input id="form-name" placeholder="Ola Fagbemi" />
              </Field>
              <Field>
                <FieldLabel htmlFor="form-email">Work email</FieldLabel>
                <Input id="form-email" type="email" placeholder="ola@hola.dev" />
                <FieldDescription>
                  Used for sign-in and recovery — not visible to other users.
                </FieldDescription>
              </Field>
              <Field>
                <FieldLabel htmlFor="form-password">Password</FieldLabel>
                <Input id="form-password" type="password" />
                <FieldDescription>At least 12 characters.</FieldDescription>
              </Field>
            </FieldGroup>
          </FieldSet>
          <div className="mt-8 flex items-center gap-3">
            <Button type="submit">Create account</Button>
            <Button type="button" variant="ghost">
              Cancel
            </Button>
          </div>
        </form>
      </Showcase>

      <Showcase
        title="FieldError with multiple messages"
        description="Pass an errors[] array (react-hook-form-shaped) and it renders as a bulleted list."
      >
        <Field className="max-w-sm" data-invalid="true">
          <FieldLabel htmlFor="pw-bad">Password</FieldLabel>
          <Input id="pw-bad" type="password" defaultValue="abc" aria-invalid />
          <FieldError
            errors={[
              { message: "Must be at least 12 characters." },
              { message: "Must contain a number." },
              { message: "Must contain an uppercase letter." },
            ]}
          />
        </Field>
      </Showcase>

      <Showcase
        title="FieldTitle (non-label headings)"
        description="When you need a 'title' inside a field that isn't bound to a control (e.g. group of switches under one heading)."
      >
        <Field>
          <FieldTitle>Notification preferences</FieldTitle>
          <FieldDescription>Choose how you&apos;d like to hear from us.</FieldDescription>
        </Field>
      </Showcase>
    </ShowcasePage>
  );
}
