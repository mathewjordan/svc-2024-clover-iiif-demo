import { useDemo } from "@/context/demo-context";

const { Flex, Switch, Text } = require("@radix-ui/themes");

const SelectFont = () => {
  const {
    dispatch,
    state: { font },
  } = useDemo();

  const handleValueChange = (value) =>
    dispatch({
      type: "SET_FONT",
      payload: value ? "sans-serif" : "serif",
    });

  return (
    <Text as="label" size="2">
      <Flex gap="2">
        <Switch size="3" onCheckedChange={handleValueChange} defaultChecked />
        Sans-serif
      </Flex>
    </Text>
  );
};

export default SelectFont;
