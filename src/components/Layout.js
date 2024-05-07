import Header from "@/components/Header";

const Layout = ({ appearance, children }) => {
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

  return (
    <>
      <style jsx global>{`
        * {
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
      `}</style>
      <Header />
      <main style={{ marginTop: "64px" }}>{children}</main>
    </>
  );
};

export default Layout;
