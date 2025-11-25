import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import {
  Infographic,
  InfographicItem,
  InfographicItemIcon,
  InfographicItemTitle,
  InfographicItemTitleNumber,
  InfographicItemTitleText,
  InfographicItemDescription,
} from "@kreftforeningen/web-react";
import { HiOutlineCheckCircle } from "react-icons/hi";

const infographicItems = [
  {
    id: 1,
    titleNumber: "3 %",
    titleText: "Project Kickoff",
    description: "Initial meeting with the team and stakeholders.",
    url: "https://www.example.com",
  },
  {
    id: 2,
    titleNumber: "2",
    titleText: "Design Phase",
    description: "UI/UX design and prototyping.",
    url: "https://www.google.com",
  },
  {
    id: 3,
    titleNumber: "1000",
    titleText: "Development Start",
    description: "Begin coding the main features.",
    url: "https://www.altavista.com",
  },
];

const meta = {
  title: "components/Infographic",
  component: Infographic,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: `A infographic component that displays a list of items.`,
      },
    },
  },
  tags: ["autodocs"],
  args: { onClick: fn() },
} satisfies Meta<typeof Infographic>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    docs: {
      source: {
        code: `<Infographic>
  {infographicItems.map((item) => (
    <InfographicItem key={item.id} color="blue">
      <InfographicItemIcon>
        <HiOutlineCheckCircle className="w-20 h-20" />
      </InfographicItemIcon>
      <InfographicItemTitle>
        <InfographicItemTitleNumber>
          {item.titleNumber}
        </InfographicItemTitleNumber>
        <InfographicItemTitleText>
          {item.titleText}
        </InfographicItemTitleText>
      </InfographicItemTitle>
      <InfographicItemDescription>
        {item.description}
      </InfographicItemDescription>
    </InfographicItem>
  ))}
</Infographic>`,
      },
    },
  },
  render: () => (
    <Infographic>
      {infographicItems.map((item) => (
        <InfographicItem key={item.id} color="blue">
          <InfographicItemIcon>
            <HiOutlineCheckCircle className="w-20 h-20" />
          </InfographicItemIcon>
          <InfographicItemTitle>
            <InfographicItemTitleNumber>
              {item.titleNumber}
            </InfographicItemTitleNumber>
            <InfographicItemTitleText>
              {item.titleText}
            </InfographicItemTitleText>
          </InfographicItemTitle>
          <InfographicItemDescription>
            {item.description}
          </InfographicItemDescription>
        </InfographicItem>
      ))}
    </Infographic>
  ),
};
