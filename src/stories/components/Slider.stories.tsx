import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";

import { Slider } from "@kreftforeningen/web-react";

const meta = {
  title: "components/Slider",
  component: Slider,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `An input where the user selects a value from within a given range. [Docs](https://www.radix-ui.com/docs/primitives/components/slider). [API Reference](https://www.radix-ui.com/docs/primitives/components/slider#api-reference).`,
      },
    },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    docs: {
      source: {
        code: `<Slider defaultValue={[33]} max={100} step={1} />`,
      },
    },
  },
  render: () => <Slider defaultValue={[33]} max={100} step={1} />,
};
