import { createTheme } from "@mui/material";

export const Palette = () => {
  /**
   * primary, on primary, primary container, on primary container
   * */
  return createTheme({
    palette: {
      default: {
        main: "#1a1c1e", //TAN/TAN Black - on surface
        light: "#43474e", //TAN/TAN Black Alt - on surface variant
      },
      common: {
        white: "#FFFFFF",
        black: "#1a1c1e", //TAN/TAN Black
      },
      primary: {
        main: "#005faf",
        contrastText: "#ffffff",
        container: "#d4e3ff",
        onContainer: "#001c3a",
      },
      secondary: {
        main: "#545f71",
        contrastText: "#ffffff",
        container: "#d8e3f8",
        onContainer: "#111c2b",
      },
      tertiary: {
        main: "#6e5676",
        contrastText: "#ffffff",
        container: "#f7d8ff",
        onContainer: "#27142F",
      },
      successIcon: {
        main: "#1976d2",
        contrastText: "#ffffff",
        container: "#a1f6ad",
        onContainer: "#00210a",
      },
      errorIcon: {
        main: "#ba1a1a",
        contrastText: "#ffffff",
        container: "#ffdad6",
        onContainer: "#410002",
      },
      grey: {
        50: "#f5f7fa", // mono.f5f7fa
        100: "#EEEEEE", // mono.ee
        200: "#DDDDDD", // mono.dd
        300: "#CCCCCC", // mono.cc
        400: "#BBBBBB", // mono.bb
        500: "#999999", // mono.99
        600: "#777777", // mono.77
        700: "#555555", // mono.55
        800: "#333333", // mono.33
        900: "#202020", // mono.20
      },
      text: {
        primary: "#1a1c1e", //brand.black
        secondary: "#005faf", //brand.retailAlt
        disabled: "#1A1C1E61",
      },
      background: {
        paper: "#FFFFFF",
        default: "#FFFFFF",
      },
      // optional
      neutral: {
        0: "#000000",
        10: "#1a1c1e",
        20: "#2f3033",
        30: "#45474a",
        40: "#5d5e61",
        50: "#76777a",
        60: "#909094",
        70: "#aaabae",
        80: "#c6c6c9",
        90: "#e2e2e5",
        95: "#f1f0f4",
        99: "#fcfcff",
        100: "#ffffff",
      },
      neutralVariant: {
        0: "#000000",
        10: "#181c22",
        20: "#2d3037",
        30: "#43474e",
        40: "#5b5e66",
        50: "#74777f",
        60: "#8e9199",
        70: "#a8abb4",
        80: "#c4c6cf",
        90: "#e0e2eb",
        95: "#eef0fa",
        99: "#fdfbff",
        100: "#ffffff",
      },
    },
  });
};
