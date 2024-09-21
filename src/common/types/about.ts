import { Dispatch, SetStateAction } from "react";

interface IImageSource {
    x1: string;
    x2: string;
}

export interface IGalleryAboutImage {
    desktop: IImageSource;
    fallback: string;
    alt: string;
}

export interface IGridBackgroundProps {
    $backgroundImage: string;
}

export interface IAboutGalleryProps {
    selectedCard: number | null;
    setSelectedCard: Dispatch<SetStateAction<number | null>>;
    setBackgroundImage: Dispatch<SetStateAction<string>>;
}
