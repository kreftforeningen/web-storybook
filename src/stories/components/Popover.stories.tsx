import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  Button,
} from "@kreftforeningen/web-react";

const meta = {
  title: "components/Popover",
  component: Popover,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `Displays rich content in a portal, triggered by a button. [Docs](https://www.radix-ui.com/docs/primitives/components/popover). [API Reference](https://www.radix-ui.com/docs/primitives/components/popover#api-reference).`,
      },
    },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Popover>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    docs: {
      source: {
        code: `<Popover>
  <PopoverTrigger asChild>
    <Button variant="outline">Open Popover</Button>
  </PopoverTrigger>
  <PopoverContent>Place content for the popover here.</PopoverContent>
</Popover>`,
      },
    },
  },
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Open Popover</Button>
      </PopoverTrigger>
      <PopoverContent>Place content for the popover here.</PopoverContent>
    </Popover>
  ),
};
