import Header from "@/components/Header";

const Layout = ({ appearance, font, children }) => {
  const colors =
    appearance === "dark"
      ? {
          accent: "var(--accent-9)",
          accentAlt: "var(--accent-a3)",
          primary: "var(--gray-1)",
          secondary: "var(--gray-12)",
        }
      : {
          accent: "var(--accent-11)",
          accentAlt: "var(--accent-a12)",
          primary: "var(--gray-12)",
          secondary: "var(--gray-1)",
        };

  console.log(font);

  const fontFamily =
    font === "sans-serif"
      ? `-apple-system, BlinkMacSystemFont, "Segoe UI (Custom)", Roboto, "Helvetica Neue", sans-serif`
      : "Times, Garamond, serif";

  return (
    <>
      <style jsx global>{`
        * {
          font-family: ${fontFamily};

          --colors-accent: ${colors.accent};
          --colors-accentAlt: ${colors.accentAlt};
          --colors-accentMuted: ${colors.accent};
          --colors-primary: ${colors.primary};
          --colors-primaryAlt: ${colors.primary};
          --colors-primaryMuted: ${colors.primary};
          --colors-secondary: ${colors.secondary};
          --colors-secondaryAlt: ${colors.secondary};
          --colors-secondaryMuted: ${colors.secondary};
        }

        .radix-themes {
          --default-font-family: ${fontFamily};
          --heading-font-family: ${fontFamily};
          --code-font-family: ${fontFamily};
          --strong-font-family: ${fontFamily};
          --em-font-family: ${fontFamily};
          --quote-font-family: ${fontFamily};
        }
      `}</style>
      <Header />
      <main style={{ marginTop: "64px" }}>{children}</main>
    </>
  );
};

export default Layout;
