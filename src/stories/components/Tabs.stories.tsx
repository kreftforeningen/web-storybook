import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@kreftforeningen/web-react";

const meta = {
  title: "components/Tabs",
  component: Tabs,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `A set of layered sections of content—known as tab panels—that are displayed one at a time. [Docs](https://www.radix-ui.com/docs/primitives/components/tabs). [API Reference](https://www.radix-ui.com/docs/primitives/components/tabs#api-reference).`,
      },
    },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Tabs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    docs: {
      source: {
        code: `<Tabs defaultValue="account">
  <TabsList>
    <TabsTrigger value="account">Account</TabsTrigger>
    <TabsTrigger value="password">Password</TabsTrigger>
    <TabsTrigger value="delete">Delete</TabsTrigger>
  </TabsList>
  <TabsContent value="account">
    Make changes to your account here.
  </TabsContent>
  <TabsContent value="password">Change your password here.</TabsContent>
  <TabsContent value="delete">Delete your account here.</TabsContent>
</Tabs>`,
      },
    },
  },
  render: () => (
    <Tabs defaultValue="account">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
        <TabsTrigger value="delete">Delete</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        Make changes to your account here.
      </TabsContent>
      <TabsContent value="password">Change your password here.</TabsContent>
      <TabsContent value="delete">Delete your account here.</TabsContent>
    </Tabs>
  ),
};
