import React, { useState } from 'react';
import styled from 'styled-components';

// Інтерфейс для ItemProps
interface ItemProps {
  title: string;
  subItems?: ItemProps[]; // Вкладені елементи можуть бути рекурсивними
}

const ItemWrapper = styled.div`
  padding: 10px;
  border: 1px solid #ccc;
  margin-bottom: 10px;
  position: relative;
  background: #f9f9f9;
`;

const InputLikeDiv = styled.div`
  border: 1px solid #ddd;
  padding: 5px;
  cursor: text;
  &:hover {
    border-color: #aaa;
  }
`;

const SubItemsWrapper = styled.div<{ expanded: boolean }>`
  margin-left: 20px;
  max-height: ${({ expanded }) => (expanded ? '500px' : '0')};
  overflow: hidden;
  transition: max-height 0.3s ease;
`;

interface AddSubItemButtonProps {
  show: boolean;
}

const AddSubItemButton = styled.button<AddSubItemButtonProps>`
  position: absolute;
  right: 10px;
  top: 5px;
  display: ${({ show }) => (show ? 'inline' : 'none')};
`;

// Компонент Item
const Item: React.FC<ItemProps> = ({ title, subItems = [] }) => {
  const [hovered, setHovered] = useState(false); // Контроль для відображення кнопки
  const [expanded, setExpanded] = useState(false); // Контроль для відображення піделементів

  return (
    <ItemWrapper
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* "Інпут" */}
      <InputLikeDiv>{title}</InputLikeDiv>

      {/* Кнопка для додавання/розгортання піделементів */}
      <AddSubItemButton show={hovered} onClick={() => setExpanded(!expanded)}>
        {expanded ? 'Hide Sub-Items' : 'Show Sub-Items'}
      </AddSubItemButton>

      {/* Вкладені елементи */}
      <SubItemsWrapper expanded={expanded}>
        {subItems.map((subItem, index) => (
          <Item key={index} title={subItem.title} subItems={subItem.subItems} />
        ))}
      </SubItemsWrapper>
    </ItemWrapper>
  );
};

// KanbanBoard компонент для відображення елементів
export const KanbanBoard: React.FC = () => {
  const items: ItemProps[] = [
    {
      title: 'Task 1',
      subItems: [
        {
          title: 'Subtask 1.1',
          subItems: [{ title: 'Subtask 1.1.1' }, { title: 'Subtask 1.1.2' }],
        },
        { title: 'Subtask 1.2' },
      ],
    },
    {
      title: 'Task 2',
      subItems: [{ title: 'Subtask 2.1', subItems: [{ title: 'Subtask 2.1.1' }] }],
    },
  ];

  return (
    <div>
      {items.map((item, index) => (
        <Item key={index} title={item.title} subItems={item.subItems} />
      ))}
    </div>
  );
};

export default KanbanBoard;
  
