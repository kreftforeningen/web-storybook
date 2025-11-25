import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import {
  Timeline,
  TimelineItem,
  TimelineItemTitle,
  TimelineItemDescription,
} from "@kreftforeningen/web-react";

const timelineItems = [
  {
    id: 1,
    title: "Project Kickoff",
    content: "Initial meeting with the team and stakeholders.",
  },
  {
    id: 2,
    title: "Design Phase",
    content: "UI/UX design and prototyping.",
  },
  {
    id: 3,
    title: "Development Start",
    content: "Begin coding the main features.",
  },
  {
    id: 4,
    title: "Testing",
    content: "QA and bug fixing.",
  },
  {
    id: 5,
    title: "Launch",
    content: "Release the product to users.",
  },
];

const meta = {
  title: "components/Timeline",
  component: Timeline,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `A timeline component that displays a timeline.`,
      },
    },
  },
  tags: ["autodocs"],
  args: { onClick: fn() },
} satisfies Meta<typeof Timeline>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    docs: {
      source: {
        code: `<Timeline>
  {timelineItems.map((item, index) => (
    <TimelineItem key={item.id} isLast={index === timelineItems.length - 1}>
      <TimelineItemTitle>{item.title}</TimelineItemTitle>
      <TimelineItemDescription>{item.content}</TimelineItemDescription>
    </TimelineItem>
  ))}
</Timeline>`,
      },
    },
  },
  render: () => (
    <Timeline>
      {timelineItems.map((item, index) => (
        <TimelineItem key={item.id} isLast={index === timelineItems.length - 1}>
          <TimelineItemTitle>{item.title}</TimelineItemTitle>
          <TimelineItemDescription>{item.content}</TimelineItemDescription>
        </TimelineItem>
      ))}
    </Timeline>
  ),
};

export const WithDisabledState: Story = {
  parameters: {
    docs: {
      source: {
        code: `<Timeline className="opacity-50">
  {timelineItems.map((item, index) => (
    <TimelineItem
      key={item.id}
      isLast={index === timelineItems.length - 1}
      className="pointer-events-none"
    >
      <TimelineItemTitle>{item.title}</TimelineItemTitle>
      <TimelineItemDescription>{item.content}</TimelineItemDescription>
    </TimelineItem>
  ))}
</Timeline>`,
      },
    },
  },
  render: () => (
    <Timeline className="opacity-50">
      {timelineItems.map((item, index) => (
        <TimelineItem
          key={item.id}
          isLast={index === timelineItems.length - 1}
          className="pointer-events-none"
        >
          <TimelineItemTitle>{item.title}</TimelineItemTitle>
          <TimelineItemDescription>{item.content}</TimelineItemDescription>
        </TimelineItem>
      ))}
    </Timeline>
  ),
};
