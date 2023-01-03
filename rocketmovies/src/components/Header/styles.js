import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.header`
  grid-area: header;

  height: 105px;
  width: 100%;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  padding: 0 123px;
  display: flex;
  justify-content: space-between;

  .inputContainer {
    width: 630px;
    height: 56px;
    margin: auto;
  }
`;

export const Rocket = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.COLORS.PINK};

  padding: 0 15px;
`;

export const Profile = styled(Link)`
  display: flex;
  align-items: center;

  padding: 0 15px;

  > img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
  }

  > div {
    display: flex;
    flex-direction: column;
    margin-right: 9px;
    line-height: 24px;

    span {
      font-size: 14px;
      color: ${({ theme }) => theme.COLORS.GRAY_400};
      text-align: right;
    }

    strong {
      font-size: 16px;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }
`;
