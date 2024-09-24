import styled from "styled-components";
import { breakpoints } from "../../constants/breakpoints";

export const ContactsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media only screen and (min-width: ${breakpoints.medium}) {
    }
`;

export const ContactsTextContainer = styled.div`
    width: 100%;
    height: 100px; /* висота контейнера */
    position: relative;
    overflow: hidden; /* обрізаємо зайвий текст */
    margin: 48px 0px;
`;

export const ContactsText = styled.p`

    font-weight: 700;
    font-size: 100px;
    line-height: 1.1;
    white-space: nowrap;
    
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); /* Вирівнює текст по центру */
    
    text-shadow: -1px -1px 0 ${(p) => p.theme.colors.textSecondary},
        1px -1px 0 ${(p) => p.theme.colors.textSecondary},
        -1px 1px 0 ${(p) => p.theme.colors.textSecondary},
        1px 1px 0 ${(p) => p.theme.colors.textSecondary};
    color: ${(p) => p.theme.colors.background};
    
    @media only screen and (min-width: ${breakpoints.medium}) {
        font-size: 120px;
    }
`;

export const SocialMediaContainer = styled.div`
display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  
`;

export const SocialMediaList = styled.ul`
    display: flex;
  justify-content: center; /* Центрує іконки по горизонталі */
  gap: 8px; /* Відстань між іконками */
`;

export const SocialMediaItem = styled.li`
list-style: none;

a {
    padding: 5px;
  width: 24px;
  height: 24px;
  background-color: #E6E6E6; /* Прозорий фон спочатку */
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  position: relative;
  overflow: hidden;
  border: 2px solid transparent; /* Видимий бордер при ховері */
  transition: background-color 0.5s ease, border-color 0.5s ease;
}

/* Псевдоелемент для фону */
a:before {
    content: "";
    position: absolute;
    bottom: -100%; /* Початок знизу */
    left: 0;
    width: 100%;
    height: 100%;
    background: currentColor; /* Колір іконки для заливки */
    z-index: 0;
    transition: bottom 0.5s ease; /* Плавна зміна положення знизу */
  }

  /* Анімація при ховері: фон підіймається знизу */
  a:hover:before {
    background-color: currentColor;
    bottom: 0; /* Заливає весь елемент знизу вгору */
  }

a .icon {
    
  font-size: 16px;
  color: #262626;
  transition: transform 0.5s ease, color 0.5s ease;
  z-index: 1; /* Іконка зверху */
}

a:hover .icon {
  transform: rotateY(360deg); /* Дзеркальне обертання */
  color: #fff; /* Зміна кольору іконки */
}

/* Стилі для різних соцмереж */
&:nth-child(1) a {
  color: #3b5999; /* Facebook */
}

&:nth-child(2) a {
  color: #55acee; /* Twitter */
}

&:nth-child(3) a {
  color: #0077b5; /* LinkedIn */
}

&:nth-child(4) a {
  color: #dd4b39; /* Google+ */
}
`;