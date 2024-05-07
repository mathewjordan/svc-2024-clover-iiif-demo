import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import dynamic from "next/dynamic";

const Slider = dynamic(
  () => import("@samvera/clover-iiif").then((Clover) => Clover.Slider),
  {
    ssr: false,
  }
);

const CloverSlider = (props) => <Slider {...props} />;

export default CloverSlider;
