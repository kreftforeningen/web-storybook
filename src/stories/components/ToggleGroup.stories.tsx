import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { ToggleGroup, ToggleGroupItem } from "@kreftforeningen/web-react";
import { LuBold, LuItalic, LuUnderline } from "react-icons/lu";

const meta = {
  title: "components/ToggleGroup",
  component: ToggleGroup,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `A set of two-state buttons that can be toggled on or off. [Docs](https://www.radix-ui.com/docs/primitives/components/toggle-group). [API Reference](https://www.radix-ui.com/docs/primitives/components/toggle-group#api-reference).`,
      },
    },
  },
  tags: ["autodocs"],
  args: { onClick: fn() },
} satisfies Meta<typeof ToggleGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Single: Story = {
  parameters: {
    docs: {
      source: {
        code: `<ToggleGroup type="single" variant="outline">
  <ToggleGroupItem value="a">A</ToggleGroupItem>
  <ToggleGroupItem value="b">B</ToggleGroupItem>
  <ToggleGroupItem value="c">C</ToggleGroupItem>
</ToggleGroup>`,
      },
    },
  },
  render: () => (
    <ToggleGroup type="single" variant="outline">
      <ToggleGroupItem value="a">A</ToggleGroupItem>
      <ToggleGroupItem value="b">B</ToggleGroupItem>
      <ToggleGroupItem value="c">C</ToggleGroupItem>
    </ToggleGroup>
  ),
};

export const Multiple: Story = {
  parameters: {
    docs: {
      source: {
        code: `<ToggleGroup type="multiple" variant="outline">
  <ToggleGroupItem value="bold" aria-label="Toggle bold">
    <LuBold className="h-4 w-4" />
  </ToggleGroupItem>
  <ToggleGroupItem value="italic" aria-label="Toggle italic">
    <LuItalic className="h-4 w-4" />
  </ToggleGroupItem>
  <ToggleGroupItem value="underline" aria-label="Toggle underline">
    <LuUnderline className="h-4 w-4" />
  </ToggleGroupItem>
</ToggleGroup>`,
      },
    },
  },
  render: () => (
    <ToggleGroup type="multiple" variant="outline">
      <ToggleGroupItem value="bold" aria-label="Toggle bold">
        <LuBold className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Toggle italic">
        <LuItalic className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="underline" aria-label="Toggle underline">
        <LuUnderline className="h-4 w-4" />
      </ToggleGroupItem>
    </ToggleGroup>
  ),
};
