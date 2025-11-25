import type { Meta, StoryObj } from "@storybook/react-vite";
import { Show } from "@kreftforeningen/web-react";

const meta = {
  title: "primitives/Show",
  component: Show,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Utility to show content only inside specific breakpoint ranges.",
      },
    },
  },
} satisfies Meta<typeof Show>;

export default meta;
type Story = StoryObj<typeof meta>;

const DemoPanel = ({ label }: { label: string }) => (
  <div className="rounded border border-slate-200 bg-white p-4 text-sm shadow-sm">
    {label}
  </div>
);

export const ShowAbove: Story = {
  render: () => (
    <div className="space-y-3">
      <Show above="md">
        <DemoPanel label="Visible ≥ md" />
      </Show>
      <Show above="lg">
        <DemoPanel label="Visible ≥ lg" />
      </Show>
    </div>
  ),
};

export const ShowBelow: Story = {
  render: () => (
    <div className="space-y-3">
      <Show below="sm">
        <DemoPanel label="Visible ≤ sm" />
      </Show>
      <Show below="md">
        <DemoPanel label="Visible ≤ md" />
      </Show>
    </div>
  ),
};

export const ShowBetween: Story = {
  render: () => (
    <div className="space-y-3">
      <Show above="sm" below="lg">
        <DemoPanel label="Visible between sm and lg" />
      </Show>
      <Show above="lg" below="xl">
        <DemoPanel label="Visible between lg and xl" />
      </Show>
    </div>
  ),
};
