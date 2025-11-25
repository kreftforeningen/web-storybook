import type { Meta, StoryObj } from "@storybook/react-vite";
import { Box } from "@kreftforeningen/web-react";

const meta = {
  title: "primitives/Box",
  component: Box,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Token-aware primitive for padding, radius and color shells.",
      },
    },
  },
} satisfies Meta<typeof Box>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ColorVariants: Story = {
  render: () => (
    <div className="grid gap-4 md:grid-cols-2">
      {(["gray", "blue", "green", "orange"] as const).map((color) => (
        <Box key={color} color={color} className="text-sm font-semibold">
          {color.charAt(0).toUpperCase() + color.slice(1)} box
        </Box>
      ))}
    </div>
  ),
};

export const ResponsiveMargins: Story = {
  render: () => (
    <Box
      color="purple"
      margin={{ base: "0 auto", md: "0 auto 2rem auto" }}
      width={{ base: "100%", md: "32rem" }}
    >
      <p className="text-xs font-semibold uppercase tracking-wide">
        Launch plan
      </p>
      <p className="text-sm opacity-80">
        Responsive width and margin tokens keep layouts predictable.
      </p>
    </Box>
  ),
};

export const AsChildUsage: Story = {
  render: () => (
    <Box asChild color="pink">
      <section className="space-y-2 text-sm">
        <p className="font-semibold">Custom element</p>
        <p className="opacity-80">
          Forward refs and props through the Slot pattern.
        </p>
      </section>
    </Box>
  ),
};
