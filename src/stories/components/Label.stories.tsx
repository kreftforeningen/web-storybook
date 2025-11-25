import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";

import { Input, Label } from "@kreftforeningen/web-react";

const meta = {
  title: "components/Label",
  component: Label,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `Renders an accessible label associated with controls. [Docs](https://www.radix-ui.com/docs/primitives/components/label). [API Reference](https://www.radix-ui.com/docs/primitives/components/label#api-reference).`,
      },
    },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Label",
  },
};

export const WithInput: Story = {
  parameters: {
    docs: {
      source: {
        code: `<div>
  <h2 className="text-xl font-bold mb-4">Input + Label</h2>
  <div className="flex flex-row flex-wrap gap-2 items-center">
    <Label htmlFor="label-input-demo">Input</Label>
    <Input id="label-input-demo" />
  </div>
</div>`,
      },
    },
  },
  render: () => (
    <div>
      <h2 className="text-xl font-bold mb-4">Input + Label</h2>
      <div className="flex flex-row flex-wrap gap-2 items-center">
        <Label htmlFor="label-input-demo">Input</Label>
        <Input id="label-input-demo" />
      </div>
    </div>
  ),
};
