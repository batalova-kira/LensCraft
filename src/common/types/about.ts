import { Dispatch, SetStateAction } from 'react';

interface IImageSource {
  x1: string;
  x2: string;
  }
  
export  interface IGalleryAboutImage {
    mobile: IImageSource;
    desktop: IImageSource;
    fallback: string;
    alt: string;
  }

  export interface IGridBackgroundProps {
    $backgroundImage: string;
  }

  export interface IAboutGalleryProps {
    setBackgroundImage: Dispatch<SetStateAction<string>>;
  }