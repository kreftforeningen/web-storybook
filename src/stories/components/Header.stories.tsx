import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import {
  Button,
  HeaderWrapper,
  HeaderLogo,
  HeaderTitle,
  HeaderButton,
  HeaderMenu,
  HeaderMenuTrigger,
  HeaderMenuContent,
  HeaderSearch,
  HeaderMenuList,
  HeaderMenuListItem,
} from "kf-component-library";

import {
  LuChevronRight,
  LuGlobe,
  LuHeart,
  LuMenu,
  LuCog,
  LuShoppingBasket,
  LuUser,
  LuExternalLink,
} from "react-icons/lu";

import "kf-tailwind";
import "tailwindcss";

import logo from "../assets/logo.svg";
import logoDark from "../assets/logo-dark.svg";
import logoSymbol from "../assets/logo-symbol.svg";

const meta = {
  title: "components/Header",
  component: HeaderWrapper,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: `A header component that displays a header area with logo, buttons, and menu.`,
      },
    },
  },
  tags: ["autodocs"],
  args: { onClick: fn() },
} satisfies Meta<typeof HeaderWrapper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    docs: {
      source: {
        code: `<HeaderWrapper>
  <HeaderLogo src={logo} darkSrc={logoDark} alt="Logo" />
  <HeaderButton href="#" variant="destructive">
    Støtt oss <LuHeart className="hidden sm:block" />
  </HeaderButton>
  <HeaderButton href="#" className="hidden sm:block" variant="outline">
    Nettbutikk <LuShoppingBasket />
  </HeaderButton>

  <HeaderMenu>
    <HeaderMenuTrigger>
      <Button
        variant="default"
        data-slot="header-button"
        className="flex items-center gap-2"
      >
        <span className="hidden sm:block">Menu</span> <LuMenu />
      </Button>
    </HeaderMenuTrigger>
    <HeaderMenuContent>
      <HeaderSearch />
      <HeaderMenuList>
        <HeaderMenuListItem href="#">
          <LuShoppingBasket /> Nettbutikk
        </HeaderMenuListItem>
        <HeaderMenuListItem href="#">
          <LuUser /> Min side
        </HeaderMenuListItem>
        <HeaderMenuListItem href="#">
          <LuGlobe /> English
        </HeaderMenuListItem>
      </HeaderMenuList>
      <HeaderMenuList>
        <HeaderMenuListItem href="#">
          <LuChevronRight />
          Om kreft
        </HeaderMenuListItem>
        <HeaderMenuListItem href="#">
          <LuChevronRight />
          Råd og rettigheter
        </HeaderMenuListItem>
        <HeaderMenuListItem href="#">
          <LuChevronRight />
          Tilbud og aktiviteter
        </HeaderMenuListItem>
        <HeaderMenuListItem href="#">
          <LuChevronRight />
          Forebygge kreft
        </HeaderMenuListItem>
      </HeaderMenuList>
      <HeaderMenuList>
        <HeaderMenuListItem href="#">
          <LuChevronRight />
          Støtt kreftsaken
        </HeaderMenuListItem>
        <HeaderMenuListItem href="#">
          <LuChevronRight />
          Engasjer deg
        </HeaderMenuListItem>
        <HeaderMenuListItem href="#">
          <LuChevronRight />
          Kreftforskning
        </HeaderMenuListItem>
        <HeaderMenuListItem href="#">
          <LuChevronRight />
          Om oss
        </HeaderMenuListItem>
        <HeaderMenuListItem href="#">
          <LuChevronRight />
          Kontakt oss
        </HeaderMenuListItem>
        <HeaderMenuListItem href="#">
          <LuChevronRight />
          Aktuelt
        </HeaderMenuListItem>
      </HeaderMenuList>
    </HeaderMenuContent>
  </HeaderMenu>
</HeaderWrapper>`,
      },
    },
  },
  render: () => (
    <HeaderWrapper>
      <HeaderLogo src={logo} darkSrc={logoDark} alt="Logo" />
      <HeaderButton href="#" variant="destructive">
        Støtt oss <LuHeart className="hidden sm:block" />
      </HeaderButton>
      <HeaderButton href="#" className="hidden sm:block" variant="outline">
        Nettbutikk <LuShoppingBasket />
      </HeaderButton>

      <HeaderMenu>
        <HeaderMenuTrigger>
          <Button
            variant="default"
            data-slot="header-button"
            className="flex items-center gap-2"
          >
            <span className="hidden sm:block">Menu</span> <LuMenu />
          </Button>
        </HeaderMenuTrigger>
        <HeaderMenuContent>
          <HeaderSearch />
          <HeaderMenuList>
            <HeaderMenuListItem href="#">
              <LuShoppingBasket /> Nettbutikk
            </HeaderMenuListItem>
            <HeaderMenuListItem href="#">
              <LuUser /> Min side
            </HeaderMenuListItem>
            <HeaderMenuListItem href="#">
              <LuGlobe /> English
            </HeaderMenuListItem>
          </HeaderMenuList>
          <HeaderMenuList>
            <HeaderMenuListItem href="#">
              <LuChevronRight />
              Om kreft
            </HeaderMenuListItem>
            <HeaderMenuListItem href="#">
              <LuChevronRight />
              Råd og rettigheter
            </HeaderMenuListItem>
            <HeaderMenuListItem href="#">
              <LuChevronRight />
              Tilbud og aktiviteter
            </HeaderMenuListItem>
            <HeaderMenuListItem href="#">
              <LuChevronRight />
              Forebygge kreft
            </HeaderMenuListItem>
          </HeaderMenuList>
          <HeaderMenuList>
            <HeaderMenuListItem href="#">
              <LuChevronRight />
              Støtt kreftsaken
            </HeaderMenuListItem>
            <HeaderMenuListItem href="#">
              <LuChevronRight />
              Engasjer deg
            </HeaderMenuListItem>
            <HeaderMenuListItem href="#">
              <LuChevronRight />
              Kreftforskning
            </HeaderMenuListItem>
            <HeaderMenuListItem href="#">
              <LuChevronRight />
              Om oss
            </HeaderMenuListItem>
            <HeaderMenuListItem href="#">
              <LuChevronRight />
              Kontakt oss
            </HeaderMenuListItem>
            <HeaderMenuListItem href="#">
              <LuChevronRight />
              Aktuelt
            </HeaderMenuListItem>
          </HeaderMenuList>
        </HeaderMenuContent>
      </HeaderMenu>
    </HeaderWrapper>
  ),
};

