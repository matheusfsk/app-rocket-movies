import styled from "styled-components";

import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  flex-direction: column;

  > main {
    justify-content: center;
    width: 100%;
    height: 716.54px;

    flex-direction: column;

    gap: 24px;
    overflow-y: auto;
    margin-right: 180px;

    padding-left: 218px;

    margin-bottom: 56px;
  }
`;

export const DivHeader = styled.div`
  width: 100%;
  padding-left: 15px;
  padding-left: 138px;

  header {
    margin-top: 50px;
    margin-bottom: 40px;
    display: flex;
    justify-content: space-between;
    margin-right: 106px;
    > h1 {
      font-family: "Roboto Slab";
      font-weight: 400;
    }
  }
  a {
    width: 207px;
    height: 48px;
    color: ${({ theme }) => theme.COLORS.BLACK_200};

    font-size: 16px;
    display: flex;
    border-radius: 8px;
  }
`;

export const DivMain = styled.div`
  margin-bottom: 40px;
  background: rgba(255, 133, 155, 0.05);
  border-radius: 16px;
  padding: 32px;
  margin-right: 16px;
  gap: 15px;

  > h2 {
    margin-bottom: 8px;
  }

  .stars {
    margin-bottom: 15px;
    color: ${({ theme }) => theme.COLORS.PINK};

    > svg {
      margin-right: 5px;
    }
  }

  > p {
    margin-bottom: 15px;
  }

  .tags {
    > span {
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
      color: ${({ theme }) => theme.COLORS.WHITE_3};
    }
  }
`;

export const NewNote = styled(Link)`
  background-color: ${({ theme }) => theme.COLORS.PINK};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_1000};
  border: none;

  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    margin-right: 8px;
  }
`;
