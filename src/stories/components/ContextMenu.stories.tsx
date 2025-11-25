import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  Button,
} from "@kreftforeningen/web-react";

const meta = {
  title: "components/ContextMenu",
  component: ContextMenu,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `Displays a menu to the user — such as a set of actions or functions — triggered by a button. [Docs](https://www.radix-ui.com/docs/primitives/components/context-menu). [API Reference](https://www.radix-ui.com/docs/primitives/components/context-menu#api-reference).`,
      },
    },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof ContextMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    docs: {
      source: {
        code: `<div>
  <ContextMenu>
    <ContextMenuTrigger asChild>
      <Button variant="outline">Right click to show menu</Button>
    </ContextMenuTrigger>
    <ContextMenuContent>
      <ContextMenuItem>Profile</ContextMenuItem>
      <ContextMenuItem>Billing</ContextMenuItem>
      <ContextMenuItem>Team</ContextMenuItem>
      <ContextMenuItem>Subscription</ContextMenuItem>
    </ContextMenuContent>
  </ContextMenu>
</div>`,
      },
    },
  },
  render: () => (
    <div>
      <ContextMenu>
        <ContextMenuTrigger asChild>
          <Button variant="outline">Right click to show menu</Button>
        </ContextMenuTrigger>
        <ContextMenuContent>
          <ContextMenuItem>Profile</ContextMenuItem>
          <ContextMenuItem>Billing</ContextMenuItem>
          <ContextMenuItem>Team</ContextMenuItem>
          <ContextMenuItem>Subscription</ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
    </div>
  ),
};
