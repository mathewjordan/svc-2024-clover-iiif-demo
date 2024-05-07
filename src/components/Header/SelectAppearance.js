import { MoonIcon, SunIcon } from "@radix-ui/react-icons";

import { IconButton } from "@radix-ui/themes";
import { useDemo } from "@/context/demo-context";

const SelectAppearance = () => {
  const { dispatch, state } = useDemo();

  const handleClick = () => {
    const newAppearance = state.appearance === "dark" ? "light" : "dark";
    dispatch({ type: "SET_APPEARANCE", payload: newAppearance });
  };

  return (
    <IconButton onClick={handleClick}>
      {state.appearance === "dark" && <MoonIcon />}
      {state.appearance === "light" && <SunIcon />}
    </IconButton>
  );
};

export default SelectAppearance;
