import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";

import { Separator } from "@kreftforeningen/web-react";

const meta = {
  title: "components/Separator",
  component: Separator,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `Visually or semantically separates content. [Docs](https://www.radix-ui.com/docs/primitives/components/separator). [API Reference](https://www.radix-ui.com/docs/primitives/components/separator#api-reference).`,
      },
    },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Separator>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    docs: {
      source: {
        code: `<Separator />`,
      },
    },
  },
  render: () => <Separator />,
};
