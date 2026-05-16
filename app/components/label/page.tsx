import { Label } from "@/registry/hola/ui/label";
import { Input } from "@/registry/hola/ui/input";
import { ShowcasePage, Showcase } from "../showcase";

export default function LabelShowcase() {
  return (
    <ShowcasePage
      title="Label"
      description="Accessible <label> element. Propagates disabled state from associated peer/group elements via Tailwind's peer-disabled: and group-data-[disabled=true]: selectors."
    >
      <Showcase title="Default">
        <Label htmlFor="default-input">Email</Label>
      </Showcase>

      <Showcase
        title="With input"
        description="The most common pairing — htmlFor wires the click target."
      >
        <div className="flex w-full flex-col gap-1.5 sm:max-w-sm">
          <Label htmlFor="email">Email address</Label>
          <Input id="email" type="email" placeholder="hola@example.com" />
        </div>
      </Showcase>

      <Showcase
        title="Disabled propagation"
        description="When the peer input is disabled, the label fades automatically (peer-disabled:opacity-50)."
      >
        <div className="flex w-full flex-col gap-1.5 sm:max-w-sm">
          <Input id="disabled" disabled className="peer order-2" />
          <Label htmlFor="disabled" className="order-1">
            Locked field
          </Label>
        </div>
      </Showcase>

      <Showcase title="With icon">
        <Label htmlFor="lock">
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-3.5">
            <rect x="3.5" y="7" width="9" height="6" rx="1" />
            <path d="M5.5 7V5a2.5 2.5 0 0 1 5 0v2" />
          </svg>
          Password
        </Label>
      </Showcase>
    </ShowcasePage>
  );
}
