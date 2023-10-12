import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: `Ubuntu`,
    body: `Ubuntu`,
  },
  styles: {
    global: {
      body: {
        bg: "#F3F3F7",
      },
    },
  },
});

export default theme;
