import { useColorModeValue } from "@chakra-ui/react";
import { createContext, useContext } from "react";

type ColorProviderProps = { children: React.ReactNode };

enum Types {
  bg,
  softBg,
  NFTCardColor,
  secondaryBgHex,
  red,
  revText,
  green,
  brand,
  header,
  toggle,
  shadow,
  heart,
  transparent,
  headerWhite,
  highlight,
  footer,
}

type UserContextInterface = {
  [key in keyof typeof Types]: string;
};

const UserContext = createContext<UserContextInterface | undefined>(undefined);

function ColorProvider({ children }: ColorProviderProps) {
  const bg = useColorModeValue("white", "gray.700");
  const softBg = useColorModeValue("gray.300", "gray.600");
  const footer = useColorModeValue("gray.50", "gray.700");
  const NFTCardColor = useColorModeValue("#f7f7f7", "#222b36");
  const secondaryBgHex = useColorModeValue("#edf2f7", "#1a202c");
  const red = useColorModeValue("red.500", "red.300");
  const revText = useColorModeValue("white", "black");
  const green = useColorModeValue("green.500", "green.300");
  const brand = useColorModeValue("brand.500", "brand.300");
  const header = useColorModeValue(
    "rgba(226,232,240, 0.8)",
    "rgba(0,0,0, 0.7)"
  );
  const headerWhite = useColorModeValue(
    "rgba(0,0,0, 0.7)",
    "rgba(226,232,240, 0.8)"
  );
  const toggle = useColorModeValue("white", "gray.500");
  const shadow = useColorModeValue(
    "1px 1px 3px 0px rgba(0,0,0,0.2)",
    "1px 1px 3px 0px rgba(0,0,0,0.5)"
  );
  const heart = useColorModeValue("#F50407", "white");
  const transparent = useColorModeValue(
    "rgba(255,255,255, .7)",
    "rgba(0,0,0,.7)"
  );
  const highlight = useColorModeValue("gray.200", "#222B36");

  const value = {
    bg,
    softBg,
    secondaryBgHex,
    red,
    revText,
    green,
    brand,
    header,
    toggle,
    shadow,
    heart,
    transparent,
    NFTCardColor,
    headerWhite,
    highlight,
    footer,
  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

function useColor() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useColor must be used within a ColorProvider");
  }
  return context;
}

export { ColorProvider, useColor };
