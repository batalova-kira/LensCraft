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

// Масив зображень
const images: ISliderImage[] = [
    {
        src: "https://images.pexels.com/photos/1730877/pexels-photo-1730877.jpeg",
        photographer: "Photographer 1",
    },
    {
        src: "https://images.pexels.com/photos/2253870/pexels-photo-2253870.jpeg",
        photographer: "Photographer 2",
    },
    {
        src: "https://images.pexels.com/photos/28317298/pexels-photo-28317298.jpeg",
        photographer: "Photographer 3",
    },
    {
        src: "https://images.pexels.com/photos/28225711/pexels-photo-28225711.jpeg",
        photographer: "Photographer 4",
    },
    {
        src: "https://images.pexels.com/photos/4943484/pexels-photo-4943484.jpeg",
        photographer: "Photographer 5",
    },
    {
        src: "https://images.pexels.com/photos/4060469/pexels-photo-4060469.jpeg",
        photographer: "Photographer 6",
    },
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
                    key={images[currentIndex].src}
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
                    <motion.img
                        key={images[currentIndex].src}
                        src={images[currentIndex].src}
                        alt={images[currentIndex].photographer}
                        initial={{ x: 300, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: -300, opacity: 0 }}
                        style={{
                            width: "100%", // Адаптивна ширина
                            height: "auto", // Висота змінюється пропорційно ширині
                            maxWidth: "1200px", // Максимальна ширина для великих екранів
                            maxHeight: "915px", // Максимальна висота для великих екранів
                            objectFit: "cover", // Обрізка зображення, щоб воно займало всю область
                        }}
                    />
                </AnimatePresence>

                <ExpandButton onClick={toggleExpand}>
                    {isExpanded ? "Hide Photos" : "Show Photos"}
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
                            src={image.src}
                            alt={image.photographer}
                        />
                    ))}
                </ExtraImagesContainer>
            )}
        </SliderContainer>
    );
};
