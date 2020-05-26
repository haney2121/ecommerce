import styled from 'styled-components';

export const WithSpinnerStyles = styled.div`
  margin: 20vh auto 0;
  display: block;
  width: 15rem;
  height: 15rem;
  background-color: currentColor;
  border-radius: 50%;
  opacity: 0;
  animation: spinner-grow 1.75s linear infinite;

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  @keyframes spinner-grow {
    0% {
      transform: scale(0);
    }
    50% {
      opacity: 1;
    }
  }
`;
