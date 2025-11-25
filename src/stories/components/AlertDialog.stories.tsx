import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
  Button,
} from "@kreftforeningen/web-react";

AlertDialog.displayName = "AlertDialog";
AlertDialogAction.displayName = "AlertDialogAction";
AlertDialogCancel.displayName = "AlertDialogCancel";
AlertDialogContent.displayName = "AlertDialogContent";
AlertDialogDescription.displayName = "AlertDialogDescription";
AlertDialogFooter.displayName = "AlertDialogFooter";
AlertDialogHeader.displayName = "AlertDialogHeader";
AlertDialogTitle.displayName = "AlertDialogTitle";
AlertDialogTrigger.displayName = "AlertDialogTrigger";

type AlertDialogProps = React.ComponentProps<typeof AlertDialog>;

const meta = {
  title: "components/AlertDialog",
  component: AlertDialog,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `A modal dialog that interrupts the user with important content and expects a response. [Docs](https://www.radix-ui.com/docs/primitives/components/alert-dialog). [API Reference](https://www.radix-ui.com/docs/primitives/components/alert-dialog#api-reference).`,
      },
    },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof AlertDialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args: AlertDialogProps) => (
    <AlertDialog {...args}>
      <AlertDialogTrigger asChild>
        <Button>Clik to open Alert Dialog</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  ),
};
