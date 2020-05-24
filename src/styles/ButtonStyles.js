import styled from 'styled-components';

export const ButtonStyles = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  background-color: black;
  color: white;
  text-transform: uppercase;
  font-family: 'Open Sans Condensed';
  font-weight: bolder;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  width: ${({ width }) => width};
  opacity: ${({ opacity }) => opacity};
  position: ${({ position }) => position};
  top: ${({ top }) => top};

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }

  &.Google-Login {
    background-color: #4285f4;
    color: #fff;
    border: 1px solid black;

    &:hover {
      background-color: #357ae8;
    }
  }

  &.Inverted {
    background-color: black;
    color: white;
    border: none;
    &:hover {
      background-color: white;
      color: black;
      border: 1px solid black;
    }
  }
`;
