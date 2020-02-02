import styled from 'styled-components';

export const MenuItemStyles = styled.div`
  min-width: 30%;
  height: 240px;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  margin: 0 7.5px 15px;
  overflow: hidden;

  height: ${props => props.size && '380px'};

  &:hover {
    cursor: pointer;

    & .Background-Image {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }

    & .Content {
      opacity: 0.9;
    }
  }

  &:first-child {
    margin-right: 7.5px;
  }
  &:last-child {
    margin-left: 7.5px;
  }

  .Background-Image {
    width: 100%;
    height: 100%;
    background-position: center;
    background-size: cover;
  }

  .Content {
    height: 90px;
    padding: 0 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    background: white;
    opacity: 0.7;
    position: absolute;

    .Title {
      font-weight: bold;
      margin: 0 0 6px;
      font-size: 22px;
      color: #4a4a4a;
      text-transform: uppercase;
    }
    .SubTitle {
      font-weight: lighter;
      font-size: 16px;
      text-transform: uppercase;
    }
  }
`;
