import { useState } from "react";
import { cardsWork } from "./cardsWork";
import { WorkCardContent, WorkCardHeader, WorkCardHeaderContainer, WorkCardImage, WorkCardWrapper } from "./styled";

export const WorksList: React.FC = () => {
    // Масив, який зберігає стан розкриття для кожної картки
    const [expandedCards, setExpandedCards] = useState<boolean[]>(Array(cardsWork.length).fill(false));
  
    // Функція для перемикання розкриття конкретної картки
    const toggleCard = (index: number) => {
      setExpandedCards((prev) => {
        const newExpanded = [...prev];
        newExpanded[index] = !newExpanded[index]; // Перемикаємо стан для вибраної картки
        return newExpanded;
      });
    };
  
    return (
      <div>
        {cardsWork.map((card, index) => (
          <WorkCardWrapper 
            key={card.id} 
            $isExpanded={expandedCards[index]} 
            onClick={() => toggleCard(index)} // Обробник кліку для розкриття/закриття картки
          >
            <WorkCardHeaderContainer>
            <WorkCardHeader $isExpanded={expandedCards[index]} >{card.title}</WorkCardHeader>
            <WorkCardContent $isExpanded={expandedCards[index]}>
              {card.content}
            </WorkCardContent>
            </WorkCardHeaderContainer>
            <WorkCardImage 
              $isExpanded={expandedCards[index]} 
              src={card.imageUrl} 
              alt={card.title} 
            />
          </WorkCardWrapper>
        ))}
      </div>
    );
  };