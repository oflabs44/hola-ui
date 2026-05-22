import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/hola/ui/tabs";
import { Input } from "@/registry/hola/ui/input";
import { Field, FieldLabel } from "@/registry/hola/ui/field";
import { Button } from "@/registry/hola/ui/button";
import { ShowcasePage, Showcase } from "../showcase";

export default function TabsShowcase() {
  return (
    <ShowcasePage
      title="Tabs"
      description="Switchable panels on @base-ui/react/tabs. Two list variants: pill-style (default) and underline (line). Horizontal (default) and vertical orientations. Active state via data-[active]; surface tokens swap automatically in dark mode."
    >
      <Showcase title="Default (pill list)">
        <Tabs defaultValue="account" className="w-full max-w-md">
          <TabsList>
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="password">Password</TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            <div className="rounded-[6px] border border-(--hola-fg)/10 dark:border-(--hola-fg)/15 p-4">
              <div className="space-y-3">
                <Field>
                  <FieldLabel htmlFor="tabs-name">Name</FieldLabel>
                  <Input id="tabs-name" defaultValue="Femi Dayo" />
                </Field>
                <Field>
                  <FieldLabel htmlFor="tabs-username">Username</FieldLabel>
                  <Input id="tabs-username" defaultValue="@oflabs44" />
                </Field>
                <Button size="sm">Save changes</Button>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="password">
            <div className="rounded-[6px] border border-(--hola-fg)/10 dark:border-(--hola-fg)/15 p-4">
              <div className="space-y-3">
                <Field>
                  <FieldLabel htmlFor="tabs-current">Current password</FieldLabel>
                  <Input id="tabs-current" type="password" />
                </Field>
                <Field>
                  <FieldLabel htmlFor="tabs-new">New password</FieldLabel>
                  <Input id="tabs-new" type="password" />
                </Field>
                <Button size="sm">Update password</Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </Showcase>

      <Showcase title="Line variant">
        <Tabs defaultValue="overview" className="w-full max-w-md">
          <TabsList variant="line">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="activity">Activity</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="text-sm text-muted">
            Summary of recent activity, key metrics, and pinned items.
          </TabsContent>
          <TabsContent value="activity" className="text-sm text-muted">
            Chronological feed of events and changes.
          </TabsContent>
          <TabsContent value="settings" className="text-sm text-muted">
            Preferences, integrations, and account controls.
          </TabsContent>
        </Tabs>
      </Showcase>

      <Showcase title="Vertical">
        <Tabs defaultValue="general" orientation="vertical" className="w-full max-w-md">
          <TabsList variant="line">
            <TabsTrigger value="general">General</TabsTrigger>
            <TabsTrigger value="billing">Billing</TabsTrigger>
            <TabsTrigger value="team">Team</TabsTrigger>
          </TabsList>
          <TabsContent value="general" className="px-4 text-sm text-muted">
            General workspace settings.
          </TabsContent>
          <TabsContent value="billing" className="px-4 text-sm text-muted">
            Plan, invoices, and payment method.
          </TabsContent>
          <TabsContent value="team" className="px-4 text-sm text-muted">
            Members, roles, and invitations.
          </TabsContent>
        </Tabs>
      </Showcase>

      <Showcase title="Disabled tab">
        <Tabs defaultValue="a" className="w-full max-w-sm">
          <TabsList>
            <TabsTrigger value="a">Available</TabsTrigger>
            <TabsTrigger value="b" disabled>
              Locked
            </TabsTrigger>
            <TabsTrigger value="c">Also available</TabsTrigger>
          </TabsList>
          <TabsContent value="a" className="text-sm text-muted">
            Active tab.
          </TabsContent>
          <TabsContent value="c" className="text-sm text-muted">
            Third tab.
          </TabsContent>
        </Tabs>
      </Showcase>
    </ShowcasePage>
  );
}
