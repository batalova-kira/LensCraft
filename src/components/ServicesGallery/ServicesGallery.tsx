import { useState, FC } from "react";
import { cardsServices } from "./ServicesCard";
import {
    ServicesGalleryContainer,
    ServicesImagesContainer,
    ServicesImageWrapper,
    ServicesTitle,
    ServicesTitlesContainer,
} from "./styled";

export const ServicesGallery: FC = (): JSX.Element => {
    const [hoveredImage, setHoveredImage] = useState<number | null>(null);

    // Функція для обробки кліку на заголовок
    const handleTitleClick = (id: number): void => {
        if (hoveredImage === id) {
            setHoveredImage(null);
        } else {
            setHoveredImage(id);
        }
    };

    return (
        <ServicesGalleryContainer>
            <ServicesTitlesContainer>
                {cardsServices.map((card) => (
                    <ServicesTitle
                        key={card.id}
                        onMouseEnter={() => setHoveredImage(card.id)}
                        onMouseLeave={() => setHoveredImage(null)}
                        onClick={() => handleTitleClick(card.id)}
                    >
                        {card.title}
                    </ServicesTitle>
                ))}
            </ServicesTitlesContainer>
            <ServicesImagesContainer>
                {cardsServices.map((card) => (
                    <ServicesImageWrapper
                        key={card.id}
                        $isHovered={hoveredImage === card.id}
                    >
                        <img src={card.imageUrl_x1} alt={card.title} />
                    </ServicesImageWrapper>
                ))}
            </ServicesImagesContainer>
        </ServicesGalleryContainer>
    );
};
