import styled, { css } from "styled-components";

export const Container = styled.section(({ theme }) => css`
  position: relative;
  width: 3.75rem;
  height: 3.75rem;
  box-shadow: 0.25rem 0.25rem 0.25rem ${theme.colors.shadow};
  background-color: ${theme.colors.background.image};
  border: 1px solid ${theme.colors.black[300]};
  border-radius: 50%;
  transition: 250ms;
  user-select: none;

    img {
      border-radius: 50%;
    }


  :hover, :active {
    cursor: pointer;
  }

  :hover {
    box-shadow: 0.35rem 0.35rem 0.1rem ${theme.colors.shadow};
    transform: scale(1.05);
  }

  :active {
    box-shadow: none;
    transform: scale(1);
  }

  ::after {
    box-shadow: none;
    transition: 250ms;
  }
  
  :active::after {
    box-shadow: inset 0.35rem 0.35rem 0.1rem ${theme.colors.shadow};
    content: '';
    display: block;
    height: 100%;
    position: absolute;
    top: 0;
    width: 100%;
    border-radius: 50%;
  }
`)

export const Content = styled.div(() => css`
  position: relative;

  &> span {
    line-height: 2rem;
    position: absolute;
    left: calc(25%);
    top: .7rem;
  }
`)