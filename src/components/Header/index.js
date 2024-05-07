import { Box, Flex, Heading } from "@radix-ui/themes";

import SelectAppearance from "./SelectAppearance";
import SelectColor from "./SelectColor";
import SelectFont from "./SelectFont";
import SelectManifest from "./SelectManifest";
import { useDemo } from "@/context/demo-context";

const Header = () => {
  const { state } = useDemo();
  const { appearance } = state;

  return (
    <>
      <Box
        p="4"
        position="fixed"
        style={{
          zIndex: 10,
          top: 0,
          width: "100%",
          backgroundColor: `var(--gray-1)`,
          boxShadow: "var(--shadow-4)",
        }}
      >
        <Flex asChild justify="between" align="center">
          <header>
            <Heading size="5">Clover IIIF Demo</Heading>
            <Flex gap="4" align="center">
              <SelectFont />
              <SelectAppearance />
              <SelectColor />
              <SelectManifest />
            </Flex>
          </header>
        </Flex>
      </Box>
    </>
  );
};

export default Header;
