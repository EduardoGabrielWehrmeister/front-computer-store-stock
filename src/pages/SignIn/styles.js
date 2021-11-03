import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;

  img {
    position: absolute;
    bottom: 50px;
    right: 75px;
    height: 120px;
    width: 140px;
  }
`;

export const LeftBox = styled.div`
  width: 65%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #7941f2;

  div {
    display: flex;
    align-items: flex-start;
    flex-direction: column;

    h1 {
      font-size: 120px;
      margin-bottom: 20px;
    }

    p {
      font-size: 36px;
      line-height: 50px;
      font-weight: bold;
    }
  }
`;

export const RightBox = styled.div`
  width: 35%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;

  h1 {
    margin-bottom: 25px;
    color: #3d188c;
  }

  form {
    display: flex;
    flex-direction: column;
    width: 345px;

    b {
      font-size: 13px;
      letter-spacing: 0.2px;
    }

    input {
      background: #eee;
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #000;
      margin: 0 0 10px;

      &::placeholder {
        color: #909090;
      }
    }

    span {
      color: #fb6f91;
      align-self: flex-start;
      margin: 0 0 15px 5px;
      font-weight: bold;
    }

    button {
      background: #6727f2;
      height: 60px;
      margin: 5px 0;
      font-weight: bold;
      font-size: 24px;
      color: #fff;
      border: 0;
      border-radius: 10px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.05, '#6727f2')};
      }
    }
  }
`;
