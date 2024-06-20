import { Palette } from "./palette.tsx";
import { createTheme, Theme, ThemeOptions, ThemeProvider } from "@mui/material";
import { createCustomTypography } from "./typography.tsx";
import { TypographyOptions } from "@mui/material/styles/createTypography";

interface IThemeCustomization {
  children: React.ReactNode;
}

export const ThemeCustomization = ({ children }: IThemeCustomization) => {
  const theme: Theme = Palette();
  const typography: TypographyOptions = createCustomTypography(theme);

  const themeOptions: ThemeOptions = {
    typography: typography,
    palette: theme.palette,
    // customShadows: customShadows,
    // borderRadius: borderRadius,
  };

  const themes: Theme = createTheme(themeOptions);
  // themes.overrides = componentStyleOverrides(themes)

  return <ThemeProvider theme={themes}>{children}</ThemeProvider>;
};
