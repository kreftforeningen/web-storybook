import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
  Button,
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "@kreftforeningen/web-react";

const meta = {
  title: "components/HoverCard",
  component: HoverCard,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `For sighted users to preview content available behind a link. [Docs](https://www.radix-ui.com/docs/primitives/components/hover-card). [API Reference](https://www.radix-ui.com/docs/primitives/components/hover-card#api-reference).`,
      },
    },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof HoverCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    docs: {
      source: {
        code: `<HoverCard>
  <HoverCardTrigger asChild>
    <Button variant="outline">Hover this button</Button>
  </HoverCardTrigger>
  <HoverCardContent className="w-80">
    <div className="flex justify-between gap-4">
      <Avatar>
        <AvatarImage src="https://github.com/vercel.png" />
        <AvatarFallback>VC</AvatarFallback>
      </Avatar>
      <div className="space-y-1">
        <h4 className="text-sm font-semibold">@nextjs</h4>
        <p className="text-sm">
          The React Framework – created and maintained by @vercel.
        </p>
        <div className="text-muted-foreground text-xs">
          Joined December 2021
        </div>
      </div>
    </div>
  </HoverCardContent>
</HoverCard>`,
      },
    },
  },
  render: () => (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="outline">Hover this button</Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex justify-between gap-4">
          <Avatar>
            <AvatarImage src="https://github.com/vercel.png" />
            <AvatarFallback>VC</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">@nextjs</h4>
            <p className="text-sm">
              The React Framework – created and maintained by @vercel.
            </p>
            <div className="text-muted-foreground text-xs">
              Joined December 2021
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
};
