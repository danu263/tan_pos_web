//Default material ui font-sizes: https://mui.com/material-ui/react-typography/#component
import { Theme } from "@mui/material";
import { TypographyOptions } from "@mui/material/styles/createTypography";

export const createCustomTypography = (theme: Theme): TypographyOptions => ({
  fontFamily: '"Ubuntu", sans-serif',
  h1: {
    fontSize: "48px",
    fontWeight: 400,
    color: theme.palette.text.primary,
  },
  h2: {
    fontSize: "32px",
    fontWeight: 400,
    color: theme.palette.text.primary,
  },
  h3: {
    fontSize: "24px",
    fontWeight: 400,
    color: theme.palette.text.primary,
  },
  h4: {
    fontSize: "22px",
    fontWeight: 400,
    color: theme.palette.text.primary,
  },
  h5: {
    fontSize: "20px",
    fontWeight: 400,
    color: theme.palette.text.primary,
  },
  h6: {
    fontSize: "18px",
    fontWeight: 400,
    color: theme.palette.text.primary,
  },
  subtitle1: {
    fontSize: "16px",
    fontWeight: 700,
    color: theme.palette.text.primary,
  },
  subtitle2: {
    fontSize: "14px",
    fontWeight: 700,
    color: theme.palette.text.primary,
  },
  body1: {
    fontSize: "16px",
    color: theme.palette.text.primary,
  },
  body2: {
    fontSize: "14px",
    color: theme.palette.text.primary,
    lineHeight: "1.78571",
  },
  button: {
    fontSize: "14px",
    fontWeight: 400,
    color: theme.palette.text.primary,
  },
  caption: {
    fontSize: "12px",
    fontWeight: 400,
    color: theme.palette.text.primary,
  },
  overline: {
    fontSize: "12px",
    fontWeight: 400,
    color: theme.palette.text.primary,
  },
});
