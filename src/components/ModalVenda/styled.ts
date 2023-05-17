import styled from 'styled-components';

export const StyledModalVenda = styled.section`
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

    .BodyModal {
        margin-bottom: 25px;
    }
    .DivInfos{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        p {
            margin-bottom: 25px;
            text-align: center;
        }
        a{
            background-color: var(--color-grey-1);
            padding: 15px;

            color: black;
            font-size: 20px;
            font-weight: 700;
            text-decoration: none;

            :hover{
                background-color: var(--color-grey-2);
                transform: scale(1.1);
            }
        }
    }
}`