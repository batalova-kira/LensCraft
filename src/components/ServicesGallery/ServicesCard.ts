import { ICardServices } from "../../common/types/services";
import image1_x1 from "../../assets/services/services_img1_mob_x1.webp";
import image1_x2 from "../../assets/services/services_img1_mob_x2.webp";
import image1_x1_desk from "../../assets/services/services_img1_desk_x1.webp";
import image1_x2_desk from "../../assets/services/services_img1_desk_x2.webp";
import image1_jpeg from "../../assets/services/services_img1_desk_x2.jpg";
import image2_x1 from "../../assets/services/services_img2_mob_x1.webp";
import image2_x2 from "../../assets/services/services_img2_mob_x2.webp";
import image2_x1_desk from "../../assets/services/services_img2_desk_x1.webp";
import image2_x2_desk from "../../assets/services/services_img2_desk_x2.webp";
import image2_jpeg from "../../assets/services/services_img2_desk_x2.jpg";
import image3_x1 from "../../assets/services/services_img3_mob_x1.webp";
import image3_x2 from "../../assets/services/services_img3_mob_x2.webp";
import image3_x1_desk from "../../assets/services/services_img3_desk_x1.webp";
import image3_x2_desk from "../../assets/services/services_img3_desk_x2.webp";
import image3_jpeg from "../../assets/services/services_img3_desk_x2.jpg";
import image4_x1 from "../../assets/services/services_img4_mob_x1.webp";
import image4_x2 from "../../assets/services/services_img4_mob_x2.webp";
import image4_x1_desk from "../../assets/services/services_img4_desk_x1.webp";
import image4_x2_desk from "../../assets/services/services_img4_desk_x2.webp";
import image4_jpeg from "../../assets/services/services_img4_desk_x2.jpg";

export const cardsServices: ICardServices[] = [
    {
        id: 1,
        title: "01 STUDIO SHOOT",
        imageUrl_x1: image1_x1,
        imageUrl_x2: image1_x2,
        imageUrl_x1_desk: image1_x1_desk,
        imageUrl_x2_desk: image1_x2_desk,
        imageUrl_jpeg: image1_jpeg,
    },
    {
        id: 2,
        title: "02 PHOTOGRAPHY SHOOT",
        imageUrl_x1: image2_x1,
        imageUrl_x2: image2_x2,
        imageUrl_x1_desk: image2_x1_desk,
        imageUrl_x2_desk: image2_x2_desk,
        imageUrl_jpeg: image2_jpeg,
    },
    {
        id: 3,
        title: "03 BIRTHDAY SHOOT",
        imageUrl_x1: image3_x1,
        imageUrl_x2: image3_x2,
        imageUrl_x1_desk: image3_x1_desk,
        imageUrl_x2_desk: image3_x2_desk,
        imageUrl_jpeg: image3_jpeg,
    },
    {
        id: 4,
        title: "04 OUTDOOR SHOOT",
        imageUrl_x1: image4_x1,
        imageUrl_x2: image4_x2,
        imageUrl_x1_desk: image4_x1_desk,
        imageUrl_x2_desk: image4_x2_desk,
        imageUrl_jpeg: image4_jpeg,
    },
];
