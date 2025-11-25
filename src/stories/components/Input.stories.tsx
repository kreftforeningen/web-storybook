import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { Input } from "@kreftforeningen/web-react";

const meta = {
  title: "components/Input",
  component: Input,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `Displays a form input field or a component that looks like an input field.`,
      },
    },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    docs: {
      source: {
        code: `<Input id="input-demo" placeholder="Placeholder Text" />`,
      },
    },
  },
  render: () => <Input id="input-demo" placeholder="Placeholder Text" />,
};
