import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { Toggle } from "@kreftforeningen/web-react";
import { LuBold, LuItalic, LuUnderline } from "react-icons/lu";

Toggle.displayName = "Toggle";

const meta = {
  title: "components/Toggle",
  component: Toggle,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `A two-state button that can be either on or off. [Docs](https://www.radix-ui.com/docs/primitives/components/toggle). [API Reference](https://www.radix-ui.com/docs/primitives/components/toggle#api-reference).`,
      },
    },
  },
  tags: ["autodocs"],
  args: { onClick: fn() },
} satisfies Meta<typeof Toggle>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Toggle",
  },
};

export const WithIcon: Story = {
  render: () => (
    <div className="flex gap-2">
      <Toggle size="sm" aria-label="Toggle bold">
        <LuBold className="h-4 w-4" />
      </Toggle>
      <Toggle size="sm" aria-label="Toggle italic">
        <LuItalic className="h-4 w-4" />
      </Toggle>
      <Toggle size="sm" aria-label="Toggle underline">
        <LuUnderline className="h-4 w-4" />
      </Toggle>
    </div>
  ),
};
