import { IGalleryAboutImage } from "../../common/types/about";
import image1_mob_x1_webp from "../../assets/about/about_img1_mob_x1.webp";
import image1_mob_x2_webp from "../../assets/about/about_img1_mob_x2.webp";
import image1_desk_x1_webp from "../../assets/about/about_img1_desk_x1.webp";
import image1_desk_x2_webp from "../../assets/about/about_img1_desk_x2.webp";
import image1_jpeg from "../../assets/about/about_img1.jpg";
import image2_mob_x1_webp from "../../assets/about/about_img2_mob_x1.webp";
import image2_mob_x2_webp from "../../assets/about/about_img2_mob_x2.webp";
import image2_desk_x1_webp from "../../assets/about/about_img2_desk_x1.webp";
import image2_desk_x2_webp from "../../assets/about/about_img2_desk_x2.webp";
import image2_jpeg from "../../assets/about/about_img2_desk_x2.jpg";
import image3_mob_x1_webp from "../../assets/about/about_img3_mob_x1.webp";
import image3_mob_x2_webp from "../../assets/about/about_img3_mob_x2.webp";
import image3_desk_x1_webp from "../../assets/about/about_img3_desk_x1.webp";
import image3_desk_x2_webp from "../../assets/about/about_img3_desk_x2.webp";
import image3_jpeg from "../../assets/about/about_img3_desk_x2.jpg";
import image4_mob_x1_webp from "../../assets/about/about_img4_mob_x1.webp";
import image4_mob_x2_webp from "../../assets/about/about_img4_mob_x2.webp";
import image4_desk_x1_webp from "../../assets/about/about_img4_desk_x1.webp";
import image4_desk_x2_webp from "../../assets/about/about_img4_desk_x2.webp";
import image4_jpeg from "../../assets/about/about_img4_desk_x2.jpg";
import image5_mob_x1_webp from "../../assets/about/about_img5_mob_x1.webp";
import image5_mob_x2_webp from "../../assets/about/about_img5_mob_x2.webp";
import image5_desk_x1_webp from "../../assets/about/about_img5_desk_x1.webp";
import image5_desk_x2_webp from "../../assets/about/about_img5_desk_x2.webp";
import image5_jpeg from "../../assets/about/about_img5_desk_x2.jpg";
import image6_mob_x1_webp from "../../assets/about/about_img6_mob_x1.webp";
import image6_mob_x2_webp from "../../assets/about/about_img6_mob_x2.webp";
import image6_desk_x1_webp from "../../assets/about/about_img6_desk_x1.webp";
import image6_desk_x2_webp from "../../assets/about/about_img6_desk_x2.webp";
import image6_jpeg from "../../assets/about/about_img6_desk_x2.jpg";

export const imagesAboutGallery:IGalleryAboutImage[] = [
    {
        mobile: {
          x1: image1_mob_x1_webp,
          x2: image1_mob_x2_webp
        },
        desktop: {
          x1: image1_desk_x1_webp,
          x2: image1_desk_x2_webp
        },
        fallback: image1_jpeg,
        alt: "The Bride"
      },
      {
        mobile: {
          x1: image2_mob_x1_webp,
          x2: image2_mob_x2_webp
        },
        desktop: {
          x1: image2_desk_x1_webp,
          x2: image2_desk_x2_webp
        },
        fallback: image2_jpeg,
        alt: "The groom and the cat"
      },
      {
        mobile: {
          x1: image3_mob_x1_webp,
          x2: image3_mob_x2_webp
        },
        desktop: {
          x1: image3_desk_x1_webp,
          x2: image3_desk_x2_webp
        },
        fallback: image3_jpeg,
        alt: "Dancing with the bride"
      },
      {
        mobile: {
          x1: image4_mob_x1_webp,
          x2: image4_mob_x2_webp
        },
        desktop: {
          x1: image4_desk_x1_webp,
          x2: image4_desk_x2_webp
        },
        fallback: image4_jpeg,
        alt:"A glass of alcohol",
      },
      {
        mobile: {
          x1: image5_mob_x1_webp,
          x2: image5_mob_x2_webp
        },
        desktop: {
          x1: image5_desk_x1_webp,
          x2: image5_desk_x2_webp
        },
        fallback: image5_jpeg,
        alt:"A night road",
      },
      {
        mobile: {
          x1: image6_mob_x1_webp,
          x2: image6_mob_x2_webp
        },
        desktop: {
          x1: image6_desk_x1_webp,
          x2: image6_desk_x2_webp
        },
        fallback: image6_jpeg,
        alt:"The smiling girl",
      },
  ];
  