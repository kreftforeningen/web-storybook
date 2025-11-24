import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";

import colors from "@kreftforeningen/web-css/json/colors.json";
import vippsColors from "@kreftforeningen/web-css/json/vipps-colors.json";
import pinkRibbonColors from "@kreftforeningen/web-css/json/pink-ribbon-colors.json";

const meta = {
  title: "base/Colors",
  args: { onClick: fn() },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Colors: Story = {
  render: () => {
    type ScaleValue = { oklch: string; hex: string; rgba: string };
    type ColorScale = {
      name: string;
      variable: string;
      values: Record<string, ScaleValue>;
    };

    const data = colors as unknown as ColorScale[];

    return (
      <>
        <h2>Extended Colors</h2>
        <div className="flex flex-col gap-6">
          {data.map((color) => (
            <div key={color.name} className="flex flex-col">
              <h3>{color.name}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                {Object.entries(color.values).map(([shade, v]) => (
                  <div key={shade} className="flex flex-col items-center">
                    <div
                      className="w-12 h-12 rounded shadow border"
                      style={{ background: v.oklch }}
                      title={`${color.variable}-${shade}`}
                    />
                    <div className="mt-1 text-[10px] font-mono text-center">
                      {`${color.variable}-${shade}`}
                    </div>
                    <div className="text-[10px] font-mono text-center">
                      {v.oklch}
                    </div>
                    <div className="text-[10px] font-mono text-center text-gray-500">
                      {v.hex}
                    </div>
                    <div className="text-[10px] font-mono text-center text-gray-500">
                      {v.rgba}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </>
    );
  },
};

export const PinkRibbonColors: Story = {
  render: () => {
    type ScaleValue = { oklch: string; hex: string; rgba: string };
    type ColorScale = {
      name: string;
      variable: string;
      values: Record<string, ScaleValue>;
    };

    const data = pinkRibbonColors as unknown as ColorScale[];

    return (
      <>
        <h2>Pink Ribbon Colors</h2>
        <div className="flex flex-col gap-6">
          {data.map((color) => (
            <div key={color.name} className="flex flex-col">
              <h3>{color.name}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                {Object.entries(color.values).map(([shade, v]) => (
                  <div key={shade} className="flex flex-col items-center">
                    <div
                      className="w-12 h-12 rounded shadow border"
                      style={{ background: v.oklch }}
                      title={`${color.variable}-${shade}`}
                    />
                    <div className="mt-1 text-[10px] font-mono text-center">
                      {`${color.variable}-${shade}`}
                    </div>
                    <div className="text-[10px] font-mono text-center">
                      {v.oklch}
                    </div>
                    <div className="text-[10px] font-mono text-center text-gray-500">
                      {v.hex}
                    </div>
                    <div className="text-[10px] font-mono text-center text-gray-500">
                      {v.rgba}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </>
    );
  },
};

export const VippsColors: Story = {
  render: () => {
    type ScaleValue = { oklch: string; hex: string; rgba: string };
    type ColorScale = {
      name: string;
      variable: string;
      values: Record<string, ScaleValue>;
    };

    const data = vippsColors as unknown as ColorScale[];

    return (
      <>
        <h2>Vipps Colors</h2>
        <div className="flex flex-col gap-6">
          {data.map((color) => (
            <div key={color.name} className="flex flex-col">
              <h3>{color.name}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                {Object.entries(color.values).map(([shade, v]) => (
                  <div key={shade} className="flex flex-col items-center">
                    <div
                      className="w-12 h-12 rounded shadow border"
                      style={{ background: v.oklch }}
                      title={`${color.variable}-${shade}`}
                    />
                    <div className="mt-1 text-[10px] font-mono text-center">
                      {`${color.variable}-${shade}`}
                    </div>
                    <div className="text-[10px] font-mono text-center">
                      {v.oklch}
                    </div>
                    <div className="text-[10px] font-mono text-center text-gray-500">
                      {v.hex}
                    </div>
                    <div className="text-[10px] font-mono text-center text-gray-500">
                      {v.rgba}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </>
    );
  },
};
