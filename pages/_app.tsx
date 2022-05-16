import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import Theme from "../Theme";
import { ColorProvider } from "../Context/ColorContext";
import LayOut from "../Layout";
function MyApp(AppProps: AppProps) {
  return (
    <ChakraProvider theme={Theme}>
      <ColorProvider>
        <LayOut {...AppProps} />
      </ColorProvider>
    </ChakraProvider>
  );
}

export default MyApp;
