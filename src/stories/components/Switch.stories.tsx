import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";

import { Switch } from "@kreftforeningen/web-react";

const meta = {
  title: "components/Switch",
  component: Switch,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `A control that allows the user to toggle between checked and not checked. [Docs](https://www.radix-ui.com/docs/primitives/components/switch). [API Reference](https://www.radix-ui.com/docs/primitives/components/switch#api-reference).`,
      },
    },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    docs: {
      source: {
        code: `<Switch />`,
      },
    },
  },
  render: () => <Switch />,
};
