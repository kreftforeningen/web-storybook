import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import {
  Button,
  ButtonGroup,
  ButtonGroupSeparator,
  ButtonGroupText,
} from "@kreftforeningen/web-react";
import { FaArrowLeft } from "react-icons/fa";

ButtonGroup.displayName = "ButtonGroup";

const meta = {
  title: "components/ButtonGroup",
  component: ButtonGroup,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `A container that groups related buttons together with consistent styling.`,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    orientation: {
      description: "ButtonGroup: Orientation, vertical or horizontal",
      control: "select",
      options: ["default", "vertical", "horizontal"],
    },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof ButtonGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    docs: {
      source: {
        code: `<ButtonGroup>
            <ButtonGroup className="hidden sm:flex">
              <Button variant="outline" aria-label="Go Back">
                <FaArrowLeft />
              </Button>
            </ButtonGroup>
            <ButtonGroup>
              <Button variant="outline">Archive</Button>
              <Button variant="outline">Report</Button>
            </ButtonGroup>
            <ButtonGroupSeparator />
            <ButtonGroup>
              <Button variant="outline">Archive</Button>
              <Button variant="outline">Report</Button>
            </ButtonGroup>
            <ButtonGroupText>Button Group Text</ButtonGroupText>
          </ButtonGroup>`,
      },
    },
  },
  render: () => (
    <ButtonGroup>
      <ButtonGroup className="hidden sm:flex">
        <Button variant="outline" aria-label="Go Back">
          <FaArrowLeft />
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button variant="outline">Archive</Button>
        <Button variant="outline">Report</Button>
      </ButtonGroup>
      <ButtonGroupSeparator />
      <ButtonGroup>
        <Button variant="outline">Archive</Button>
        <Button variant="outline">Report</Button>
      </ButtonGroup>
      <ButtonGroupText>Button Group Text</ButtonGroupText>
    </ButtonGroup>
  ),
};
