import { FC } from "react";
import { imagesAboutGallery } from "./imagesAboutGallery";
import { breakpoints } from "../../constants/breakpoints";
import { AboutGalleryWrapper, AboutPictureWrapper } from "./styled";
import { IAboutGalleryProps } from "../../common/types/about";

export const AboutGallery: FC<IAboutGalleryProps> = ({ setBackgroundImage }): JSX.Element => (
    <AboutGalleryWrapper > 
    {imagesAboutGallery.map((image, index) => (
      <picture key={index}>
        {/* Мобільна версія - WebP */}
        <source 
          srcSet={`${image.mobile.x1} 1x, ${image.mobile.x2} 2x`} 
          type="image/webp" 
          media="(max-width: 768px)" 
        />
        
        {/* Десктопна версія - WebP */}
        <source 
          srcSet={`${image.desktop.x1} 1x, ${image.desktop.x2} 2x`} 
          type="image/webp" 
          media={`(max-width: ${breakpoints.medium})`} 
        />
        
        {/* Fallback зображення */}
        <AboutPictureWrapper src={image.fallback} alt={image.alt} onClick={() => setBackgroundImage(image.fallback)}/>
      </picture>
    ))}
  </AboutGalleryWrapper>
  );