import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";

import { ModeToggle } from "@kreftforeningen/web-react";

const meta = {
  title: "components/ModeToggle",
  component: ModeToggle,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `A mode toggle component that allows users to toggle between light and dark mode. For Vite apps.`,
      },
    },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof ModeToggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    docs: {
      source: {
        code: `<ModeToggle />`,
      },
    },
  },
  render: () => <ModeToggle />,
};

export const WithCustomProps: Story = {
  parameters: {
    docs: {
      source: {
        code: `<ModeToggle align="start" variant="outline" size="default" />`,
      },
    },
  },
  render: () => <ModeToggle align="start" variant="outline" size="default" />,
};

export const WithCustomText: Story = {
  parameters: {
    docs: {
      source: {
        code: `<ModeToggle align="start" variant="outline" size="default">
  Custom Toggle Text
</ModeToggle>`,
      },
    },
  },
  render: () => (
    <ModeToggle align="start" variant="outline" size="default">
      Custom Toggle Text
    </ModeToggle>
  ),
};
