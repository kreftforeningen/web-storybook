import type { Meta, StoryObj } from "@storybook/react-vite";
import { HStack } from "@kreftforeningen/web-react";

const chipItems = [
  "Analytics",
  "Strategy",
  "Content",
  "Activation",
  "Insight",
  "Testing",
];

const meta = {
  title: "primitives/HStack",
  component: HStack,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Responsive horizontal stack from `@kreftforeningen/web-react/HStack`.",
      },
    },
  },
} satisfies Meta<typeof HStack>;

export default meta;
type Story = StoryObj<typeof meta>;
type StoryArgs = Story["args"];

export const ResponsiveGap: Story = {
  args: {
    gap: { base: 1, sm: 2, lg: 3 },
    wrap: { base: true },
    padding: { base: 2 },
  },
  render: (args: StoryArgs) => (
    <HStack {...args} className="rounded border border-slate-200 bg-white">
      {chipItems.map((item) => (
        <span
          key={item}
          className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold"
        >
          {item}
        </span>
      ))}
    </HStack>
  ),
};

export const Alignment: Story = {
  render: () => (
    <HStack
      gap={{ base: 1.5 }}
      justify={{ base: "space-between", md: "center" }}
      align="center"
      padding={{ base: 2 }}
      className="rounded border border-dashed border-slate-400"
    >
      <span className="text-sm font-medium text-slate-500">Status</span>
      <span className="text-sm text-slate-900">Ready for launch</span>
      <button className="rounded bg-slate-900 px-3 py-1 text-xs font-semibold text-white">
        Review
      </button>
    </HStack>
  ),
};

export const AsChildUsage: Story = {
  render: () => (
    <HStack asChild gap={{ base: 1 }} paddingInline={{ base: 2 }}>
      <nav className="rounded border border-slate-200 bg-slate-50 py-2 text-sm font-medium text-slate-600">
        <a className="px-3 text-slate-900" href="#">
          Overview
        </a>
        <a className="px-3" href="#">
          Timeline
        </a>
        <a className="px-3" href="#">
          Reports
        </a>
      </nav>
    </HStack>
  ),
};
