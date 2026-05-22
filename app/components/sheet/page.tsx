import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/registry/hola/ui/sheet";
import { Button } from "@/registry/hola/ui/button";
import { Input } from "@/registry/hola/ui/input";
import { Field, FieldDescription, FieldLabel } from "@/registry/hola/ui/field";
import { ShowcasePage, Showcase } from "../showcase";

function Code({ children }: { children: React.ReactNode }) {
  return (
    <code className="rounded bg-(--hola-fg)/[0.06] px-1 py-0.5 font-mono text-xs">
      {children}
    </code>
  );
}

const SIDES = ["top", "right", "bottom", "left"] as const;

export default function SheetShowcase() {
  return (
    <ShowcasePage
      title="Sheet"
      description="Edge-anchored panel on @base-ui/react/dialog. Same primitive as Dialog but slides in from an edge: top, right (default), bottom, or left. Backdrop dismiss + Escape still work — for blocking decisions use Alert Dialog instead."
    >
      <Showcase title="Default (right)">
        <Sheet>
          <SheetTrigger render={<Button variant="outline">Open sheet</Button>} />
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Edit profile</SheetTitle>
              <SheetDescription>
                Make changes to your profile here. Click save when you&apos;re done.
              </SheetDescription>
            </SheetHeader>
            <div className="grid gap-4">
              <Field>
                <FieldLabel htmlFor="sheet-name">Name</FieldLabel>
                <Input id="sheet-name" defaultValue="Femi Dayo" />
              </Field>
              <Field>
                <FieldLabel htmlFor="sheet-username">Username</FieldLabel>
                <Input id="sheet-username" defaultValue="@oflabs44" />
                <FieldDescription>This is how others will see you on the site.</FieldDescription>
              </Field>
            </div>
            <SheetFooter>
              <SheetClose render={<Button variant="outline">Cancel</Button>} />
              <SheetClose render={<Button>Save changes</Button>} />
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </Showcase>

      <Showcase title="Sides">
        <div className="flex flex-wrap gap-2">
          {SIDES.map((side) => (
            <Sheet key={side}>
              <SheetTrigger
                render={
                  <Button variant="outline" size="sm">
                    {side}
                  </Button>
                }
              />
              <SheetContent side={side}>
                <SheetHeader>
                  <SheetTitle>From the {side}</SheetTitle>
                  <SheetDescription>
                    Anchor edge is set via <Code>side=&quot;{side}&quot;</Code>. The translucent border faces inward.
                  </SheetDescription>
                </SheetHeader>
                <SheetFooter>
                  <SheetClose render={<Button variant="outline">Close</Button>} />
                </SheetFooter>
              </SheetContent>
            </Sheet>
          ))}
        </div>
      </Showcase>

      <Showcase title="Without close button">
        <Sheet>
          <SheetTrigger render={<Button variant="outline">Open without X</Button>} />
          <SheetContent showCloseButton={false}>
            <SheetHeader>
              <SheetTitle>Manual dismiss only</SheetTitle>
              <SheetDescription>
                X button hidden via <Code>showCloseButton=&#123;false&#125;</Code>. The backdrop and Escape still close.
              </SheetDescription>
            </SheetHeader>
            <SheetFooter>
              <SheetClose render={<Button>Done</Button>} />
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </Showcase>
    </ShowcasePage>
  );
}
