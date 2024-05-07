import { Box, Flex, Heading } from "@radix-ui/themes";

import SelectAppearance from "./SelectAppearance";
import SelectColor from "./SelectColor";
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
          background:
            appearance === "dark"
              ? "linear-gradient(93deg, var(--accent-3), var(--accent-1))"
              : "linear-gradient(93deg, var(--accent-11), var(--accent-12))",
          boxShadow: "var(--shadow-4)",
        }}
      >
        <Flex asChild justify="between" align="center">
          <header>
            <Heading
              style={{
                color:
                  appearance === "dark"
                    ? "var(--accent-12)"
                    : "var(--accent-1)",
              }}
              weight="medium"
              size="3"
            >
              Clover IIIF Demo
            </Heading>
            <Flex gap="3">
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
