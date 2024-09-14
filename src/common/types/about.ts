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