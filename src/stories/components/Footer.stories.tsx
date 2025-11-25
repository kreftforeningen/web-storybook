import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import {
  Button,
  FooterNavigationItem,
  FooterNavigationLink,
  FooterSocial,
  FooterWrapper,
  FooterNavigation,
  FooterContact,
  FooterActions,
  FooterContactItem,
  FooterCopyright,
} from "@kreftforeningen/web-react";

import {
  LuPhone,
  LuMail,
  LuHeart,
  LuMessageCircle,
  LuMap,
  LuShoppingBasket,
  LuHandCoins,
} from "react-icons/lu";

import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
  FaTiktok,
} from "react-icons/fa";

const meta = {
  title: "components/Footer",
  component: FooterWrapper,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: `A footer component that displays a footer area.`,
      },
    },
  },
  tags: ["autodocs"],
  args: { onClick: fn() },
} satisfies Meta<typeof FooterWrapper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    docs: {
      source: {
        code: `<FooterWrapper className="dark">
  <FooterActions>
    <Button variant="destructive" asChild>
      <a href="#">
        Støtt oss <LuHeart className="hidden sm:block" />
      </a>
    </Button>
    <Button variant="outline" asChild>
      <a href="#">
        Nettbutikk <LuShoppingBasket className="hidden sm:block" />
      </a>
    </Button>
    <Button variant="outline" asChild>
      <a href="#">
        Vipps 2277 <LuHandCoins className="hidden sm:block" />
      </a>
    </Button>
  </FooterActions>

  <FooterNavigation>
    <FooterNavigationItem>
      <FooterNavigationLink href="/">Kontonummer</FooterNavigationLink>
    </FooterNavigationItem>
    <FooterNavigationItem>
      <FooterNavigationLink href="/">SMS</FooterNavigationLink>
    </FooterNavigationItem>
    <FooterNavigationItem>
      <FooterNavigationLink href="/">
        Har vi forsøkt å ringe deg?
      </FooterNavigationLink>
    </FooterNavigationItem>
    <FooterNavigationItem>
      <FooterNavigationLink href="/">Nyhetsbrev</FooterNavigationLink>
    </FooterNavigationItem>
    <FooterNavigationItem>
      <FooterNavigationLink href="/">Aktuelt</FooterNavigationLink>
    </FooterNavigationItem>
    <FooterNavigationItem>
      <FooterNavigationLink href="/">Presse</FooterNavigationLink>
    </FooterNavigationItem>
    <FooterNavigationItem>
      <FooterNavigationLink href="/">Skattefradrag</FooterNavigationLink>
    </FooterNavigationItem>
    <FooterNavigationItem>
      <FooterNavigationLink href="/">Bli medlem</FooterNavigationLink>
    </FooterNavigationItem>
    <FooterNavigationItem>
      <FooterNavigationLink href="/">Gi en gave</FooterNavigationLink>
    </FooterNavigationItem>
    <FooterNavigationItem>
      <FooterNavigationLink href="/">Bli frivillig</FooterNavigationLink>
    </FooterNavigationItem>
    <FooterNavigationItem>
      <FooterNavigationLink href="/">Min side</FooterNavigationLink>
    </FooterNavigationItem>
    <FooterNavigationItem>
      <FooterNavigationLink href="/">Om oss</FooterNavigationLink>
    </FooterNavigationItem>
    <FooterNavigationItem>
      <FooterNavigationLink href="/">
        Bestill brosjyrer
      </FooterNavigationLink>
    </FooterNavigationItem>
    <FooterNavigationItem>
      <FooterNavigationLink href="/">Personvern</FooterNavigationLink>
    </FooterNavigationItem>
    <FooterNavigationItem>
      <FooterNavigationLink href="/">
        Informasjonskapsler
      </FooterNavigationLink>
    </FooterNavigationItem>
    <FooterNavigationItem>
      <FooterNavigationLink href="/">
        Ledige stillinger
      </FooterNavigationLink>
    </FooterNavigationItem>
  </FooterNavigation>

  <FooterSocial>
    <Button variant="outline" size="icon" aria-label="Facebook">
      <FaFacebook />
    </Button>
    <Button variant="outline" size="icon" aria-label="Instagram">
      <FaInstagram />
    </Button>
    <Button variant="outline" size="icon" aria-label="Youtube">
      <FaYoutube />
    </Button>
    <Button variant="outline" size="icon" aria-label="Linkedin">
      <FaLinkedin />
    </Button>
    <Button variant="outline" size="icon" aria-label="Tiktok">
      <FaTiktok />
    </Button>
  </FooterSocial>

  <FooterContact>
    <FooterContactItem href="#" aria-label="Phone">
      <LuPhone /> 21 49 49 21
    </FooterContactItem>
    <FooterContactItem href="#" aria-label="Email">
      <LuMail />
      post@kreftforeningen.no
    </FooterContactItem>
    <FooterContactItem href="#" aria-label="Chat">
      <LuMessageCircle /> Chat med oss
    </FooterContactItem>
    <FooterContactItem href="#" aria-label="Map">
      <LuMap /> Kontorer og adresser
    </FooterContactItem>
  </FooterContact>

  <FooterCopyright>
    Vi er medlem av{" "}
    <a href="https://www.innsamlingskontrollen.no/">
      Innsamlingskontrollen i Norge
    </a>
    , <a href="https://oslocancercluster.no/">Oslo Cancer Cluster</a>,{" "}
    <a href="https://www.norwayhealthtech.com/nb/">Norway Health Tech</a>,{" "}
    <a href="https://www.smartcarecluster.no/">
      Norwegian Smart Care Cluster
    </a>
    , <a href="https://www.uicc.org/">UICC </a>og{" "}
    <a href="https://ncu.nu/">NCU</a>.
  </FooterCopyright>
</FooterWrapper>`,
      },
    },
  },
  render: () => (
    <FooterWrapper className="dark">
      <FooterActions>
        <Button variant="destructive" asChild>
          <a href="#">
            Støtt oss <LuHeart className="hidden sm:block" />
          </a>
        </Button>
        <Button variant="outline" asChild>
          <a href="#">
            Nettbutikk <LuShoppingBasket className="hidden sm:block" />
          </a>
        </Button>
        <Button variant="outline" asChild>
          <a href="#">
            Vipps 2277 <LuHandCoins className="hidden sm:block" />
          </a>
        </Button>
      </FooterActions>

      <FooterNavigation>
        <FooterNavigationItem>
          <FooterNavigationLink href="/">Kontonummer</FooterNavigationLink>
        </FooterNavigationItem>
        <FooterNavigationItem>
          <FooterNavigationLink href="/">SMS</FooterNavigationLink>
        </FooterNavigationItem>
        <FooterNavigationItem>
          <FooterNavigationLink href="/">
            Har vi forsøkt å ringe deg?
          </FooterNavigationLink>
        </FooterNavigationItem>
        <FooterNavigationItem>
          <FooterNavigationLink href="/">Nyhetsbrev</FooterNavigationLink>
        </FooterNavigationItem>
        <FooterNavigationItem>
          <FooterNavigationLink href="/">Aktuelt</FooterNavigationLink>
        </FooterNavigationItem>
        <FooterNavigationItem>
          <FooterNavigationLink href="/">Presse</FooterNavigationLink>
        </FooterNavigationItem>
        <FooterNavigationItem>
          <FooterNavigationLink href="/">Skattefradrag</FooterNavigationLink>
        </FooterNavigationItem>
        <FooterNavigationItem>
          <FooterNavigationLink href="/">Bli medlem</FooterNavigationLink>
        </FooterNavigationItem>
        <FooterNavigationItem>
          <FooterNavigationLink href="/">Gi en gave</FooterNavigationLink>
        </FooterNavigationItem>
        <FooterNavigationItem>
          <FooterNavigationLink href="/">Bli frivillig</FooterNavigationLink>
        </FooterNavigationItem>
        <FooterNavigationItem>
          <FooterNavigationLink href="/">Min side</FooterNavigationLink>
        </FooterNavigationItem>
        <FooterNavigationItem>
          <FooterNavigationLink href="/">Om oss</FooterNavigationLink>
        </FooterNavigationItem>
        <FooterNavigationItem>
          <FooterNavigationLink href="/">
            Bestill brosjyrer
          </FooterNavigationLink>
        </FooterNavigationItem>
        <FooterNavigationItem>
          <FooterNavigationLink href="/">Personvern</FooterNavigationLink>
        </FooterNavigationItem>
        <FooterNavigationItem>
          <FooterNavigationLink href="/">
            Informasjonskapsler
          </FooterNavigationLink>
        </FooterNavigationItem>
        <FooterNavigationItem>
          <FooterNavigationLink href="/">
            Ledige stillinger
          </FooterNavigationLink>
        </FooterNavigationItem>
      </FooterNavigation>

      <FooterSocial>
        <Button variant="outline" size="icon" aria-label="Facebook">
          <FaFacebook />
        </Button>
        <Button variant="outline" size="icon" aria-label="Instagram">
          <FaInstagram />
        </Button>
        <Button variant="outline" size="icon" aria-label="Youtube">
          <FaYoutube />
        </Button>
        <Button variant="outline" size="icon" aria-label="Linkedin">
          <FaLinkedin />
        </Button>
        <Button variant="outline" size="icon" aria-label="Tiktok">
          <FaTiktok />
        </Button>
      </FooterSocial>

      <FooterContact>
        <FooterContactItem href="#" aria-label="Phone">
          <LuPhone /> 21 49 49 21
        </FooterContactItem>
        <FooterContactItem href="#" aria-label="Email">
          <LuMail />
          post@kreftforeningen.no
        </FooterContactItem>
        <FooterContactItem href="#" aria-label="Chat">
          <LuMessageCircle /> Chat med oss
        </FooterContactItem>
        <FooterContactItem href="#" aria-label="Map">
          <LuMap /> Kontorer og adresser
        </FooterContactItem>
      </FooterContact>

      <FooterCopyright>
        Vi er medlem av{" "}
        <a href="https://www.innsamlingskontrollen.no/">
          Innsamlingskontrollen i Norge
        </a>
        , <a href="https://oslocancercluster.no/">Oslo Cancer Cluster</a>,{" "}
        <a href="https://www.norwayhealthtech.com/nb/">Norway Health Tech</a>,{" "}
        <a href="https://www.smartcarecluster.no/">
          Norwegian Smart Care Cluster
        </a>
        , <a href="https://www.uicc.org/">UICC </a>og{" "}
        <a href="https://ncu.nu/">NCU</a>.
      </FooterCopyright>
    </FooterWrapper>
  ),
};
