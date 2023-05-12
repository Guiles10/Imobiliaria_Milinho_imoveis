import styled from 'styled-components';

export const StyledModal = styled.section`
    background-color: var(--color-grey-3-op);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;

  .DivModal {
    width: 400px;
    max-width: 90%;
    
    display: flex;
    align-items: center;
    flex-direction: column; 

    margin: 0 auto;
    background-color: white;
    border-radius: 16px;
    padding: 15px;

    transition: opacity 0.3s ease;

    .DivHeaderModal{
        width: 100%;

        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;

        h1{
            color: var(--color-grey-3);
            font-size: 22px;
            font-weight: 700;
        }

        .CloseBtn{
            background-color: var(--color-grey-2);
            color: var(--color-grey-0);
            border-radius: 8px;
            border: 1px solid gray;
            font-size: 20px;
            padding: 3px;
        }
        .CloseBtn:hover{
            background-color: var(--color-grey-3);
            color: var(--color-grey-1);
        }

    }

    .DivImg{
        display: flex;
        position: relative;
        width: 100%;
        border: 2px solid gray;
        margin-bottom: 20px;

        img {
            
        }
    }

  }
    .prev-button,
    .next-button {
        
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        border: none;
        font-size: 24px;
        color: var(--color-grey-0);
        cursor: pointer;
        transition: color 0.3s ease;
    }

    .prev-button:hover,
    .next-button:hover {
        color: black;
    }

    .prev-button {
        left: 10px;
        background-color: var(--color-grey-3-op);
        border-radius: 20px;
        padding: 5px;
    }

    .next-button {
        right: 10px;
        background-color: var(--color-grey-3-op);
        border-radius: 20px;
        padding: 5px;
    }

    .DivInfos{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        p {

            color: black;
            font-size: 20px;
            font-weight: 700;
            margin-bottom: 15px;

            small{
                background-color: white;
                border: 1px solid var(--color-grey-3);
                box-shadow: inset;
                color:  var(--color-grey-3);
                font-size: 15px;
                font-weight: 500;
                padding: 5px;

                background-color: white;
                border-radius: 6px;
                box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
            }
           
        }

    }

    .contact-button {
        height: 50px;
        width: 200px;
        padding-right: 5px;
        margin-top: 15px;

        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: row;
        
        border-radius: 10px;
        transition: background-color 0.3s ease;

        color: white;
        font-weight: 700;
        text-decoration: none;
        background-color: var(--color-primary);
        
        :hover {
            text-decoration: underline;
          }

        }

    .WhatsApp{
        width: 45px;
        height: 45px;
        color: var(--color-primary);
        background-color: white;
        border-radius: 10px;
        margin-right: 10px;
    }

`;