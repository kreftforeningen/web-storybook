import type { Meta, StoryObj } from "@storybook/react-vite";
import { Hide } from "@kreftforeningen/web-react";

const meta = {
  title: "primitives/Hide",
  component: Hide,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Utility to hide content at specific breakpoint ranges.",
      },
    },
  },
} satisfies Meta<typeof Hide>;

export default meta;
type Story = StoryObj<typeof meta>;

const DemoPanel = ({ label }: { label: string }) => (
  <div className="rounded border border-dashed border-slate-400 bg-slate-50 p-4 text-sm text-slate-600">
    {label}
  </div>
);

export const HideAbove: Story = {
  render: () => (
    <div className="space-y-3">
      <Hide above="md">
        <DemoPanel label="Hidden at ≥ md" />
      </Hide>
      <Hide above="lg">
        <DemoPanel label="Hidden at ≥ lg" />
      </Hide>
    </div>
  ),
};

export const HideBelow: Story = {
  render: () => (
    <div className="space-y-3">
      <Hide below="sm">
        <DemoPanel label="Hidden at ≤ sm" />
      </Hide>
      <Hide below="md">
        <DemoPanel label="Hidden at ≤ md" />
      </Hide>
    </div>
  ),
};

export const HideBetween: Story = {
  render: () => (
    <div className="space-y-3">
      <Hide above="sm" below="lg">
        <DemoPanel label="Hidden between sm and lg" />
      </Hide>
      <Hide above="lg" below="xl">
        <DemoPanel label="Hidden between lg and xl" />
      </Hide>
    </div>
  ),
};
