import { Image } from "@nextui-org/react";
import { isMobile } from "react-device-detect";
import DataIntro from "../../public/data/DataIntro";
import Slider from "./slider";

const Intro = () => {
  return (
    <div className="Intro">
      { isMobile ? 
        <Slider className="SliderMobile" images={DataIntro.items.bannersMobile} css={{paddingTop: "120px"}}></Slider> : 
        <Slider className="SliderMobile" images={DataIntro.items.bannersDesktop} css={{paddingTop: "120px"}}></Slider> }
    </div>
  )
}

const ImageMobile = () => {
  return (
    <Image
      className="ImageMobile"
      containerCss={{paddingTop: "120px"}}
      src="/images/session01/banner1Mobile.png"
      alt="bannerMobile"
      objectFit="fill"
    />
  )
}

const ImageDesktop = () => {
  return (
    <Image
      className="ImageDesktop"
      containerCss={{paddingTop: "120px"}}
      src="/images/session01/banner1.png"
      alt="banner"
      objectFit="fill"
   />
  )
}

export default Intro