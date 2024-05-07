import {
  Box,
  Button,
  ChevronDownIcon,
  Flex,
  Heading,
  IconButton,
  Popover,
  RadioCards,
  Text,
  TextField,
} from "@radix-ui/themes";
import { useRef, useState } from "react";

import { ArrowRightIcon } from "@radix-ui/react-icons";
import items from "@/lib/constants/items";
import { useDemo } from "@/context/demo-context";

const SelectManifest = () => {
  const [customManifest, setCustomManifest] = useState(false);
  const { state, dispatch } = useDemo();
  const { manifest } = state;

  const inputRef = useRef();

  const handleValueChange = (value) => {
    if (value !== "custom") {
      setCustomManifest(false);
      dispatch({ type: "SET_MANIFEST", payload: value });
    } else {
      setCustomManifest(true);
      setTimeout(() => inputRef?.current?.focus(), 10);
    }
  };

  const handleCustomManifest = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const value = inputRef?.current?.value;
    const isUrl = new URL(value);
    if (isUrl) dispatch({ type: "SET_MANIFEST", payload: value });
  };

  return (
    <Popover.Root>
      <Popover.Trigger>
        <Button>
          Collection <ChevronDownIcon />
        </Button>
      </Popover.Trigger>
      <Popover.Content>
        <Flex justify="center" align="center" direction="column" gap="4">
          <Box>
            <RadioCards.Root
              size="2"
              value={customManifest ? "custom" : manifest}
              onValueChange={handleValueChange}
              columns="1"
            >
              {items.map((item, index) => {
                return (
                  <RadioCards.Item key={index} value={item.id}>
                    <Flex gap="3" justify="start" width="100%">
                      <img
                        src={item?.thumbnail}
                        style={{
                          objectFit: "cover",
                          borderRadius: "var(--radius-3)",
                          boxShadow: "var(--shadow-2)",
                          flexGrow: 0,
                          flexShrink: 1,
                        }}
                        width="60px"
                        height="60px"
                      />
                      <Flex
                        p="1"
                        direction="column"
                        gap="1"
                        align="start"
                        flexGrow="1"
                      >
                        <Heading weight="bold" size="4">
                          {item.label}
                        </Heading>
                        <Text color="gray">{item.summary}</Text>
                      </Flex>
                    </Flex>
                  </RadioCards.Item>
                );
              })}
            </RadioCards.Root>
          </Box>

          <Box
            align="center"
            width="100%"
            style={{
              display: customManifest ? "block" : "none",
            }}
          >
            <form onSubmit={handleCustomManifest}>
              <TextField.Root
                id="custom-manifest"
                placeholder="IIIF Manifest URL"
                variant="soft"
                name="clover-iiif-demo-custom-manifest"
                size="3"
                ref={inputRef}
              >
                <TextField.Slot as={TextField.Input} pl="0" />
                <TextField.Slot pr="1">
                  <IconButton size="2" type="submit">
                    <ArrowRightIcon />
                  </IconButton>
                </TextField.Slot>
              </TextField.Root>
            </form>
          </Box>
        </Flex>
      </Popover.Content>
    </Popover.Root>
  );
};

export default SelectManifest;
