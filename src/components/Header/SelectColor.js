import {
  Box,
  Button,
  ChevronDownIcon,
  Flex,
  Popover,
  RadioCards,
  Select,
  Text,
} from "@radix-ui/themes";

import { accentColors } from "@radix-ui/themes/dist/esm/props";
import { capitalize } from "@/lib/helpers";
import { useDemo } from "@/context/demo-context";

const SelectColor = () => {
  const { dispatch, state } = useDemo();
  const { accentColor } = state;

  const handleValueChange = (value) => {
    dispatch({ type: "SET_ACCENT_COLOR", payload: value });
  };

  return (
    <Popover.Root>
      <Popover.Trigger>
        <Button>
          Color <ChevronDownIcon />
        </Button>
      </Popover.Trigger>
      <Popover.Content>
        <Flex justify="center" align="center" direction="column" gap="4">
          <Box>
            <RadioCards.Root
              defaultValue="1"
              size="1"
              onValueChange={handleValueChange}
              columns="4"
            >
              {accentColors.map((color, index) => (
                <RadioCards.Item
                  key={index}
                  value={color}
                  style={
                    color === accentColor
                      ? {
                          backgroundColor: `var(--accent-4)`,
                        }
                      : {}
                  }
                >
                  <Flex width="100%" align="center" gap="2">
                    <Box
                      style={{
                        backgroundColor: `var(--${color}-10)`,
                        borderRadius: "var(--radius-1)",
                        height: "var(--space-4)",
                        width: "var(--space-4)",
                      }}
                    />
                    <Text>{capitalize(color)}</Text>
                  </Flex>
                </RadioCards.Item>
              ))}
            </RadioCards.Root>
          </Box>
        </Flex>
      </Popover.Content>
    </Popover.Root>
  );
};

export default SelectColor;
