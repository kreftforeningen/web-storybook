import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { Button, Toaster, toast } from "@kreftforeningen/web-react";

const meta = {
  title: "components/Sonner",
  component: Toaster,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `An opinionated toast component for React. [Docs](https://sonner.emilkowal.ski/).`,
      },
    },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Toaster>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    docs: {
      source: {
        code: `<>
  <Button
    variant="outline"
    onClick={() =>
      toast.warning("Event has been created", {
        description: "Sunday, December 03, 2023 at 9:00 AM",
      })
    }
  >
    Click to show Toast
  </Button>
  <Toaster position="top-center" richColors closeButton />
</>`,
      },
    },
  },
  render: () => (
    <>
      <Button
        variant="outline"
        onClick={() =>
          toast.warning("Event has been created", {
            description: "Sunday, December 03, 2023 at 9:00 AM",
          })
        }
      >
        Click to show Toast
      </Button>
      <Toaster position="top-center" richColors closeButton />
    </>
  ),
};
