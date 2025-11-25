import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { Button, Spinner } from "@kreftforeningen/web-react";

const meta = {
  title: "components/Spinner",
  component: Spinner,
  parameters: {
    layout: "largeDesktop",
    docs: {
      description: {
        component: `An indicator that can be used to show a loading state.`,
      },
    },
  },
  tags: ["autodocs"],
  args: { onClick: fn() },
  decorators: [
    (Story) => (
      <div className="p-4">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    viewport: {
      defaultViewport: "centered",
    },
    docs: {
      source: {
        code: `<Spinner />`,
      },
    },
  },
  render: () => <Spinner />,
};

export const Sizes: Story = {
  parameters: {
    viewport: {
      defaultViewport: "centered",
    },
    docs: {
      source: {
        code: `<Spinner className="size-3" />
      <Spinner className="size-4" />
      <Spinner className="size-6" />
      <Spinner className="size-8" />`,
      },
    },
  },
  render: () => (
    <div className="flex flex-col gap-6">
      <Spinner className="size-3" />
      <Spinner className="size-4" />
      <Spinner className="size-6" />
      <Spinner className="size-8" />
    </div>
  ),
};

export const InButton: Story = {
  parameters: {
    viewport: {
      defaultViewport: "fullscreen",
    },
    docs: {
      source: {
        code: `<Button disabled size="sm">
        <Spinner className="size-3" />
        Loading...
      </Button>`,
      },
    },
  },
  render: () => (
    <div className="flex flex-col items-start gap-6">
      <Button disabled>
        <Spinner className="size-3" />
        Loading...
      </Button>
    </div>
  ),
};
