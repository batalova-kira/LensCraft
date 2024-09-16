import { IGalleryAboutImage } from "../../common/types/about";

import image1_x1_webp from "../../assets/about/about_img1_desk_x1.webp";
import image1_x2_webp from "../../assets/about/about_img1_desk_x2.webp";
import image1_jpeg from "../../assets/about/about_img1.jpg";
import image2_x1_webp from "../../assets/about/about_img2_x1.webp";
import image2_x2_webp from "../../assets/about/about_img2_x1.webp";
import image2_jpeg from "../../assets/about/about_img2_x3.jpg";
import image3_x1_webp from "../../assets/about/about_img3_x1.webp";
import image3_x2_webp from "../../assets/about/about_img3_x1.webp";
import image3_jpeg from "../../assets/about/about_img3_x3.jpg";
import image4_x1_webp from "../../assets/about/about_img4_x1.webp";
import image4_x2_webp from "../../assets/about/about_img4_x1.webp";
import image4_jpeg from "../../assets/about/about_img4_x3.jpg";
import image5_x1_webp from "../../assets/about/about_img5_x1.webp";
import image5_x2_webp from "../../assets/about/about_img5_x1.webp";
import image5_jpeg from "../../assets/about/about_img5_x3.jpg";
import image6_x1_webp from "../../assets/about/about_img6_x1.webp";
import image6_x2_webp from "../../assets/about/about_img6_x1.webp";
import image6_jpeg from "../../assets/about/about_img6_x3.jpg";

export const imagesAboutGallery:IGalleryAboutImage[] = [
    {
        desktop: {
          x1: image1_x1_webp,
          x2: image1_x2_webp
        },
        fallback: image1_jpeg,
        alt: "The Bride"
      },
      {
        desktop: {
          x1: image2_x1_webp,
          x2: image2_x2_webp
        },
        fallback: image2_jpeg,
        alt: "The man"
      },
      {
        desktop: {
          x1: image3_x1_webp,
          x2: image3_x2_webp
        },
        fallback: image3_jpeg,
        alt: "The man"
      },
      {
        desktop: {
          x1: image4_x1_webp,
          x2: image4_x2_webp
        },
        fallback: image4_jpeg,
        alt: "The man"
      },
      {
        desktop: {
          x1: image5_x1_webp,
          x2: image5_x2_webp
        },
        fallback: image5_jpeg,
        alt: "The man"
      },
      {
        desktop: {
          x1: image6_x1_webp,
          x2: image6_x2_webp
        },
        fallback: image6_jpeg,
        alt: "The man"
      },
  ];
  