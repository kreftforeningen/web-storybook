import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { Kbd, KbdGroup } from "@kreftforeningen/web-react";

Kbd.displayName = "Kbd";

const meta = {
  title: "components/Kbd",
  component: Kbd,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: `
Use Kbd to display keyboard shortcuts.
        `,
      },
    },
  },
  tags: ["autodocs"],

  args: { onClick: fn() },
} satisfies Meta<typeof Kbd>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    docs: {
      source: {
        code: `<div className="flex flex-col items-center gap-4 p-8">
      <KbdGroup>
        <Kbd>⌘</Kbd>
        <Kbd>⇧</Kbd>
        <Kbd>⌥</Kbd>
        <Kbd>⌃</Kbd>
      </KbdGroup>
      <KbdGroup>
        <Kbd>Ctrl</Kbd>
        <span>+</span>
        <Kbd>B</Kbd>
      </KbdGroup>
    </div>`,
      },
    },
  },
  render: () => (
    <div className="flex flex-col items-center gap-4 p-8">
      <KbdGroup>
        <Kbd>⌘</Kbd>
        <Kbd>⇧</Kbd>
        <Kbd>⌥</Kbd>
        <Kbd>⌃</Kbd>
      </KbdGroup>
      <KbdGroup>
        <Kbd>Ctrl</Kbd>
        <span>+</span>
        <Kbd>B</Kbd>
      </KbdGroup>
    </div>
  ),
};
