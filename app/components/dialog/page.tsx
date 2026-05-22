import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/registry/hola/ui/dialog";
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

const SIZES = ["sm", "default", "lg", "xl"] as const;

export default function DialogShowcase() {
  return (
    <ShowcasePage
      title="Dialog"
      description="Modal dialog on @base-ui/react/dialog. Portal + backdrop + popup with translucent overlay border, soft shadow, and asymmetric light/dark surface. Sizes: sm, default, lg, xl."
    >
      <Showcase title="Default">
        <Dialog>
          <DialogTrigger render={<Button variant="outline">Open dialog</Button>} />
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Are you absolutely sure?</DialogTitle>
              <DialogDescription>
                This action cannot be undone. This will permanently delete your account and remove your data from our servers.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <DialogClose render={<Button variant="outline">Cancel</Button>} />
              <DialogClose render={<Button variant="destructive">Delete account</Button>} />
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </Showcase>

      <Showcase title="With form">
        <Dialog>
          <DialogTrigger render={<Button>Edit profile</Button>} />
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Edit profile</DialogTitle>
              <DialogDescription>
                Make changes to your profile here. Click save when you&apos;re done.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4">
              <Field>
                <FieldLabel htmlFor="dialog-name">Name</FieldLabel>
                <Input id="dialog-name" defaultValue="Femi Dayo" />
              </Field>
              <Field>
                <FieldLabel htmlFor="dialog-username">Username</FieldLabel>
                <Input id="dialog-username" defaultValue="@oflabs44" />
                <FieldDescription>This is how others will see you on the site.</FieldDescription>
              </Field>
            </div>
            <DialogFooter>
              <DialogClose render={<Button variant="outline">Cancel</Button>} />
              <DialogClose render={<Button>Save changes</Button>} />
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </Showcase>

      <Showcase title="Sizes">
        <div className="flex flex-wrap gap-2">
          {SIZES.map((size) => (
            <Dialog key={size}>
              <DialogTrigger render={<Button variant="outline" size="sm">{size}</Button>} />
              <DialogContent size={size}>
                <DialogHeader>
                  <DialogTitle>Size: {size}</DialogTitle>
                  <DialogDescription>
                    Max width follows shadcn&apos;s scale: sm → max-w-sm, default → max-w-lg, lg → max-w-2xl, xl → max-w-4xl.
                  </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                  <DialogClose render={<Button variant="outline">Close</Button>} />
                </DialogFooter>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </Showcase>

      <Showcase title="Without close button">
        <Dialog>
          <DialogTrigger render={<Button variant="outline">Open without X</Button>} />
          <DialogContent showCloseButton={false}>
            <DialogHeader>
              <DialogTitle>Acknowledge</DialogTitle>
              <DialogDescription>
                You must explicitly acknowledge before this dialog can be dismissed. The X button is hidden via <Code>showCloseButton=&#123;false&#125;</Code>.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <DialogClose render={<Button>I understand</Button>} />
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </Showcase>

      <Showcase title="Notes">
        <Dialog>
          <DialogTrigger render={<Button variant="secondary">Open notes</Button>} />
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Controlled mode</DialogTitle>
              <DialogDescription>
                Uncontrolled is the default. Wire <Code>open</Code> + <Code>onOpenChange</Code> on the root for controlled use.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <DialogClose render={<Button>Got it</Button>} />
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </Showcase>
    </ShowcasePage>
  );
}
