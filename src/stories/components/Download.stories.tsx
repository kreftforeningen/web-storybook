import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import {
  Download,
  DownloadContent,
  DownloadImage,
  DownloadMain,
  DownloadTitle,
  DownloadDescription,
  DownloadFooter,
  DownloadDownloadUrl,
  DownloadOrderUrl,
  Page,
} from "@kreftforeningen/web-react";

const meta = {
  title: "components/Download",
  component: Download,
  parameters: {
    layout: "largeDesktop",
    docs: {
      description: {
        component: `A download component that allows users to download a file.`,
      },
    },
  },
  tags: ["autodocs"],
  args: { onClick: fn() },
  argTypes: {
    // DownloadImage props
    src: {
      description: "The source URL for the download image",
      control: "text",
      table: {
        category: "DownloadImage Props",
        type: { summary: "string" },
        defaultValue: { summary: "undefined" },
      },
    },
    alt: {
      description: "Alternative text for the download image",
      control: "text",
      table: {
        category: "DownloadImage Props",
        type: { summary: "string" },
        defaultValue: { summary: "undefined" },
      },
    },
    // DownloadDownloadUrl props
    downloadHref: {
      description: "The URL for the download link",
      control: "text",
      table: {
        category: "DownloadDownloadUrl Props",
        type: { summary: "string" },
        defaultValue: { summary: "undefined" },
      },
    },
    // DownloadOrderUrl props
    orderHref: {
      description: "The URL for the order link",
      control: "text",
      table: {
        category: "DownloadOrderUrl Props",
        type: { summary: "string" },
        defaultValue: { summary: "undefined" },
      },
    },
  },
  decorators: [
    (Story) => (
      <div className="p-4">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Download>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    viewport: {
      defaultViewport: "fullscreen",
    },
    docs: {
      source: {
        code: `<Download>
  <DownloadContent>
    <DownloadImage src="https://picsum.photos/200/300" alt="Download" />
    <DownloadMain>
      <DownloadTitle>Download</DownloadTitle>
      <DownloadDescription>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </DownloadDescription>
    </DownloadMain>
  </DownloadContent>
  <DownloadFooter>
    <DownloadDownloadUrl href="https://www.google.com">
      Last ned
    </DownloadDownloadUrl>
    <DownloadOrderUrl href="https://www.google.com">
      Bestill
    </DownloadOrderUrl>
  </DownloadFooter>
</Download>`,
      },
    },
  },
  render: () => (
    <Page.Block gutters>
      <Download>
        <DownloadContent>
          <DownloadImage src="https://picsum.photos/200/300" alt="Download" />
          <DownloadMain>
            <DownloadTitle>Download</DownloadTitle>
            <DownloadDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </DownloadDescription>
          </DownloadMain>
        </DownloadContent>
        <DownloadFooter>
          <DownloadDownloadUrl href="https://www.google.com">
            Last ned
          </DownloadDownloadUrl>
          <DownloadOrderUrl href="https://www.google.com">
            Bestill
          </DownloadOrderUrl>
        </DownloadFooter>
      </Download>
    </Page.Block>
  ),
};
