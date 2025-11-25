import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import {
  AccentuatedLink,
  AccentuatedLinkTitle,
  AccentuatedLinkSubtitle,
} from "@kreftforeningen/web-react";

const meta = {
  title: "components/AccentuatedLink",
  component: AccentuatedLink,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: `A styled link with a subtitle and title. To accentuate a link, use this component.`,
      },
    },
  },
  tags: ["autodocs"],
  args: { onClick: fn() },
  argTypes: {
    href: {
      description: "The URL that the link points to",
      control: "text",
      table: {
        category: "AccentuatedLink Props",
        type: { summary: "string" },
        defaultValue: { summary: "undefined" },
      },
    },
  },
} satisfies Meta<typeof AccentuatedLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    docs: {
      source: {
        code: `<AccentuatedLink href="https://www.example.com">
  <AccentuatedLinkSubtitle>Featured Article</AccentuatedLinkSubtitle>
  <AccentuatedLinkTitle>
    Understanding Modern Web Development Practices
  </AccentuatedLinkTitle>
</AccentuatedLink>`,
      },
    },
  },
  render: (args: typeof meta.args) => (
    <AccentuatedLink {...args}>
      <AccentuatedLinkSubtitle>Featured Article</AccentuatedLinkSubtitle>
      <AccentuatedLinkTitle>
        Understanding Modern Web Development Practices
      </AccentuatedLinkTitle>
    </AccentuatedLink>
  ),
  args: {
    href: "https://www.example.com",
  },
};
