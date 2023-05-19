import styled from 'styled-components';

export const StyledCardSmall = styled.li`
  width: 250px;
  height: 300px;
  min-width: 250px;
  background-color: white;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 2px solid var(--color-grey-2);

  h1{
    padding: 10px 5px;
    margin: 0;
    font-size: 15px;
    font-weight: bold;
    color: var(--color-grey-1);
    background-color: var(--color-grey-3);
  }

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
  
    .DivTitle {
      padding: 5px;
      display: flex;
      align-items: center;
      justify-content: center;

      h2{
        font-size: 18px;
        font-weight: bold;
        color: var(--color-grey-3);
      }
    }
    
    .DivInfos{
      padding: 5px;
      display: flex;
      justify-content: center;
      align-items: flex-start;
      flex-direction: column;

      p {
        color: black;
        font-size: 15px;
        font-weight: 700;
        margin-bottom: 18px;

        small{
            background-color: white;
            border: 1px solid rgba(0, 0, 0, 0.2);
            box-shadow: inset;
            color:  var(--color-grey-3);
            font-size: 15px;
            font-weight: 500;
            padding: 3px;

          margin-left: 5px;

            background-color: white;
            border-radius: 6px;
            box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
        }

      }

    }

    button{
      display: flex;
      align-items: center;
      justify-content: center;

      padding: 5px;
      margin: 5px;
      border: 1px solid var(--color-grey-3);

      background-color: var(--color-grey-3);
      color: var(--color-grey-0);
      font-size: 15px;
      font-weight: 500;
    }

    button:hover {
      background-color: var(--color-grey-1);
      color: var(--color-grey-3);
      font-weight: 600;
    }

`;