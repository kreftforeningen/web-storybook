import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  AspectRatio,
  Badge,
} from "@kreftforeningen/web-react";
import { LuArrowRight } from "react-icons/lu";

const meta = {
  title: "components/Card",
  component: Card,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `Displays a card with header, content, and footer.`,
      },
    },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    docs: {
      source: {
        code: `<Card>
  <CardContent>This is a simple card.</CardContent>
</Card>`,
      },
    },
  },
  render: () => (
    <Card>
      <CardContent>This is a simple card.</CardContent>
    </Card>
  ),
};

export const WithHeaderFooterAction: Story = {
  parameters: {
    docs: {
      source: {
        code: `<Card className="max-w-sm">
  <CardHeader>
    <CardDescription>Card Description</CardDescription>
    <CardTitle>Card Title</CardTitle>
    <CardAction>
      <Badge>Badge</Badge>
    </CardAction>
  </CardHeader>
  <CardContent>Here is some content inside the card.</CardContent>
  <CardFooter>
    <LuArrowRight />
  </CardFooter>
</Card>`,
      },
    },
  },
  render: () => (
    <Card className="max-w-sm">
      <CardHeader>
        <CardDescription>Card Description</CardDescription>
        <CardTitle>Card Title</CardTitle>
        <CardAction>
          <Badge>Badge</Badge>
        </CardAction>
      </CardHeader>
      <CardContent>Here is some content inside the card.</CardContent>
      <CardFooter>
        <LuArrowRight />
      </CardFooter>
    </Card>
  ),
};

export const WithImageGrid: Story = {
  parameters: {
    docs: {
      source: {
        code: `<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
  <Card className="pt-0">
    <AspectRatio ratio={16 / 9} className="rounded-t-md overflow-hidden">
      <img
        src="https://picsum.photos/1600/900"
        alt="Card Image"
        className="object-cover w-full h-full"
      />
    </AspectRatio>
    <CardHeader>
      <CardDescription>29.05.2020</CardDescription>
      <CardTitle>– In About Five Minutes I'll Be There</CardTitle>
      <CardAction>
        <Badge>Badge</Badge>
      </CardAction>
    </CardHeader>
    <CardContent>
      <p>
        During the first few minutes of the conversation, I'll be there. But
        where will you be?
      </p>
    </CardContent>
    <CardFooter>
      <LuArrowRight />
    </CardFooter>
  </Card>
  <Card>
    <CardHeader>
      <CardDescription>29.05.2020</CardDescription>
      <CardTitle>– In About Five Minutes I'll Be There</CardTitle>
      <CardAction>
        <Badge>Badge</Badge>
      </CardAction>
    </CardHeader>
    <CardContent>
      <p>
        During the first few minutes of the conversation, I'll be there. But
        where will you be?
      </p>
    </CardContent>
    <CardFooter>
      <p>Card Footer</p>
    </CardFooter>
  </Card>
</div>`,
      },
    },
  },
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Card className="pt-0">
        <AspectRatio ratio={16 / 9} className="rounded-t-md overflow-hidden">
          <img
            src="https://picsum.photos/1600/900"
            alt="Card Image"
            className="object-cover w-full h-full"
          />
        </AspectRatio>
        <CardHeader>
          <CardDescription>29.05.2020</CardDescription>
          <CardTitle>– In About Five Minutes I'll Be There</CardTitle>
          <CardAction>
            <Badge>Badge</Badge>
          </CardAction>
        </CardHeader>
        <CardContent>
          <p>
            During the first few minutes of the conversation, I'll be there. But
            where will you be?
          </p>
        </CardContent>
        <CardFooter>
          <LuArrowRight />
        </CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <CardDescription>29.05.2020</CardDescription>
          <CardTitle>– In About Five Minutes I'll Be There</CardTitle>
          <CardAction>
            <Badge>Badge</Badge>
          </CardAction>
        </CardHeader>
        <CardContent>
          <p>
            During the first few minutes of the conversation, I'll be there. But
            where will you be?
          </p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
    </div>
  ),
};
