import styled from 'styled-components';

export const HeaderStyles = styled.header`
  height: 70px;
  width: auto;
  display: flex;
  justify-content: space-between;
  margin: 0 20px 25px;
  position: relative;

  .Logo-Container {
    height: 100%;
    width: 70px;
    padding: 25px;
  }

  .Profile-Image {
    width: 50px;
    margin: 0 10px 0 0;
    height: 50px;
    img {
      border-radius: 50%;
      width: 100%;
      object-fit: cover;
    }
  }

  .Options {
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    .Option {
      padding: 10px 15px;
      cursor: pointer;
    }
  }
`;
