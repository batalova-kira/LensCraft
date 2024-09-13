import { useState } from "react";
import { FC } from "react";
import {
    ArrowBtnsContainer,
    ArrowButton,
    ExpandButton,
    ExtraImage,
    ExtraImagesContainer,
    ImageContainer,
    SliderContainer,
} from "./styled";
import { AnimatePresence, motion } from "framer-motion";
import { ISliderImage } from "../../common/types/slider";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import HeroBtn from "../../assets/icons/hero-btn.svg";

import image1_x1_webp from "../../assets/hero/hero1_desk_x1.webp";
import image1_x1_jpeg from "../../assets/hero/hero1_desk_x1.jpg";
import image1_x2_webp from "../../assets/hero/hero1_desk_x2.webp";
import image1_x2_jpeg from "../../assets/hero/hero1_desk_x2.jpg";
// Масив зображень
const images: ISliderImage[] = [
    {
        srcWebpX1: image1_x1_webp,
        srcWebpX2: image1_x2_webp,
        srcJpegX1: image1_x1_jpeg,
        srcJpegX2: image1_x2_jpeg,
        photographer: "Photographer 1",
    },
    // {
    //     src: "https://images.pexels.com/photos/2253870/pexels-photo-2253870.jpeg",
    //     photographer: "Photographer 2",
    // },
    // {
    //     src: "https://images.pexels.com/photos/28317298/pexels-photo-28317298.jpeg",
    //     photographer: "Photographer 3",
    // },
    // {
    //     src: "https://images.pexels.com/photos/28225711/pexels-photo-28225711.jpeg",
    //     photographer: "Photographer 4",
    // },
    // {
    //     src: "https://images.pexels.com/photos/4943484/pexels-photo-4943484.jpeg",
    //     photographer: "Photographer 5",
    // },
    // {
    //     src: "https://images.pexels.com/photos/4060469/pexels-photo-4060469.jpeg",
    //     photographer: "Photographer 6",
    // },
];

// Компонент ImageSlider
export const ImageSlider: FC = (): JSX.Element => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [isExpanded, setIsExpanded] = useState<boolean>(false);

    // Перехід на попереднє зображення
    const handlePrev = () => {
        setCurrentIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
    };

    // Перехід на наступне зображення
    const handleNext = () => {
        setCurrentIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
    };

    // Розширення/згортання додаткових зображень
    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <SliderContainer>
            {/* Стрілки перемикання */}
            <ArrowBtnsContainer>
                <ArrowButton onClick={handlePrev}>
                    <IoIosArrowBack />
                </ArrowButton>
                <ArrowButton onClick={handleNext}>
                    <IoIosArrowForward />
                </ArrowButton>
            </ArrowBtnsContainer>

            {/* Анімований заголовок */}
            <AnimatePresence mode="wait">
                <motion.h1
                    key={images[currentIndex].srcWebpX1}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -50 }}
                >
                    {images[currentIndex].photographer}
                </motion.h1>
            </AnimatePresence>

            {/* Анімоване зображення */}
            <ImageContainer>
                <AnimatePresence mode="wait">
                    <motion.picture
                        key={images[currentIndex].srcWebpX1} // Використовуємо srcWebpX1 як ключ
                        initial={{ x: 300, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: -300, opacity: 0 }}
                    >
                        {/* WebP версії зображень */}
                        <source
                            srcSet={`${images[currentIndex].srcWebpX1} 1x, ${images[currentIndex].srcWebpX2} 2x`}
                            type="image/webp"
                        />

                        {/* JPEG версії зображень */}
                        <img
                            srcSet={`${images[currentIndex].srcJpegX1} 1x, ${images[currentIndex].srcJpegX2} 2x`}
                            src={images[currentIndex].srcJpegX1} // fallback для браузерів без srcSet підтримки
                            alt={images[currentIndex].photographer}
                            style={{
                                width: "100%",
                                height: "auto",
                                objectFit: "cover",
                            }}
                        />
                    </motion.picture>
                </AnimatePresence>

                <ExpandButton onClick={toggleExpand} $isExpanded={isExpanded}>
                    {isExpanded ? "Hide Photos" : <HeroBtn  />}
                </ExpandButton>
            </ImageContainer>

            {/* Додаткові зображення */}
            {isExpanded && (
                <ExtraImagesContainer
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                >
                    {images.map((image, index) => (
                        <ExtraImage
                            key={index}
                            src={image.srcWebpX1}
                            alt={image.photographer}
                        />
                    ))}
                </ExtraImagesContainer>
            )}
        </SliderContainer>
    );
};
