import type { Meta, StoryObj } from "@storybook/react-vite";
import { VStack } from "@kreftforeningen/web-react";

const timeline = [
  { title: "Brief", detail: "Collect requirements" },
  { title: "Concept", detail: "Align on creative direction" },
  { title: "Production", detail: "Deliver assets and QA" },
  { title: "Launch", detail: "Publish to all markets" },
];

const meta = {
  title: "primitives/VStack",
  component: VStack,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Responsive vertical stack from `@kreftforeningen/web-react/VStack`.",
      },
    },
  },
} satisfies Meta<typeof VStack>;

export default meta;
type Story = StoryObj<typeof meta>;
type StoryArgs = Story["args"];

export const BasicStack: Story = {
  args: {
    gap: { base: 2 },
    padding: { base: 2 },
  },
  render: (args: StoryArgs) => (
    <VStack {...args} className="rounded border border-slate-200 bg-white">
      {timeline.map((step) => (
        <div key={step.title}>
          <p className="text-sm font-semibold text-slate-900">{step.title}</p>
          <p className="text-xs text-slate-600">{step.detail}</p>
        </div>
      ))}
    </VStack>
  ),
};

export const StretchSections: Story = {
  render: () => (
    <VStack
      gap={{ base: 1.5 }}
      padding={{ base: 3 }}
      align="stretch"
      className="rounded border border-dashed border-slate-400 bg-slate-50"
    >
      <section className="rounded bg-white p-3 shadow-sm">
        <p className="text-sm font-semibold text-slate-900">Overview</p>
        <p className="text-xs text-slate-600">
          High-level snapshot of current KPIs.
        </p>
      </section>
      <section className="rounded bg-white p-3 shadow-sm">
        <p className="text-sm font-semibold text-slate-900">Insights</p>
        <p className="text-xs text-slate-600">
          Top learnings pulled from recent experiments.
        </p>
      </section>
    </VStack>
  ),
};

export const AsChildUsage: Story = {
  render: () => (
    <VStack asChild gap={1.5} padding={{ base: 2 }}>
      <form className="rounded border border-slate-200 bg-white">
        <label className="flex flex-col gap-1 text-xs font-semibold text-slate-600">
          Title
          <input
            className="rounded border border-slate-200 px-2 py-1 text-sm"
            defaultValue="Campaign rollout"
          />
        </label>
        <label className="flex flex-col gap-1 text-xs font-semibold text-slate-600">
          Owner
          <input
            className="rounded border border-slate-200 px-2 py-1 text-sm"
            defaultValue="Marketing Ops"
          />
        </label>
        <button
          className="mt-2 rounded bg-slate-900 px-3 py-1 text-xs font-semibold text-white"
          type="button"
        >
          Save
        </button>
      </form>
    </VStack>
  ),
};
