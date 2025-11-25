import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import {
  Command,
  CommandInput,
  CommandList,
  CommandGroup,
  CommandItem,
  CommandEmpty,
  CommandSeparator,
  CommandShortcut,
} from "@kreftforeningen/web-react";
import {
  LuCalendar,
  LuSmile,
  LuCalculator,
  LuUser,
  LuCreditCard,
  LuSettings,
} from "react-icons/lu";

const meta = {
  title: "components/Command",
  component: Command,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `Fast, composable, unstyled command menu for React. [Docs](https://cmdk.paco.me/).`,
      },
    },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Command>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    docs: {
      source: {
        code: `<div>
  <h2 className="text-xl font-bold mb-4">Command</h2>
  <Command className="rounded-lg border shadow-md md:min-w-[450px]">
    <CommandInput placeholder="Type a command or search..." />
    <CommandList>
      <CommandEmpty>No results found.</CommandEmpty>
      <CommandGroup heading="Suggestions">
        <CommandItem>
          <LuCalendar />
          <span>Calendar</span>
        </CommandItem>
        <CommandItem>
          <LuSmile />
          <span>Search Emoji</span>
        </CommandItem>
        <CommandItem disabled>
          <LuCalculator />
          <span>Calculator</span>
        </CommandItem>
      </CommandGroup>
      <CommandSeparator />
      <CommandGroup heading="Settings">
        <CommandItem>
          <LuUser />
          <span>Profile</span>
          <CommandShortcut>⌘P</CommandShortcut>
        </CommandItem>
        <CommandItem>
          <LuCreditCard />
          <span>Billing</span>
          <CommandShortcut>⌘B</CommandShortcut>
        </CommandItem>
        <CommandItem>
          <LuSettings />
          <span>Settings</span>
          <CommandShortcut>⌘S</CommandShortcut>
        </CommandItem>
      </CommandGroup>
    </CommandList>
  </Command>
</div>`,
      },
    },
  },
  render: () => (
    <div>
      <h2 className="text-xl font-bold mb-4">Command</h2>
      <Command className="rounded-lg border shadow-md md:min-w-[450px]">
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem>
              <LuCalendar />
              <span>Calendar</span>
            </CommandItem>
            <CommandItem>
              <LuSmile />
              <span>Search Emoji</span>
            </CommandItem>
            <CommandItem disabled>
              <LuCalculator />
              <span>Calculator</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Settings">
            <CommandItem>
              <LuUser />
              <span>Profile</span>
              <CommandShortcut>⌘P</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <LuCreditCard />
              <span>Billing</span>
              <CommandShortcut>⌘B</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <LuSettings />
              <span>Settings</span>
              <CommandShortcut>⌘S</CommandShortcut>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    </div>
  ),
};
