import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
  DrawerClose,
  Button,
} from "@kreftforeningen/web-react";

const meta = {
  title: "components/Drawer",
  component: Drawer,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `A drawer component for React. [Docs](https://vaul.emilkowal.ski/getting-started).`,
      },
    },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Drawer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    docs: {
      source: {
        code: `<Drawer>
    <DrawerTrigger asChild>
      <Button variant="outline">Click to open Drawer</Button>
    </DrawerTrigger>
    <DrawerContent>
      <div className="mx-auto w-full max-w-sm">
        <DrawerHeader>
          <DrawerTitle>Drawer</DrawerTitle>
          <DrawerDescription>Achieve your goals.</DrawerDescription>
        </DrawerHeader>
        <div className="p-4 pb-0 text-center">
          Some content in this drawer.
        </div>
        <DrawerFooter>
          <Button>Submit</Button>
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </div>
    </DrawerContent>
  </Drawer>`,
      },
    },
  },
  render: () => (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">Click to open Drawer</Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Drawer</DrawerTitle>
            <DrawerDescription>Achieve your goals.</DrawerDescription>
          </DrawerHeader>
          <div className="p-4 pb-0 text-center">
            Some content in this drawer.
          </div>
          <DrawerFooter>
            <Button>Submit</Button>
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  ),
};
