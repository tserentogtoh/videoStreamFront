import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import Theme from "../Theme";

import LayOut from "../Layout";
function MyApp(AppProps: AppProps) {
  return (
    <ChakraProvider theme={Theme}>
      <LayOut {...AppProps} />
    </ChakraProvider>
  );
}

export default MyApp;
