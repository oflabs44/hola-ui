"use client";

import { useState } from "react";
import { Checkbox } from "@/registry/hola/ui/checkbox";
import { Label } from "@/registry/hola/ui/label";
import { Field, FieldDescription, FieldLabel } from "@/registry/hola/ui/field";
import { ShowcasePage, Showcase } from "../showcase";

export default function CheckboxShowcase() {
  const [indChecked, setIndChecked] = useState(false);
  const [indeterminate, setIndeterminate] = useState(true);

  return (
    <ShowcasePage
      title="Checkbox"
      description="On @base-ui/react/checkbox. Border + accent fill on check. Supports indeterminate state for parent-of-children patterns."
    >
      <Showcase title="Default">
        <div className="flex items-center gap-2">
          <Checkbox id="default" />
          <Label htmlFor="default">Accept terms</Label>
        </div>
      </Showcase>

      <Showcase title="States">
        <div className="flex w-full flex-col gap-3">
          <div className="flex items-center gap-2">
            <Checkbox id="unchecked" />
            <Label htmlFor="unchecked">Unchecked</Label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="checked" defaultChecked />
            <Label htmlFor="checked">Checked</Label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox
              id="ind"
              checked={indChecked}
              indeterminate={indeterminate}
              onCheckedChange={(c) => {
                setIndeterminate(false);
                setIndChecked(c);
              }}
            />
            <Label htmlFor="ind">Indeterminate (click to resolve)</Label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="disabled" disabled />
            <Label htmlFor="disabled">Disabled</Label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="disabled-checked" disabled defaultChecked />
            <Label htmlFor="disabled-checked">Disabled + checked</Label>
          </div>
        </div>
      </Showcase>

      <Showcase
        title="In a Field (horizontal)"
        description="Classic 'checkbox + label + description' pattern."
      >
        <Field orientation="horizontal" className="max-w-md">
          <Checkbox id="marketing" defaultChecked />
          <div className="flex flex-col gap-1">
            <FieldLabel htmlFor="marketing">Marketing emails</FieldLabel>
            <FieldDescription>
              Receive occasional product updates and announcements.
            </FieldDescription>
          </div>
        </Field>
      </Showcase>

      <Showcase
        title="Checkbox group"
        description="Multiple checkboxes for multi-select. (No CheckboxGroup primitive yet — wrap in a fieldset.)"
      >
        <fieldset className="flex flex-col gap-3">
          <legend className="mb-2 text-sm font-medium">Notify me about</legend>
          {["Comments", "Mentions", "Updates", "Newsletter"].map((label) => (
            <div key={label} className="flex items-center gap-2">
              <Checkbox id={`notify-${label}`} defaultChecked={label === "Mentions"} />
              <Label htmlFor={`notify-${label}`}>{label}</Label>
            </div>
          ))}
        </fieldset>
      </Showcase>
    </ShowcasePage>
  );
}
