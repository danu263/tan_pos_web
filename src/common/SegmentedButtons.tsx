import {
  styled,
  ToggleButton as MuiToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import { MouseEvent, useEffect, useRef, useState } from "react";

export const SegmentedButtons = ({ labels }: { labels: string[] }) => {
  const [alignment, setAlignment] = useState("web");
  const toggleRef = useRef<HTMLButtonElement>(null);
  const [togglesWidth, setTogglesWidth] = useState(0);
  const longestWord = getLongestWord(labels);
  const handleChange = (
    _event: MouseEvent<HTMLElement>,
    newAlignment: string,
  ) => {
    setAlignment(newAlignment);
  };

  useEffect(() => {
    if (toggleRef.current) {
      setTogglesWidth(toggleRef.current.clientWidth + 36);
    }
  }, []);
  return (
    <>
      <ToggleButtonGroup
        color="primary"
        value={alignment}
        exclusive
        onChange={handleChange}
        aria-label="Platform"
      >
        {labels.map((label) => {
          if (label === longestWord && togglesWidth === 0) {
            return (
              <ToggleButton
                width={togglesWidth}
                ref={toggleRef}
                key={label}
                value={label}
              >
                {label}
              </ToggleButton>
            );
          } else {
            return (
              <ToggleButton width={togglesWidth} key={label} value={label}>
                {label}
              </ToggleButton>
            );
          }
        })}
      </ToggleButtonGroup>
    </>
  );
};
const getLongestWord = (words: string[]): string => {
  return words.reduce((longest, current) => {
    return current.length > longest.length ? current : longest;
  }, "");
};
interface Props {
  width: number;
}

const ToggleButton = styled(MuiToggleButton, {
  shouldForwardProp: (prop) => prop !== "open",
})<Props>(({ theme, width }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  borderRadius: 20,
  border: "1px solid",
  color: theme.palette.default.main,
  borderColor: theme.palette.default.outline,
  height: 40,
  textTransform: "none",
  "&.Mui-selected": {
    color: theme.palette.secondary.onContainer,
    backgroundColor: theme.palette.secondary.container,
    borderColor: theme.palette.default.outline,
  },
  ...(width > 0 && {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    width: width,
  }),
}));
