import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import dynamic from "next/dynamic";

const Scroll = dynamic(
  () => import("@samvera/clover-iiif").then((Clover) => Clover.Scroll),
  {
    ssr: false,
  }
);

const CloverScroll = (props) => (
  <Scroll
    {...props}
    options={{
      offset: 100,
    }}
  />
);

export default CloverScroll;
