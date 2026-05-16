import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/hola/ui/card";
import { Button } from "@/registry/hola/ui/button";
import { Badge } from "@/registry/hola/ui/badge";
import { Input } from "@/registry/hola/ui/input";
import { Label } from "@/registry/hola/ui/label";
import { Separator } from "@/registry/hola/ui/separator";
import { ShowcasePage, Showcase } from "../showcase";

export default function CardShowcase() {
  return (
    <ShowcasePage
      title="Card"
      description="Bordered surface container. Compose with CardHeader (Title + Description + optional Action), CardContent, and CardFooter. Two sizes (default, sm) for padding rhythm."
    >
      <Showcase title="Basic">
        <Card className="max-w-sm">
          <CardHeader>
            <CardTitle>Project name</CardTitle>
            <CardDescription>Used as the canonical identifier across the dashboard.</CardDescription>
          </CardHeader>
          <CardContent>
            <Input placeholder="hola-ui" />
          </CardContent>
        </Card>
      </Showcase>

      <Showcase
        title="With action"
        description="CardAction sits in the right column of the header grid."
      >
        <Card className="max-w-sm">
          <CardHeader>
            <CardTitle>Notifications</CardTitle>
            <CardDescription>You have 3 unread messages.</CardDescription>
            <CardAction>
              <Button variant="ghost" size="sm">View all</Button>
            </CardAction>
          </CardHeader>
        </Card>
      </Showcase>

      <Showcase
        title="With footer"
        description="CardFooter has a soft top border by default. Override with className='border-t-0 pt-0' to make it borderless."
      >
        <Card className="max-w-sm">
          <CardHeader>
            <CardTitle>Create account</CardTitle>
            <CardDescription>Sign up to get started with hola-ui.</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="card-email">Email</Label>
              <Input id="card-email" type="email" placeholder="hola@example.com" />
            </div>
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="card-pw">Password</Label>
              <Input id="card-pw" type="password" />
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Create account</Button>
          </CardFooter>
        </Card>
      </Showcase>

      <Showcase
        title="Stats card"
        description="A common dashboard pattern — title + big number + trend badge."
      >
        <Card className="max-w-xs">
          <CardHeader>
            <CardDescription>Monthly recurring revenue</CardDescription>
            <CardTitle className="text-3xl font-semibold tracking-tight">$24,830</CardTitle>
            <CardAction>
              <Badge variant="secondary" color="green">+12.4%</Badge>
            </CardAction>
          </CardHeader>
        </Card>
      </Showcase>

      <Showcase
        title="Small size"
        description="size='sm' tightens padding for dense layouts."
      >
        <Card size="sm" className="max-w-sm">
          <CardHeader>
            <CardTitle className="text-sm">Compact card</CardTitle>
            <CardDescription>Tighter padding rhythm for dense UI.</CardDescription>
          </CardHeader>
        </Card>
      </Showcase>

      <Showcase
        title="With internal Separator"
        description="Use Separator soft variant to subdivide content inside a card without harsh borders."
      >
        <Card className="max-w-md">
          <CardHeader>
            <CardTitle>Settings</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-3">
            <div className="flex items-center justify-between text-sm">
              <span>Email notifications</span>
              <Badge variant="secondary" color="green">On</Badge>
            </div>
            <Separator soft />
            <div className="flex items-center justify-between text-sm">
              <span>Two-factor auth</span>
              <Badge variant="secondary">Off</Badge>
            </div>
            <Separator soft />
            <div className="flex items-center justify-between text-sm">
              <span>Marketing emails</span>
              <Badge variant="secondary">Off</Badge>
            </div>
          </CardContent>
        </Card>
      </Showcase>
    </ShowcasePage>
  );
}
