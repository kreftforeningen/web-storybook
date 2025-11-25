import "../src/index.css";

import type { Preview } from "@storybook/react-vite";

const preview: Preview = {
  parameters: {
    options: {
      storySort: {
        order: [
          "base",
          ["Introduction", "Colors", "Fonts", "Headings", "Text"],
          "primitives",
          ["Introduction", "*"],
          "components",
          ["Introduction", "*"],
        ],
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    viewport: {
      defaultViewport: "largeDesktop",
    },
  },
};

export default preview;
