import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { UseCookie } from "../Hooks/UseCookie";

export type Locale = "mn" | "en";

interface I11ContextInterface {
  locale: Locale;
  setLocale: Dispatch<SetStateAction<Locale>>;
}
interface I11ProviderProps {
  children: React.ReactNode;
}

const I11Context = createContext<I11ContextInterface | undefined>(undefined);

function I11Provider({ children }: I11ProviderProps) {
  const { getItem, setItem } = UseCookie({
    name: "locale",
  });
  const [locale, setLocale] = useState<Locale>("en");
  const value = { locale, setLocale };

  useEffect(() => {
    if (getItem()) {
      setLocale(getItem());
    }
  }, []);

  useEffect(() => {
    setItem(locale);
  }, [locale]);

  return <I11Context.Provider value={value}>{children}</I11Context.Provider>;
}

function useI11() {
  const context = useContext(I11Context);
  if (context === undefined) {
    throw new Error("useI11 must be used within a I11Provider");
  }
  return context;
}

export { useI11, I11Provider };
