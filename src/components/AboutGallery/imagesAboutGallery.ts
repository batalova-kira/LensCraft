import { IGalleryAboutImage } from "../../common/types/about";
import image1_mob_x1_webp from "../../assets/about/about_img1_mob_x1.webp";
import image1_mob_x2_webp from "../../assets/about/about_img1_mob_x2.webp";
import image1_desk_x1_webp from "../../assets/about/about_img1_desk_x1.webp";
import image1_desk_x2_webp from "../../assets/about/about_img1_desk_x2.webp";
import image1_jpeg from "../../assets/about/about_img1_desk_x2.jpg";

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
        alt: "Image 1"
      },
  ];
  