export const App: Story = {
  parameters: {
    docs: {
      source: {
        code: `<HeaderWrapper>
  <HeaderTitle>App Title</HeaderTitle>
  <HeaderButton
    href="https://nettbutikk.kreftforeningen.no"
    className="hidden sm:block"
    variant="outline"
  >
    Kreftforeningen.no <LuExternalLink />
  </HeaderButton>

  <HeaderMenu>
    <HeaderMenuTrigger>
      <Button
        variant="default"
        data-slot="header-button"
        className="flex items-center gap-2"
      >
        <span className="hidden sm:block">Menu</span> <LuMenu />
      </Button>
    </HeaderMenuTrigger>
    <HeaderMenuContent>
      <HeaderSearch />
      <HeaderMenuList>
        <HeaderMenuListItem href="#">
          <LuUser /> Profil
        </HeaderMenuListItem>
        <HeaderMenuListItem href="#">
          <LuCog /> Konto
        </HeaderMenuListItem>
      </HeaderMenuList>
      <HeaderMenuList>
        <HeaderMenuListItem href="#">
          <LuChevronRight />
          Personvern
        </HeaderMenuListItem>
        <HeaderMenuListItem href="#">
          <LuChevronRight />
          Avtaler
        </HeaderMenuListItem>
        <HeaderMenuListItem href="#">
          <LuChevronRight />
          Donasjoner
        </HeaderMenuListItem>
        <HeaderMenuListItem href="#">
          <LuChevronRight />
          Grupper
        </HeaderMenuListItem>
      </HeaderMenuList>
      <HeaderMenuList>
        <HeaderMenuListItem href="#">
          <LuHeart />
          Støtt oss
        </HeaderMenuListItem>
        <HeaderMenuListItem href="#">
          <LuShoppingBasket />
          Nettbutikk
        </HeaderMenuListItem>
        <HeaderMenuListItem href="https://kreftforeningen.no/">
          <img src={logoSymbol} alt="Kreftforeningen" className="h-6 w-6" />
          Kreftforeningen
        </HeaderMenuListItem>
      </HeaderMenuList>
    </HeaderMenuContent>
  </HeaderMenu>
</HeaderWrapper>`,
      },
    },
  },
  render: () => (
    <HeaderWrapper>
      <HeaderTitle>App Title</HeaderTitle>
      <HeaderButton
        href="https://nettbutikk.kreftforeningen.no"
        className="hidden sm:block"
        variant="outline"
      >
        Kreftforeningen.no <LuExternalLink />
      </HeaderButton>

      <HeaderMenu>
        <HeaderMenuTrigger>
          <Button
            variant="default"
            data-slot="header-button"
            className="flex items-center gap-2"
          >
            <span className="hidden sm:block">Menu</span> <LuMenu />
          </Button>
        </HeaderMenuTrigger>
        <HeaderMenuContent>
          <HeaderSearch />
          <HeaderMenuList>
            <HeaderMenuListItem href="#">
              <LuUser /> Profil
            </HeaderMenuListItem>
            <HeaderMenuListItem href="#">
              <LuCog /> Konto
            </HeaderMenuListItem>
          </HeaderMenuList>
          <HeaderMenuList>
            <HeaderMenuListItem href="#">
              <LuChevronRight />
              Personvern
            </HeaderMenuListItem>
            <HeaderMenuListItem href="#">
              <LuChevronRight />
              Avtaler
            </HeaderMenuListItem>
            <HeaderMenuListItem href="#">
              <LuChevronRight />
              Donasjoner
            </HeaderMenuListItem>
            <HeaderMenuListItem href="#">
              <LuChevronRight />
              Grupper
            </HeaderMenuListItem>
          </HeaderMenuList>
          <HeaderMenuList>
            <HeaderMenuListItem href="#">
              <LuHeart />
              Støtt oss
            </HeaderMenuListItem>
            <HeaderMenuListItem href="#">
              <LuShoppingBasket />
              Nettbutikk
            </HeaderMenuListItem>
            <HeaderMenuListItem href="https://kreftforeningen.no/">
              <img src={logoSymbol} alt="Kreftforeningen" className="h-6 w-6" />
              Kreftforeningen
            </HeaderMenuListItem>
          </HeaderMenuList>
        </HeaderMenuContent>
      </HeaderMenu>
    </HeaderWrapper>
  ),
};
