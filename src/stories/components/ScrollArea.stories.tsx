import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { ScrollArea, Separator } from "@kreftforeningen/web-react";

const meta = {
  title: "components/ScrollArea",
  component: ScrollArea,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `Augments native scroll functionality for custom, cross-browser styling. [Docs](https://www.radix-ui.com/docs/primitives/components/scroll-area). [API Reference](https://www.radix-ui.com/docs/primitives/components/scroll-area#api-reference).`,
      },
    },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof ScrollArea>;

export default meta;

type Story = StoryObj<typeof meta>;

const tags = [
  "nextjs",
  "react",
  "javascript",
  "typescript",
  "tailwind",
  "radix-ui",
  "storybook",
  "shadcn/ui",
  "design",
  "ui",
  "components",
  "open source",
];

export const Default: Story = {
  parameters: {
    docs: {
      source: {
        code: `<ScrollArea className="h-72 w-48 rounded-md border">
  <div className="p-4">
    <h4 className="mb-4 text-base leading-none m-0">Tags</h4>
    {tags.map((tag) => (
      <React.Fragment key={tag}>
        <div className="text-sm">{tag}</div>
        <Separator className="my-2" />
      </React.Fragment>
    ))}
  </div>
</ScrollArea>`,
      },
    },
  },
  render: () => (
    <ScrollArea className="h-72 w-48 rounded-md border">
      <div className="p-4">
        <h4 className="mb-4 text-base leading-none m-0">Tags</h4>
        {tags.map((tag) => (
          <React.Fragment key={tag}>
            <div className="text-sm">{tag}</div>
            <Separator className="my-2" />
          </React.Fragment>
        ))}
      </div>
    </ScrollArea>
  ),
};
