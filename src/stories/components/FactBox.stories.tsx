import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import {
  FactBox,
  FactBoxContent,
  FactBoxTitle,
  FactBoxDescription,
  FactBoxAction,
} from "kf-component-library";

const meta = {
  title: "components/FactBox",
  component: FactBox,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: `A fact box component that displays a fact. Expand and contract the content.`,
      },
    },
  },
  tags: ["autodocs"],
  args: { onClick: fn() },
  argTypes: {
    expandText: {
      description:
        "Text displayed when content is collapsed and can be expanded",
      control: "text",
      table: {
        category: "FactBoxAction Props",
        type: { summary: "string" },
        defaultValue: { summary: "Expand" },
      },
    },
    contractText: {
      description:
        "Text displayed when content is expanded and can be collapsed",
      control: "text",
      table: {
        category: "FactBoxAction Props",
        type: { summary: "string" },
        defaultValue: { summary: "Contract" },
      },
    },
  },
} satisfies Meta<typeof FactBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    docs: {
      source: {
        code: `<FactBox>
  <FactBoxContent>
    <FactBoxTitle>Fact About Cancer</FactBoxTitle>
    <FactBoxDescription>
      <p className="mb-4">
        Something you should know about cancer. Is that it is a disease that
        affects many people. It can be treated and cured in many cases. But
        it can also be fatal.
      </p>
      <p className="mb-4">
        Do you think you have cancer? You probably don't. But you should
        still get checked out.
      </p>
      <p>
        If you do not have cancer, you are lucky. But you should still get
        checked out.
      </p>
    </FactBoxDescription>
  </FactBoxContent>
  <FactBoxAction expandText="Expand" contractText="Contract" />
</FactBox>`,
      },
    },
  },
  render: () => (
    <FactBox>
      <FactBoxContent>
        <FactBoxTitle>Fact About Cancer</FactBoxTitle>
        <FactBoxDescription>
          <p className="mb-4">
            Something you should know about cancer. Is that it is a disease that
            affects many people. It can be treated and cured in many cases. But
            it can also be fatal.
          </p>
          <p className="mb-4">
            Do you think you have cancer? You probably don't. But you should
            still get checked out.
          </p>
          <p>
            If you do not have cancer, you are lucky. But you should still get
            checked out.
          </p>
        </FactBoxDescription>
      </FactBoxContent>
      <FactBoxAction expandText="Expand" contractText="Contract" />
    </FactBox>
  ),
};
