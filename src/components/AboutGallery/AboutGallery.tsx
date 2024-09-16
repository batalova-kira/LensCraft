import { FC } from "react";
import { imagesAboutGallery } from "./imagesAboutGallery";
import { AboutGalleryWrapper, AboutPictureWrapper } from "./styled";
import { IAboutGalleryProps } from "../../common/types/about";

export const AboutGallery: FC<IAboutGalleryProps> = ({ setBackgroundImage, selectedCard, setSelectedCard }): JSX.Element => (
  <AboutGalleryWrapper>
    {imagesAboutGallery.map((image, index) => (
      <AboutPictureWrapper
        key={index}
        onClick={() => {
          setBackgroundImage(image.fallback);
          setSelectedCard(index); // Встановлюємо вибрану картку
        }}
        $isSelected={selectedCard === index} // Додаємо проп для визначення вибраної картки
      >
        <picture>
          {/* WebP версія */}
          <source 
            srcSet={`${image.desktop.x1} 1x, ${image.desktop.x2} 2x`} 
            type="image/webp" 
          />

          {/* Fallback зображення */}
          <img src={image.fallback} alt={image.alt} />
        </picture>
      </AboutPictureWrapper>
    ))}
  </AboutGalleryWrapper>
);