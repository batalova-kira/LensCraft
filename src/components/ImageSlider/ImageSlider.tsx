import { useState } from "react";
import { FC } from "react";
import {
    ArrowBtnsContainer,
    ArrowButton,
    ExpandButton,
    ExtraImage,
    ExtraImagesContainer,
    ImageContainer,
    ImageText,
    ImageTitle,
    SliderContainer,
} from "./styled";
import { AnimatePresence, motion } from "framer-motion";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import HeroBtn from "../../assets/icons/hero-btn.svg";
import { images } from "./images";


export const ImageSlider: FC = (): JSX.Element => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [isExpanded, setIsExpanded] = useState<boolean>(false);

    // Перехід на попереднє зображення
    const handlePrev = (): void => {
        setCurrentIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
    };

    // Перехід на наступне зображення
    const handleNext = (): void => {
        setCurrentIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
    };

    // Розширення/згортання додаткових зображень
    const toggleExpand = (): void => {
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
            {/* Анімована дата */}
            <AnimatePresence mode="wait">
                <ImageTitle
                    key={images[currentIndex].srcWebpX1}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -50 }}
                    transition={{
                        duration: 0.5, 
                        ease: [0.25, 0.46, 0.45, 0.94], 
                    }}
                >
                    {images[currentIndex].date}
                </ImageTitle>
            </AnimatePresence>
            {/* Анімований заголовок */}
            <AnimatePresence mode="wait">
                <ImageText
                    key={images[currentIndex].srcWebpX1}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -50 }}
                    transition={{
                        duration: 0.5, 
                        ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                >
                    {images[currentIndex].shoot}
                </ImageText>
            </AnimatePresence>

            {/* Анімоване зображення */}
            <ImageContainer $isExpanded={isExpanded}>
                <AnimatePresence mode="wait">
                    <motion.picture
                        key={images[currentIndex].srcWebpX1}
                        initial={{ x: 300, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: -300, opacity: 0 }}
                        transition={{
                            duration: 0.5, 
                            ease: [0.25, 0.46, 0.45, 0.94], 
                        }}
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
                            alt={images[currentIndex].shoot}
                            style={{
                                width: "100%",
                                height: "auto",
                                objectFit: "cover",
                            }}
                        />
                    </motion.picture>
                </AnimatePresence>

                <ExpandButton onClick={toggleExpand} $isExpanded={isExpanded}>
                    {isExpanded ? "Hide Photos" : <HeroBtn />}
                </ExpandButton>
            </ImageContainer>

            {/* Додаткові зображення */}
            {isExpanded && (
                <ExtraImagesContainer
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
            >
                {images
                    .filter((_, index) => index !== currentIndex) // Фільтруємо масив зображень, виключаючи поточне
                    .map((image, index) => (
                        <ExtraImage
                            key={index}
                            src={image.srcWebpX1}
                            alt={image.shoot}
                        />
                    ))}
            </ExtraImagesContainer>
            )}
        </SliderContainer>
    );
};
