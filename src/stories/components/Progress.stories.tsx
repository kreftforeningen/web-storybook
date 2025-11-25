import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";

import { Progress } from "@kreftforeningen/web-react";

const meta = {
  title: "components/Progress",
  component: Progress,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `Displays an indicator showing the completion progress of a task, typically displayed as a progress bar. [Docs](https://www.radix-ui.com/docs/primitives/components/progress). [API Reference](https://www.radix-ui.com/docs/primitives/components/progress#api-reference).`,
      },
    },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Progress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    docs: {
      source: {
        code: `<Progress value={50} />`,
      },
    },
  },
  render: () => <Progress value={50} />,
};
