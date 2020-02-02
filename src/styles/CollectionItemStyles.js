import styled from 'styled-components';

export const CollectionItemStyles = styled.div`
  width: 22%;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;

  .Image {
    width: 100%;
    height: 95%;
    background-size: cover;
    background-position: center;
    margin-bottom: 5px;
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