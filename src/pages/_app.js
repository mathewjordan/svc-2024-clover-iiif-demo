import "@/styles/globals.css";
import "@radix-ui/themes/styles.css";

import { DemoProvider, useDemo } from "@/context/demo-context";

import { Theme } from "@radix-ui/themes";

const RadixUIThemes = ({ children }) => {
  const { state } = useDemo();
  const { accentColor, appearance } = state;

  return (
    <Theme accentColor={accentColor} appearance={appearance}>
      {children}
    </Theme>
  );
};

const DemoApp = ({ Component, pageProps }) => {
  return (
    <DemoProvider>
      <RadixUIThemes>
        <Component {...pageProps} />
      </RadixUIThemes>
    </DemoProvider>
  );
};

export default DemoApp;
