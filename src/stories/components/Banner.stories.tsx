import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import {
  Banner,
  BannerImage,
  BannerContent,
  BannerTitle,
  BannerDescription,
  BannerButtons,
  BannerButtonPrimary,
  BannerButtonSecondary,
} from "@kreftforeningen/web-react";

import bannerImage from "../assets/banner.jpg";

const meta = {
  title: "components/Banner",
  component: Banner,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  args: { onClick: fn() },
} satisfies Meta<typeof Banner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    docs: {
      source: {
        code: `<Banner>
  <BannerImage src={bannerImage} alt="Banner" />
  <BannerContent>
    <BannerTitle>Banner</BannerTitle>
    <BannerDescription>
      <p className="mb-4">
        Text. Text. Text. Text. Text. Text. Text. Text. Text. Text. Text.
        Text. Text. Text. Text. Text. Text. Text. Text. Text. Text. Text.
        Text. Text.
      </p>
      <p className="mb-4">
        Text. Text. Text. Text. Text. Text. Text. Text. Text. Text. Text.
        Text. Text. Text. Text. Text. Text. Text. Text. Text. Text. Text.
        Text. Text.
      </p>
    </BannerDescription>
    <BannerButtons>
      <BannerButtonPrimary href="#">Button</BannerButtonPrimary>
      <BannerButtonSecondary href="#">Button</BannerButtonSecondary>
    </BannerButtons>
  </BannerContent>
</Banner>`,
      },
    },
  },
  args: {
    children: (
      <>
        <BannerImage src={bannerImage} alt="Banner" />
        <BannerContent>
          <BannerTitle>Banner</BannerTitle>
          <BannerDescription>
            <p className="mb-4">
              Text. Text. Text. Text. Text. Text. Text. Text. Text. Text. Text.
              Text. Text. Text. Text. Text. Text. Text. Text. Text. Text. Text.
              Text. Text.
            </p>
            <p className="mb-4">
              Text. Text. Text. Text. Text. Text. Text. Text. Text. Text. Text.
              Text. Text. Text. Text. Text. Text. Text. Text. Text. Text. Text.
              Text. Text.
            </p>
          </BannerDescription>
          <BannerButtons>
            <BannerButtonPrimary href="#">Button</BannerButtonPrimary>
            <BannerButtonSecondary href="#">Button</BannerButtonSecondary>
          </BannerButtons>
        </BannerContent>
      </>
    ),
  },
};

export const RightVariant: Story = {
  parameters: {
    docs: {
      source: {
        code: `<Banner variant="right">
  <BannerImage src={bannerImage} alt="Banner" />
  <BannerContent>
    <BannerTitle>Banner</BannerTitle>
    <BannerDescription>
      <p className="mb-4">
        Text. Text. Text. Text. Text. Text. Text. Text. Text. Text. Text.
        Text. Text. Text. Text. Text. Text. Text. Text. Text. Text. Text.
        Text. Text.
      </p>
      <p className="mb-4">
        Text. Text. Text. Text. Text. Text. Text. Text. Text. Text. Text.
        Text. Text. Text. Text. Text. Text. Text. Text. Text. Text. Text.
        Text. Text.
      </p>
    </BannerDescription>
    <BannerButtons>
      <BannerButtonPrimary href="#">Button</BannerButtonPrimary>
      <BannerButtonSecondary href="#">Button</BannerButtonSecondary>
    </BannerButtons>
  </BannerContent>
</Banner>`,
      },
    },
  },
  args: {
    variant: "right",
    children: (
      <>
        <BannerImage src={bannerImage} alt="Banner" />
        <BannerContent>
          <BannerTitle>Banner</BannerTitle>
          <BannerDescription>
            <p className="mb-4">
              Text. Text. Text. Text. Text. Text. Text. Text. Text. Text. Text.
              Text. Text. Text. Text. Text. Text. Text. Text. Text. Text. Text.
              Text. Text.
            </p>
            <p className="mb-4">
              Text. Text. Text. Text. Text. Text. Text. Text. Text. Text. Text.
              Text. Text. Text. Text. Text. Text. Text. Text. Text. Text. Text.
              Text. Text.
            </p>
          </BannerDescription>
          <BannerButtons>
            <BannerButtonPrimary href="#">Button</BannerButtonPrimary>
            <BannerButtonSecondary href="#">Button</BannerButtonSecondary>
          </BannerButtons>
        </BannerContent>
      </>
    ),
  },
};
