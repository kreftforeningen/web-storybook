import type { ComponentProps } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { AspectRatio } from "@kreftforeningen/web-react";

AspectRatio.displayName = "AspectRatio";

type AspectRatioProps = ComponentProps<typeof AspectRatio>;

const meta = {
  title: "components/AspectRatio",
  component: AspectRatio,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `Displays content within a desired ratio. [Docs](https://www.radix-ui.com/docs/primitives/components/aspect-ratio). [API Reference](https://www.radix-ui.com/docs/primitives/components/aspect-ratio#api-reference).`,
      },
    },
  },
} satisfies Meta<typeof AspectRatio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args: AspectRatioProps) => (
    <div className="w-[600px]">
      <AspectRatio ratio={21 / 9} {...args}>
        <img
          src="https://picsum.photos/2100/900"
          alt="Ultra-wide landscape"
          className="rounded-md object-cover w-full h-full"
        />
      </AspectRatio>
    </div>
  ),
};
