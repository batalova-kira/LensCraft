import { ISliderImage } from "../../common/types/slider";
import image1_x1_webp from "../../assets/hero/hero1_desk_x1.webp";
import image1_x1_jpeg from "../../assets/hero/hero1_desk_x1.jpg";
import image1_x2_webp from "../../assets/hero/hero1_desk_x2.webp";
import image1_x2_jpeg from "../../assets/hero/hero1_desk_x2.jpg";
import image2_x1_webp from "../../assets/hero/hero2_desk_x1.webp";
import image2_x1_jpeg from "../../assets/hero/hero2_desk_x1.jpg";
import image2_x2_webp from "../../assets/hero/hero2_desk_x2.webp";
import image2_x2_jpeg from "../../assets/hero/hero2_desk_x2.jpg";
import image3_x1_webp from "../../assets/hero/hero3_desk_x1.webp";
import image3_x1_jpeg from "../../assets/hero/hero3_desk_x1.jpg";
import image3_x2_webp from "../../assets/hero/hero3_desk_x2.webp";
import image3_x2_jpeg from "../../assets/hero/hero3_desk_x2.jpg";
import image4_x1_webp from "../../assets/hero/hero4_desk_x1.webp";
import image4_x1_jpeg from "../../assets/hero/hero4_desk_x1.jpg";
import image4_x2_webp from "../../assets/hero/hero4_desk_x2.webp";
import image4_x2_jpeg from "../../assets/hero/hero4_desk_x2.jpg";

// Масив зображень для слайдеру в герої
export const images: ISliderImage[] = [
    {
        srcWebpX1: image1_x1_webp,
        srcWebpX2: image1_x2_webp,
        srcJpegX1: image1_x1_jpeg,
        srcJpegX2: image1_x2_jpeg,
        shoot: "MANISH & RASHEEDAT",
        date: "September 19, 2023",
    },
    {
        srcWebpX1: image2_x1_webp,
        srcWebpX2: image2_x2_webp,
        srcJpegX1: image2_x1_jpeg,
        srcJpegX2: image2_x2_jpeg,
        shoot: "WEDDING PHOTOSHOOT",
        date: "October 01, 2021",
    },
    {
        srcWebpX1: image3_x1_webp,
        srcWebpX2: image3_x2_webp,
        srcJpegX1: image3_x1_jpeg,
        srcJpegX2: image3_x2_jpeg,
        shoot: "NANCY`S  PARTY SHOOT",
        date: "April 24, 2022",
    },
    {
        srcWebpX1: image4_x1_webp,
        srcWebpX2: image4_x2_webp,
        srcJpegX1: image4_x1_jpeg,
        srcJpegX2: image4_x2_jpeg,
        shoot: "KAMASI PHOTOSHOOT",
        date: "January 07, 2023",
    },
];