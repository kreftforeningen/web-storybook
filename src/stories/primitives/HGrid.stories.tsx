import type { Meta, StoryObj } from "@storybook/react-vite";
import { HGrid } from "@kreftforeningen/web-react";

type DemoCardProps = {
  title: string;
  body: string;
};

const DemoCard = ({ title, body }: DemoCardProps) => (
  <div className="rounded border border-slate-200 bg-white p-4 shadow-sm">
    <p className="text-sm font-semibold">{title}</p>
    <p className="text-xs text-slate-600">{body}</p>
  </div>
);

const demoContent = [
  "Analytics",
  "Research",
  "Strategy",
  "Activation",
  "Data",
  "Content",
];

const meta = {
  title: "primitives/HGrid",
  component: HGrid,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Responsive CSS Grid primitive powered by `@kreftforeningen/web-react/HGrid`.",
      },
    },
  },
} satisfies Meta<typeof HGrid>;

export default meta;
type Story = StoryObj<typeof meta>;
type StoryArgs = Story["args"];

export const ResponsiveColumns: Story = {
  args: {
    columns: { base: 1, sm: 2, md: 3 },
    gap: { base: 2, md: 3 },
    padding: { base: 2, md: 3 },
  },
  render: (args: StoryArgs) => (
    <HGrid {...args}>
      {demoContent.map((title) => (
        <DemoCard
          key={title}
          title={title}
          body="Automatically flows across breakpoints."
        />
      ))}
    </HGrid>
  ),
};

export const CustomSpacing: Story = {
  render: () => (
    <HGrid
      columns={{ base: "repeat(2, minmax(0, 1fr))", md: 4 }}
      gap={{ base: "1rem", lg: "2.5rem" }}
      paddingBlock={{ base: 3, md: 5 }}
      paddingInline={{ base: "1rem", lg: "4rem" }}
      align="stretch"
    >
      {demoContent.map((title, index) => (
        <DemoCard
          key={title}
          title={title}
          body={`Card ${index + 1} aligns to the custom spacing tokens.`}
        />
      ))}
    </HGrid>
  ),
};

export const AsChildUsage: Story = {
  render: () => (
    <HGrid
      asChild
      columns={{ base: 1, md: 2 }}
      gap={2}
      className="border border-dashed p-4"
    >
      <section>
        {demoContent.slice(0, 3).map((title) => (
          <DemoCard
            key={title}
            title={title}
            body="Rendered via the Slot API."
          />
        ))}
      </section>
    </HGrid>
  ),
};
