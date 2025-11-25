import type { Meta, StoryObj } from "@storybook/react-vite";
import { Bleed, Box } from "@kreftforeningen/web-react";

const meta = {
  title: "primitives/Bleed",
  component: Bleed,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Utility that lets content extend beyond its container while respecting tokens.",
      },
    },
  },
} satisfies Meta<typeof Bleed>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InlineFullBleed: Story = {
  render: () => (
    <div className="space-y-4 bg-slate-50 p-6 text-sm text-slate-700">
      <p>Regular content</p>
      <Bleed marginInline={{ base: "full" }} reflectivePadding>
        <div className="bg-slate-900 px-6 py-4 text-white">
          Bleeds to full viewport width with reflective padding.
        </div>
      </Bleed>
      <p>More content below</p>
    </div>
  ),
};

export const ResponsiveBleed: Story = {
  render: () => (
    <div className="space-y-4 bg-white p-4 text-sm text-slate-700">
      <Bleed
        marginInline={{ base: "space-12", lg: "space-16" }}
        marginBlock={{ base: "space-4", md: "space-8" }}
        reflectivePadding
      >
        <Box color="green">
          <p className="font-semibold">Adaptive margins</p>
          <p className="text-xs opacity-80">
            Spacing values map back to tokenized CSS variables.
          </p>
        </Box>
      </Bleed>
      <p>This paragraph sits back inside the normal container.</p>
    </div>
  ),
};

export const AsChildUsage: Story = {
  render: () => (
    <Bleed asChild marginInline="full">
      <figure className="bg-orange-50 py-8 text-center text-slate-900">
        <blockquote className="text-lg font-semibold">
          “Bleed gives you edge-to-edge visuals without hand-coded overrides.”
        </blockquote>
        <figcaption className="mt-2 text-sm text-slate-600">
          UX Guidelines
        </figcaption>
      </figure>
    </Bleed>
  ),
};
