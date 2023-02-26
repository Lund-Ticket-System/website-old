import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";

import { extendTheme } from "@chakra-ui/react";

const fonts = {
  heading: `'Libre Baskerville', serif`,
};

const colors = {
  primary: {
    50: "#ffcdb9",
    100: "#ffc3aa",
    200: "#ffb99c",
    300: "#ffaf8e",
    400: "#FFA580",
    500: "#FF9B72",
    600: "#E68C67",
    700: "#CC7C5B",
    800: "#B36D50",
    900: "#995D44",
  },
  accent: {
    50: "#fffeee",
    100: "#fffdeb",
    200: "#fffde7",
    300: "#fffde4",
    400: "#fffce0",
    500: "#fffcdd",
    600: "#e6e3c7",
    700: "#cccab1",
    800: "#b3b09b",
    900: "#999785",
  },
};

const theme = extendTheme({ colors, fonts });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
