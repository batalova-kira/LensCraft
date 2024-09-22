import { useState, FC } from "react";
import { cardsServices } from "./ServicesCard";
import {
    ServicesGalleryContainer,
    ServicesHeader,
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
                <ServicesHeader>SERVICES WE CAN OFFER </ServicesHeader>
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
                        <picture>
                            {/* Для десктопів (ширина від 768px) */}
                            <source
                                srcSet={`${card.imageUrl_x1_desk} 1x, ${card.imageUrl_x2_desk} 2x`}
                                media="(min-width: 768px)"
                                type="image/webp"
                            />
                            {/* Для мобільних (ширина до 767px) */}
                            <source
                                srcSet={`${card.imageUrl_x1} 1x, ${card.imageUrl_x2} 2x`}
                                media="(max-width: 767px)"
                                type="image/webp"
                            />
                            {/* Fallback для браузерів, які не підтримують WebP */}
                            <img src={card.imageUrl_jpeg} alt={card.title} />
                        </picture>
                    </ServicesImageWrapper>
                ))}
            </ServicesImagesContainer>
        </ServicesGalleryContainer>
    );
};
