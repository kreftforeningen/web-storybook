import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselDots,
  CarouselContentWrapper,
  AspectRatio,
  CarouselItemDescription,
} from "@kreftforeningen/web-react";

const meta = {
  title: "components/Carousel",
  component: Carousel,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `A carousel with motion and swipe built using Embla. [Docs](https://www.embla-carousel.com/get-started/react). [API Reference](https://www.embla-carousel.com/api).`,
      },
    },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Carousel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    docs: {
      source: {
        code: `<div className="max-w-xl mx-auto">
  <Carousel>
    <CarouselContentWrapper>
      <CarouselContent>
        <CarouselItem>
          <AspectRatio ratio={16 / 9}>
            <img
              src="https://picsum.photos/1600/900"
              alt="Card Image"
              className="object-cover w-full h-full rounded-xl"
            />
            <CarouselItemDescription>
              Something about the image.
            </CarouselItemDescription>
          </AspectRatio>
        </CarouselItem>
        <CarouselItem>
          <AspectRatio ratio={16 / 9}>
            <img
              src="https://picsum.photos/1600/900"
              alt="Card Image"
              className="object-cover w-full h-full rounded-xl"
            />
          </AspectRatio>
        </CarouselItem>
        <CarouselItem>
          <AspectRatio ratio={16 / 9}>
            <img
              src="https://picsum.photos/1600/900"
              alt="Card Image"
              className="object-cover w-full h-full rounded-xl"
            />
            <CarouselItemDescription>
              Say something about the image. It should be a long text. It
              should be a long text. It should be a long text. It should be
              a long text. It should be a long text. It should be a long
              text. It should be a long text. It should be a long text. It
              should be a long text. It should be a long text. It should be
              a long text. It should be a long text. It should be a long
              text. It should be a long text. It should be a long text. It
              should be a long text. It should be a long text. It should be
              a long text. It should be a long text. It should be a long
              text. It should be a long text. It should be a long text. It
              should be a long text. It should be a long text. It should be
              a long text. It should be a long text.
            </CarouselItemDescription>
          </AspectRatio>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </CarouselContentWrapper>
    <CarouselDots />
  </Carousel>
</div>`,
      },
    },
  },
  render: () => (
    <div className="max-w-xl mx-auto">
      <Carousel>
        <CarouselContentWrapper>
          <CarouselContent>
            <CarouselItem>
              <AspectRatio ratio={16 / 9}>
                <img
                  src="https://picsum.photos/1600/900"
                  alt="Card Image"
                  className="object-cover w-full h-full rounded-xl"
                />
                <CarouselItemDescription>
                  Something about the image.
                </CarouselItemDescription>
              </AspectRatio>
            </CarouselItem>
            <CarouselItem>
              <AspectRatio ratio={16 / 9}>
                <img
                  src="https://picsum.photos/1600/900"
                  alt="Card Image"
                  className="object-cover w-full h-full rounded-xl"
                />
              </AspectRatio>
            </CarouselItem>
            <CarouselItem>
              <AspectRatio ratio={16 / 9}>
                <img
                  src="https://picsum.photos/1600/900"
                  alt="Card Image"
                  className="object-cover w-full h-full rounded-xl"
                />
                <CarouselItemDescription>
                  Say something about the image. It should be a long text. It
                  should be a long text. It should be a long text. It should be
                  a long text. It should be a long text. It should be a long
                  text. It should be a long text. It should be a long text. It
                  should be a long text. It should be a long text. It should be
                  a long text. It should be a long text. It should be a long
                  text. It should be a long text. It should be a long text. It
                  should be a long text. It should be a long text. It should be
                  a long text. It should be a long text. It should be a long
                  text. It should be a long text. It should be a long text. It
                  should be a long text. It should be a long text. It should be
                  a long text. It should be a long text.
                </CarouselItemDescription>
              </AspectRatio>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </CarouselContentWrapper>
        <CarouselDots />
      </Carousel>
    </div>
  ),
};
