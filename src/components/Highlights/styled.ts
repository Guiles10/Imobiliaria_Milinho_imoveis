import styled, { keyframes } from 'styled-components';

const pulseAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`;

export const StyledHighlights = styled.section`
    width: 100%;
    background-color: orange;

    .DivHighlights{
        display: flex;
    }

    .ConteinerUL{
       margin: 0 auto;
        max-width: 1280px;
        width: 100%;

        display: flex;
        flex-wrap: nowrap;
        align-items: center;
        gap: 50px;
        justify-content: space-between;
    }
 
    .UlCards{
        margin: 0 auto;
        max-width: 1280px;
        width: 100%;
        padding: 0 15px;
        
        display: flex;
        flex-wrap: nowrap;
        align-items: center;
        gap: 50px;
        justify-content: space-between;

        overflow-x: auto;
        overflow-y: hidden;

    }
   
    .cinteinerTitle{
        text-decoration: none;
        color: white;
        font-size: 35px;
        font-weight: 700px;
        text-align: center;
        
        transform: rotate(180deg);
        writing-mode: vertical-rl;
        height: 323px;
        display: flex;
        align-items: center;
    }
    .Title {
        animation: ${pulseAnimation} 3s infinite;
    }

    @media (max-width: 800px) {
      .ConteinerUL{
        flex-direction: column;
        gap: 0px;
      }
      .UlCards{
        padding: 15px;
      }

      .cinteinerTitle{
        color: white;
        font-size: 25px;
        font-weight: 700px;
        text-align: center;
       
        transform: rotate(1deg);
        writing-mode: horizontal-tb;
        height: 65px;
        display: flex;
        align-items: center;
      }
      .Title {
          animation: ${pulseAnimation} 3s infinite;
      }

    }

`

