import styled from "styled-components";
import backgroundImg from "../../assets/background.png";

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;

  .transitionAnimate {
    margin: auto;
  }
`;

export const Form = styled.form`
  padding: 0 136px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  > h1 {
    font-size: 48px;
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  > h2 {
    font-size: 24px;
    margin: 48px 0;
    font-weight: 500;
  }

  > p {
    font-size: 14px;
    color: ${({ theme }) => theme.COLORS.WHITE_100};
  }

  > a {
    margin-top: 42px;
    color: ${({ theme }) => theme.COLORS.PINK};
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;

    > svg {
      margin-right: 8px;
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
`;
