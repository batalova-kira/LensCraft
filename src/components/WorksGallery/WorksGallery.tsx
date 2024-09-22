import { useState, FC } from "react";
import { cardsWork } from "./cardsWork";
import {
    PictureWrapper,
    WorkCardContent,
    WorkCardHeader,
    WorkCardHeaderContainer,
    WorkCardImage,
    WorkCardWrapper,
    WorksCardsContainer,
} from "./styled";

export const WorksList: FC = (): JSX.Element => {
    // Масив, який зберігає стан розкриття для кожної картки
    const [expandedCards, setExpandedCards] = useState<boolean[]>(
        Array(cardsWork.length).fill(false)
    );

    // Функція для перемикання розкриття конкретної картки
    const toggleCard = (index: number): void => {
        setExpandedCards((prev) => {
            const newExpanded = [...prev];
            newExpanded[index] = !newExpanded[index]; // Перемикаємо стан для вибраної картки
            return newExpanded;
        });
    };

    return (
        <WorksCardsContainer>
            {cardsWork.map((card, index) => (
                <WorkCardWrapper
                    key={card.id}
                    $isExpanded={expandedCards[index]}
                    onClick={() => toggleCard(index)} // Обробник кліку для розкриття/закриття картки
                >
                    <WorkCardHeaderContainer>
                        <WorkCardHeader $isExpanded={expandedCards[index]}>
                            {card.title}
                        </WorkCardHeader>
                        <WorkCardContent $isExpanded={expandedCards[index]}>
                            {card.content}
                        </WorkCardContent>
                    </WorkCardHeaderContainer>

                    <PictureWrapper>
                        <picture>
                            <source
                                srcSet={`${card.imageUrl_x1} 1x, ${card.imageUrl_x2} 2x`}
                                type="image/webp"
                            />
                            <WorkCardImage
                                $isExpanded={expandedCards[index]}
                                src={card.imageUrl_jpeg}
                                alt={card.title}
                            />
                        </picture>
                    </PictureWrapper>
                </WorkCardWrapper>
            ))}
        </WorksCardsContainer>
    );
};
