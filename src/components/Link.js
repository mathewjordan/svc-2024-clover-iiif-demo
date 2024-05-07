import Link from "next/link";
import { Link as RadixThemesLink } from "@radix-ui/themes";

const DemoLink = (props) => {
  return (
    <RadixThemesLink asChild>
      <Link {...props} />
    </RadixThemesLink>
  );
};

export default DemoLink;
