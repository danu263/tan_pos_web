import { Link, Outlet, redirect, useNavigate } from "react-router-dom";
import { useState } from "react";

export const Test2 = () => {
  const navigate = useNavigate();
  const [buttonClicked, setButtonClicked] = useState(0);

  const onClick = (buttonKey: number, url: string) => {
    setButtonClicked(buttonKey);
    redirect(url);
  };

  const wasPressed = (buttonKey: number) => {
    return buttonKey === buttonClicked ? "green" : "red";
  };

  return (
    <>
      <button
        style={{ backgroundColor: wasPressed(1) }}
        onClick={() => onClick(1, "/pos")}
      >
        1
      </button>
      <button
        style={{ backgroundColor: wasPressed(2) }}
        onClick={() => onClick(2, "/members")}
      >
        2
      </button>
      <button
        style={{ backgroundColor: wasPressed(3) }}
        onClick={() => onClick(3, "/dispatch")}
      >
        3
      </button>
      <Link onClick={() => setButtonClicked(1)} to={"/pos"}>
        POS
      </Link>
      <Link onClick={() => setButtonClicked(2)} to={"/members"}>
        Members
      </Link>
      <Link onClick={() => setButtonClicked(3)} to={"/dispatch"}>
        Dispatch
      </Link>
      <h1>Test2222</h1>
      <Outlet />
    </>
  );
};
