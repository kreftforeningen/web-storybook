import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  Button,
} from "@kreftforeningen/web-react";

const meta = {
  title: "components/DropdownMenu",
  component: DropdownMenu,
  parameters: {
    docs: {
      description: {
        component: `Displays a menu to the user — such as a set of actions or functions — triggered by a button. [Docs](https://www.radix-ui.com/docs/primitives/components/dropdown-menu). [API Reference](https://www.radix-ui.com/docs/primitives/components/dropdown-menu#api-reference).`,
      },
    },
  },
  tags: ["autodocs"],
  args: { onClick: fn() },
} satisfies Meta<typeof DropdownMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    docs: {
      source: {
        code: `<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="outline" shape="square">
      Open
    </Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>Actions</DropdownMenuLabel>
    <DropdownMenuItem variant="default">Default</DropdownMenuItem>
    <DropdownMenuItem variant="destructive">Destructive</DropdownMenuItem>
    <DropdownMenuSeparator />
    <DropdownMenuLabel>More</DropdownMenuLabel>
    <DropdownMenuItem>Archive</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>`,
      },
    },
  },
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" shape="square">
          Open
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Actions</DropdownMenuLabel>
        <DropdownMenuItem variant="default">Default</DropdownMenuItem>
        <DropdownMenuItem variant="destructive">Destructive</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuLabel>More</DropdownMenuLabel>
        <DropdownMenuItem>Archive</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
};
