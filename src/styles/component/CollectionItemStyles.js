import styled from 'styled-components';

export const CollectionItemStyles = styled.div`
  width: 22vw;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;

  &:hover {
    .Image {
      opacity: 0.8;
    }
    button {
      display: flex;
      opacity: 0.85;
    }
  }

  .Image {
    width: 100%;
    height: 95%;
    background-size: cover;
    background-position: center;
    margin-bottom: 5px;
  }

  button {
    display: none;
  }

  .Collection-Footer {
    width: 100%;
    height: 5%;
    display: flex;
    justify-content: space-between;
    font-size: 18px;

    .Name {
      width: 90%;
      margin-bottom: 15px;
    }

    .Price {
      width: 10%;
    }
  }
`;
