import { FC } from "react";

export const AboutGallery: FC = (): JSX.Element => (
    <div > 
      <picture>
        <source srcSet="path-to-image1.webp" type="image/webp" />
        <source srcSet="path-to-image1.jpeg" type="image/jpeg" />
        <img src="path-to-image1.jpeg" alt="Image 1" />
      </picture>
      {/* Друге зображення */}
      <picture>
        <source srcSet="path-to-image2.webp" type="image/webp" />
        <source srcSet="path-to-image2.jpeg" type="image/jpeg" />
        <img src="path-to-image2.jpeg" alt="Image 2" />
      </picture>
  
      {/* Третє зображення */}
      <picture>
        <source srcSet="path-to-image3.webp" type="image/webp" />
        <source srcSet="path-to-image3.jpeg" type="image/jpeg" />
        <img src="path-to-image3.jpeg" alt="Image 3" />
      </picture>
    </div>
  );