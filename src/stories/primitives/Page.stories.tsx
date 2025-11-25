import type { Meta, StoryObj } from "@storybook/react-vite";
import { Box, Page } from "@kreftforeningen/web-react";

const contentBlocks = [
  {
    heading: "Hero",
    detail: "Intro copy, CTA and supporting context.",
  },
  {
    heading: "Highlights",
    detail: "Key stats and supporting bullet points.",
  },
  {
    heading: "Testimonials",
    detail: "Quotes that reinforce trust.",
  },
];

const meta = {
  title: "primitives/Page",
  component: Page,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: "Full-page layout primitive with responsive width blocks.",
      },
    },
  },
} satisfies Meta<typeof Page>;

export default meta;
type Story = StoryObj<typeof meta>;

const Footer = () => (
  <Page.Block
    as="footer"
    width="lg"
    gutters
    className="py-8 text-sm text-slate-500"
  >
    © {new Date().getFullYear()} Kreftforeningen · All rights reserved.
  </Page.Block>
);

export const DefaultLayout: Story = {
  render: () => (
    <Page
      className="bg-slate-50"
      footer={<Footer />}
      style={{
        "--kf-page-block-gap": "calc(var(--kf-spacing, 0.25rem) * 8)",
      }}
    >
      <Page.Block as="header" width="xl" gutters className="py-16 text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
          Campaign
        </p>
        <h1 className="mt-3 text-4xl font-semibold text-slate-900">
          Deliver clarity across every touchpoint
        </h1>
        <p className="mt-4 text-slate-600">
          Compose pages with `Page.Block` widths and gutters driven by our
          design tokens.
        </p>
      </Page.Block>

      {contentBlocks.map((block) => (
        <Page.Block key={block.heading} width="lg" gutters className="py-8">
          <h2 className="text-2xl font-semibold text-slate-900">
            {block.heading}
          </h2>
          <p className="mt-2 text-slate-600">{block.detail}</p>
        </Page.Block>
      ))}
    </Page>
  ),
};

export const MixedWidths: Story = {
  render: () => (
    <Page
      footer={<Footer />}
      style={{
        "--kf-page-background": "var(--kf-color-gray-50)",
      }}
    >
      <Page.Block width="3xl" gutters className="py-10">
        <div className="rounded border border-slate-200 bg-white px-6 py-8 shadow-sm">
          <p className="text-sm font-semibold text-slate-500">Overview</p>
          <h2 className="mt-2 text-3xl font-semibold text-slate-900">
            Adaptive layouts, token-aligned scaling.
          </h2>
        </div>
      </Page.Block>

      <Page.Block width="md" gutters className="py-8">
        <div className="rounded-lg border border-dashed border-slate-300 p-6 text-slate-600">
          Use narrower blocks for supporting content like onboarding checklists
          or contextual navigation.
        </div>
      </Page.Block>

      <Page.Block width="full" className="bg-slate-900 py-10 text-white">
        <div className="mx-auto w-full max-w-6xl px-6">
          <h3 className="text-lg font-semibold">Full-width callout</h3>
          <p className="mt-2 text-sm text-slate-200">
            Great for feature announcements or content strips.
          </p>
        </div>
      </Page.Block>
    </Page>
  ),
};

export const BlocksWithBox: Story = {
  render: () => (
    <Page footer={<Footer />}>
      <Page.Block width="lg" gutters className="space-y-4 py-10">
        <h2 className="text-xl font-semibold text-slate-900">
          Using Box within Page
        </h2>
        <p className="text-sm text-slate-600">
          Combine `Page`, `Page.Block`, and `Box` to rapidly compose marketing
          layouts.
        </p>
        <Box color="blue">
          <p className="text-sm font-semibold">Highlighted insight</p>
          <p className="text-xs opacity-80">
            Boxes automatically adjust colors for dark mode.
          </p>
        </Box>
      </Page.Block>
      <Page.Block width="xl" gutters className="py-8">
        <Box color="orange">
          <p className="text-sm font-semibold">Scheduling</p>
          <p className="text-xs opacity-80">
            Stick to token-driven spacing and radius across components.
          </p>
        </Box>
      </Page.Block>
    </Page>
  ),
};
