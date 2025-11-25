import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import {
  Item,
  ItemMedia,
  ItemContent,
  ItemActions,
  ItemGroup,
  ItemTitle,
  ItemDescription,
  Button,
} from "@kreftforeningen/web-react";
import { LuBadgeCheck, LuChevronRight } from "react-icons/lu";

Item.displayName = "Item";

const meta = {
  title: "components/Item",
  component: Item,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: `A versatile component that you can use to display any content.`,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      description: "Item: Variant, default, outline or muted",
      control: "select",
      options: ["default", "outline", "muted"],
    },
    size: {
      description: "Item: Size, default or sm",
      control: "select",
      options: ["default", "sm"],
    },
    asChild: {
      description: "Item: AsChild, boolean",
      control: "boolean",
    },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Item>;

export default meta;
type Story = StoryObj<typeof meta>;

const music = [
  {
    title: "Midnight City Lights",
    artist: "Neon Dreams",
    album: "Electric Nights",
    duration: "3:45",
  },
  {
    title: "Coffee Shop Conversations",
    artist: "The Morning Brew",
    album: "Urban Stories",
    duration: "4:05",
  },
  {
    title: "Digital Rain",
    artist: "Cyber Symphony",
    album: "Binary Beats",
    duration: "3:30",
  },
];

export const Default: Story = {
  parameters: {
    docs: {
      source: {
        code: `<div className="flex w-full max-w-md flex-col gap-6 p-8">
        <Item variant="outline">
          <ItemContent>
            <ItemTitle>Basic Item</ItemTitle>
            <ItemDescription>
              A simple item with title and description.
            </ItemDescription>
          </ItemContent>
          <ItemActions>
            <Button variant="outline" size="sm">
              Action
            </Button>
          </ItemActions>
        </Item>
        <Item variant="outline" size="sm" asChild>
          <a href="#">
            <ItemMedia>
              <LuBadgeCheck className="size-5" />
            </ItemMedia>
            <ItemContent>
              <ItemTitle>Your profile has been verified.</ItemTitle>
            </ItemContent>
            <ItemActions>
              <LuChevronRight className="size-4" />
            </ItemActions>
          </a>
        </Item>

        <ItemGroup className="gap-4">
          {music.map((song) => (
            <Item key={song.title} variant="outline" asChild role="listitem">
              <a href="#">
                <ItemMedia variant="image">
                  <img
                    src={\`https://avatar.vercel.sh/\${song.title}\`}
                    alt={song.title}
                    width={32}
                    height={32}
                    className="object-cover grayscale"
                  />
                </ItemMedia>
                <ItemContent>
                  <ItemTitle className="line-clamp-1">
                    {song.title} -{" "}
                    <span className="text-muted-foreground">{song.album}</span>
                  </ItemTitle>
                  <ItemDescription>{song.artist}</ItemDescription>
                </ItemContent>
                <ItemContent className="flex-none text-center">
                  <ItemDescription>{song.duration}</ItemDescription>
                </ItemContent>
              </a>
            </Item>
          ))}
        </ItemGroup>
      </div>`,
      },
    },
  },
  render: () => (
    <>
      <div className="flex w-full max-w-md flex-col gap-6 p-8">
        <Item variant="outline">
          <ItemContent>
            <ItemTitle>Basic Item</ItemTitle>
            <ItemDescription>
              A simple item with title and description.
            </ItemDescription>
          </ItemContent>
          <ItemActions>
            <Button variant="outline" size="sm">
              Action
            </Button>
          </ItemActions>
        </Item>
        <Item variant="outline" size="sm" asChild>
          <a href="#">
            <ItemMedia>
              <LuBadgeCheck className="size-5" />
            </ItemMedia>
            <ItemContent>
              <ItemTitle>Your profile has been verified.</ItemTitle>
            </ItemContent>
            <ItemActions>
              <LuChevronRight className="size-4" />
            </ItemActions>
          </a>
        </Item>

        <ItemGroup className="gap-4">
          {music.map((song) => (
            <Item key={song.title} variant="outline" asChild role="listitem">
              <a href="#">
                <ItemMedia variant="image">
                  <img
                    src={`https://avatar.vercel.sh/${song.title}`}
                    alt={song.title}
                    width={32}
                    height={32}
                    className="object-cover grayscale"
                  />
                </ItemMedia>
                <ItemContent>
                  <ItemTitle className="line-clamp-1">
                    {song.title} -{" "}
                    <span className="text-muted-foreground">{song.album}</span>
                  </ItemTitle>
                  <ItemDescription>{song.artist}</ItemDescription>
                </ItemContent>
                <ItemContent className="flex-none text-center">
                  <ItemDescription>{song.duration}</ItemDescription>
                </ItemContent>
              </a>
            </Item>
          ))}
        </ItemGroup>
      </div>
    </>
  ),
};
