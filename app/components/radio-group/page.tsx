import { RadioGroup, RadioGroupItem } from "@/registry/hola/ui/radio-group";
import { Label } from "@/registry/hola/ui/label";
import { Field, FieldDescription, FieldLabel, FieldLegend, FieldSet } from "@/registry/hola/ui/field";
import { ShowcasePage, Showcase } from "../showcase";

export default function RadioGroupShowcase() {
  return (
    <ShowcasePage
      title="Radio Group"
      description="Single-selection group on @base-ui/react/radio-group. Use when there are 2-7 mutually exclusive options. For >7 options, prefer Select."
    >
      <Showcase title="Default">
        <RadioGroup defaultValue="comfortable" className="max-w-xs">
          <div className="flex items-center gap-2">
            <RadioGroupItem value="default" id="r-default" />
            <Label htmlFor="r-default">Default</Label>
          </div>
          <div className="flex items-center gap-2">
            <RadioGroupItem value="comfortable" id="r-comfortable" />
            <Label htmlFor="r-comfortable">Comfortable</Label>
          </div>
          <div className="flex items-center gap-2">
            <RadioGroupItem value="compact" id="r-compact" />
            <Label htmlFor="r-compact">Compact</Label>
          </div>
        </RadioGroup>
      </Showcase>

      <Showcase title="Disabled items">
        <RadioGroup defaultValue="email" className="max-w-xs">
          <div className="flex items-center gap-2">
            <RadioGroupItem value="email" id="r-email" />
            <Label htmlFor="r-email">Email</Label>
          </div>
          <div className="flex items-center gap-2">
            <RadioGroupItem value="sms" id="r-sms" disabled />
            <Label htmlFor="r-sms">SMS (unavailable)</Label>
          </div>
          <div className="flex items-center gap-2">
            <RadioGroupItem value="push" id="r-push" />
            <Label htmlFor="r-push">Push notification</Label>
          </div>
        </RadioGroup>
      </Showcase>

      <Showcase
        title="In a FieldSet"
        description="Wrap in FieldSet + FieldLegend for accessibility-correct grouped controls."
      >
        <FieldSet className="max-w-sm">
          <FieldLegend>Subscription plan</FieldLegend>
          <RadioGroup defaultValue="pro">
            {[
              { value: "free", label: "Free", desc: "5 projects, basic features" },
              { value: "pro", label: "Pro", desc: "Unlimited projects, advanced analytics" },
              { value: "team", label: "Team", desc: "Everything in Pro + collaboration" },
            ].map((plan) => (
              <Field key={plan.value} orientation="horizontal">
                <RadioGroupItem value={plan.value} id={`plan-${plan.value}`} />
                <div className="flex flex-1 flex-col gap-1">
                  <FieldLabel htmlFor={`plan-${plan.value}`}>{plan.label}</FieldLabel>
                  <FieldDescription>{plan.desc}</FieldDescription>
                </div>
              </Field>
            ))}
          </RadioGroup>
        </FieldSet>
      </Showcase>
    </ShowcasePage>
  );
}
