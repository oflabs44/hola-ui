import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/registry/hola/ui/select";
import { Field, FieldDescription, FieldLabel } from "@/registry/hola/ui/field";
import { ShowcasePage, Showcase } from "../showcase";

export default function SelectShowcase() {
  return (
    <ShowcasePage
      title="Select"
      description="Dropdown select on @base-ui/react/select. Trigger + portal-rendered content. Supports groups, separators, scroll buttons for long lists, and item alignment (matches Catalyst's Select aesthetic)."
    >
      <Showcase title="Default">
        <Select defaultValue="vega">
          <SelectTrigger className="w-44">
            <SelectValue placeholder="Pick a style" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="vega">Vega</SelectItem>
            <SelectItem value="nova">Nova</SelectItem>
            <SelectItem value="maia">Maia</SelectItem>
            <SelectItem value="lyra">Lyra</SelectItem>
            <SelectItem value="mira">Mira</SelectItem>
          </SelectContent>
        </Select>
      </Showcase>

      <Showcase title="With placeholder">
        <Select>
          <SelectTrigger className="w-56">
            <SelectValue placeholder="Choose a timezone…" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="utc">UTC</SelectItem>
            <SelectItem value="berlin">Europe / Berlin</SelectItem>
            <SelectItem value="lagos">Africa / Lagos</SelectItem>
            <SelectItem value="ny">America / New York</SelectItem>
            <SelectItem value="tokyo">Asia / Tokyo</SelectItem>
          </SelectContent>
        </Select>
      </Showcase>

      <Showcase title="Sizes">
        <div className="flex flex-wrap items-center gap-3">
          <Select defaultValue="default">
            <SelectTrigger size="sm" className="w-32">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="sm">Small</SelectItem>
              <SelectItem value="default">Default</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="default">
            <SelectTrigger className="w-32">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="sm">Small</SelectItem>
              <SelectItem value="default">Default</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </Showcase>

      <Showcase
        title="With groups + separator"
        description="SelectGroup + SelectLabel for sectioned dropdowns. SelectSeparator divides groups visually."
      >
        <Select>
          <SelectTrigger className="w-56">
            <SelectValue placeholder="Pick a fruit" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Citrus</SelectLabel>
              <SelectItem value="orange">Orange</SelectItem>
              <SelectItem value="lemon">Lemon</SelectItem>
              <SelectItem value="lime">Lime</SelectItem>
            </SelectGroup>
            <SelectSeparator />
            <SelectGroup>
              <SelectLabel>Berries</SelectLabel>
              <SelectItem value="strawberry">Strawberry</SelectItem>
              <SelectItem value="blueberry">Blueberry</SelectItem>
              <SelectItem value="raspberry">Raspberry</SelectItem>
            </SelectGroup>
            <SelectSeparator />
            <SelectGroup>
              <SelectLabel>Tropical</SelectLabel>
              <SelectItem value="mango">Mango</SelectItem>
              <SelectItem value="pineapple">Pineapple</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </Showcase>

      <Showcase title="Disabled item + disabled trigger">
        <div className="flex flex-wrap items-center gap-3">
          <Select defaultValue="visa">
            <SelectTrigger className="w-44">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="visa">Visa</SelectItem>
              <SelectItem value="mc">Mastercard</SelectItem>
              <SelectItem value="amex" disabled>Amex (unavailable)</SelectItem>
            </SelectContent>
          </Select>
          <Select disabled>
            <SelectTrigger className="w-44">
              <SelectValue placeholder="Disabled" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="x">x</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </Showcase>

      <Showcase
        title="In a Field"
        description="Compose with Field for full label/description/error treatment."
      >
        <Field className="max-w-sm">
          <FieldLabel htmlFor="country">Country</FieldLabel>
          <Select>
            <SelectTrigger id="country" className="w-full">
              <SelectValue placeholder="Select…" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ng">Nigeria</SelectItem>
              <SelectItem value="de">Germany</SelectItem>
              <SelectItem value="us">United States</SelectItem>
              <SelectItem value="uk">United Kingdom</SelectItem>
            </SelectContent>
          </Select>
          <FieldDescription>Used for billing and tax purposes.</FieldDescription>
        </Field>
      </Showcase>
    </ShowcasePage>
  );
}
