import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";

import {
  HGrid,
  Item,
  ItemDescription,
  ItemHeader,
  ItemMedia,
  ItemTitle,
  VStack,
} from "@kreftforeningen/web-react";

import colors from "@kreftforeningen/web-css/json/colors.json";
import vippsColors from "@kreftforeningen/web-css/json/vipps-colors.json";
import pinkRibbonColors from "@kreftforeningen/web-css/json/pink-ribbon-colors.json";

const meta = {
  title: "base/Colors",
  args: { onClick: fn() },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

type ScaleValue = { oklch: string; hex: string; rgba: string };
type ColorScale = {
  name: string;
  variable: string;
  values: Record<string, ScaleValue>;
};

const renderShade = (color: ColorScale, shade: string, swatch: ScaleValue) => {
  const label =
    shade === "base" ? color.variable : `${color.variable}-${shade}`;
  return (
    <Item key={`${color.name}-${shade}`} size="sm">
      <ItemHeader>
        <ItemMedia>
          <div
            style={{ background: swatch.oklch, height: "30px", width: "30px" }}
            title={label}
          />
        </ItemMedia>
      </ItemHeader>
      <ItemTitle>{label}</ItemTitle>
      <ItemDescription>
        <p>{swatch.oklch}</p>
        <p>{swatch.hex}</p>
        <p>{swatch.rgba}</p>
      </ItemDescription>
    </Item>
  );
};

const renderPaletteList = (data: ColorScale[]) => (
  <VStack gap={6}>
    {data.map((color) => (
      <VStack key={color.name}>
        <h3>{color.name}</h3>
        <HGrid columns={4} gap={6}>
          {Object.entries(color.values).map(([shade, swatch]) =>
            renderShade(color, shade, swatch)
          )}
        </HGrid>
      </VStack>
    ))}
  </VStack>
);

export const Colors: Story = {
  render: () => {
    const data = colors as unknown as ColorScale[];
    const baseOnlyNames = new Set(["black", "white"]);
    const extended = data.filter((color) => !baseOnlyNames.has(color.name));
    const baseOnly = data.filter((color) => baseOnlyNames.has(color.name));

    return (
      <>
        <h2>Colors</h2>
        {renderPaletteList(extended)}
        {baseOnly.length > 0 && (
          <div className="mt-8 flex flex-col gap-6">
            <h2>Base Colors</h2>
            {renderPaletteList(baseOnly)}
          </div>
        )}
      </>
    );
  },
};

export const PinkRibbonColors: Story = {
  render: () => {
    const data = pinkRibbonColors as unknown as ColorScale[];

    return (
      <>
        <h2>Pink Ribbon Colors</h2>
        {renderPaletteList(data)}
      </>
    );
  },
};

export const VippsColors: Story = {
  render: () => {
    const data = vippsColors as unknown as ColorScale[];

    return (
      <>
        <h2>Vipps Colors</h2>
        {renderPaletteList(data)}
      </>
    );
  },
};
