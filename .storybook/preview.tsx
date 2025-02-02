import type { Preview } from "@storybook/react";
import {ThemeProvider} from "@mui/material";
import {theme} from "../src/theme";
import {MemoryRouter} from "react-router";

// @ts-ignore
export const decorators = [
  (Story) => (
      <MemoryRouter>
        <ThemeProvider theme={theme}>
          <Story />
        </ThemeProvider>
      </MemoryRouter>
  ),
];

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
