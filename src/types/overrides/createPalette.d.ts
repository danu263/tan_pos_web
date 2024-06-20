import type {} from "@mui/material/styles";

declare module "@mui/material/styles" {
  // interface PaletteColor {
  //   darker?: string;
  // }

  interface SimplePaletteColorOptions {
    container?: string;
    onContainer?: string;
  }

  interface Palette {
    default: SimplePaletteColorOptions;
    tertiary: SimplePaletteColorOptions;
    successIcon: SimplePaletteColorOptions;
    errorIcon: SimplePaletteColorOptions;
    neutral: Partial<MaterialColor>;
    neutralVariant: Partial<MaterialColor>;
  }
  interface PaletteOptions {
    default: SimplePaletteColorOptions;
    tertiary: SimplePaletteColorOptions;
    successIcon: SimplePaletteColorOptions;
    errorIcon: SimplePaletteColorOptions;
    neutral: Partial<MaterialColor>;
    neutralVariant: Partial<MaterialColor>;
  }
}

interface MaterialColor {
  0: string;
  10: string;
  20: string;
  30: string;
  40: string;
  50: string;
  60: string;
  70: string;
  80: string;
  90: string;
  95: string;
  99: string;
  100: string;
}
