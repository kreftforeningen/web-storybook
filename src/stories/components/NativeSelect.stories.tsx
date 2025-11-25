import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { NativeSelect, NativeSelectOption } from "@kreftforeningen/web-react";

NativeSelect.displayName = "NativeSelect";

const meta = {
  title: "components/NativeSelect",
  component: NativeSelect,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: `A styled native HTML select element with consistent design system integration.`,
      },
    },
  },
  tags: ["autodocs"],

  args: { onClick: fn() },
} satisfies Meta<typeof NativeSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    docs: {
      source: {
        code: `<NativeSelect>
        <NativeSelectOption value="">Select status</NativeSelectOption>
        <NativeSelectOption value="todo">Todo</NativeSelectOption>
        <NativeSelectOption value="in-progress">In Progress</NativeSelectOption>
        <NativeSelectOption value="done">Done</NativeSelectOption>
        <NativeSelectOption value="cancelled">Cancelled</NativeSelectOption>
      </NativeSelect>`,
      },
    },
  },
  render: () => (
    <div className="flex flex-col items-center gap-4 p-8">
      <NativeSelect>
        <NativeSelectOption value="">Select status</NativeSelectOption>
        <NativeSelectOption value="todo">Todo</NativeSelectOption>
        <NativeSelectOption value="in-progress">In Progress</NativeSelectOption>
        <NativeSelectOption value="done">Done</NativeSelectOption>
        <NativeSelectOption value="cancelled">Cancelled</NativeSelectOption>
      </NativeSelect>
    </div>
  ),
};
