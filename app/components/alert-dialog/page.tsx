import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/registry/hola/ui/alert-dialog";
import { Button } from "@/registry/hola/ui/button";
import { ShowcasePage, Showcase } from "../showcase";

const SIZES = ["sm", "default", "lg", "xl"] as const;

export default function AlertDialogShowcase() {
  return (
    <ShowcasePage
      title="Alert Dialog"
      description="Modal confirmation on @base-ui/react/alert-dialog. Same visuals as Dialog but role=alertdialog, no dismiss-on-backdrop or close-button — the user must choose Action or Cancel. Sizes: sm, default, lg, xl."
    >
      <Showcase title="Destructive">
        <AlertDialog>
          <AlertDialogTrigger
            render={<Button variant="outline">Delete account</Button>}
          />
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete your account and remove your data from our servers.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction variant="destructive">Yes, delete</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </Showcase>

      <Showcase title="Confirm">
        <AlertDialog>
          <AlertDialogTrigger render={<Button>Publish post</Button>} />
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Publish to all subscribers?</AlertDialogTitle>
              <AlertDialogDescription>
                Once published, the post will be sent to 12,481 subscribers. You won&apos;t be able to recall it.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction>Publish</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </Showcase>

      <Showcase title="Sizes">
        <div className="flex flex-wrap gap-2">
          {SIZES.map((size) => (
            <AlertDialog key={size}>
              <AlertDialogTrigger
                render={
                  <Button variant="outline" size="sm">
                    {size}
                  </Button>
                }
              />
              <AlertDialogContent size={size}>
                <AlertDialogHeader>
                  <AlertDialogTitle>Size: {size}</AlertDialogTitle>
                  <AlertDialogDescription>
                    Max width follows shadcn&apos;s scale: sm → max-w-sm, default → max-w-lg, lg → max-w-2xl, xl → max-w-4xl.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction>Continue</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          ))}
        </div>
      </Showcase>
    </ShowcasePage>
  );
}
