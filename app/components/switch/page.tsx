import { Switch } from "@/registry/hola/ui/switch";
import { Label } from "@/registry/hola/ui/label";
import { Field, FieldDescription, FieldLabel } from "@/registry/hola/ui/field";
import { ShowcasePage, Showcase } from "../showcase";

export default function SwitchShowcase() {
  return (
    <ShowcasePage
      title="Switch"
      description="Toggle on @base-ui/react/switch. Two sizes (sm, default). Animated thumb transition. Use Switch for binary preferences (notifications on/off); use Checkbox for opt-in confirmations."
    >
      <Showcase title="Default">
        <div className="flex items-center gap-2">
          <Switch id="default" />
          <Label htmlFor="default">Airplane mode</Label>
        </div>
      </Showcase>

      <Showcase title="Sizes">
        <div className="flex w-full flex-col gap-3">
          <div className="flex items-center gap-2">
            <Switch id="size-sm" size="sm" defaultChecked />
            <Label htmlFor="size-sm">Small</Label>
          </div>
          <div className="flex items-center gap-2">
            <Switch id="size-default" defaultChecked />
            <Label htmlFor="size-default">Default</Label>
          </div>
        </div>
      </Showcase>

      <Showcase title="States">
        <div className="flex w-full flex-col gap-3">
          <div className="flex items-center gap-2">
            <Switch id="off" />
            <Label htmlFor="off">Off</Label>
          </div>
          <div className="flex items-center gap-2">
            <Switch id="on" defaultChecked />
            <Label htmlFor="on">On</Label>
          </div>
          <div className="flex items-center gap-2">
            <Switch id="disabled-off" disabled />
            <Label htmlFor="disabled-off">Disabled off</Label>
          </div>
          <div className="flex items-center gap-2">
            <Switch id="disabled-on" disabled defaultChecked />
            <Label htmlFor="disabled-on">Disabled on</Label>
          </div>
        </div>
      </Showcase>

      <Showcase
        title="In a Field (horizontal)"
        description="The canonical preference-row pattern. Toggle sits flush-right; label + description stack on the left."
      >
        <div className="flex w-full flex-col gap-1 sm:max-w-md">
          <Field orientation="horizontal">
            <div className="flex flex-1 flex-col gap-1">
              <FieldLabel htmlFor="notif">Email notifications</FieldLabel>
              <FieldDescription>
                Daily digests at 8 AM your local time.
              </FieldDescription>
            </div>
            <Switch id="notif" defaultChecked />
          </Field>
          <Field orientation="horizontal">
            <div className="flex flex-1 flex-col gap-1">
              <FieldLabel htmlFor="2fa">Two-factor authentication</FieldLabel>
              <FieldDescription>
                Required to access billing settings.
              </FieldDescription>
            </div>
            <Switch id="2fa" />
          </Field>
        </div>
      </Showcase>
    </ShowcasePage>
  );
}
