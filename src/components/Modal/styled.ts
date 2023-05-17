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

    max-width: 95%;
    
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

    section{
        width: 100%;
        max-width: 1000px;
        display: flex;
        justify-content: space-between;

        .modalshow{
            width: 55%;
        }
    }

    .DivImg{
        width: 100%;
        display: flex;
        justify-content: center;
        position: relative;
        border: 2px solid gray;
        background-color: black;

        img {
            display: flex;
            justify-content: center;
            width: 550px;
            height: 350px;
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
        width: 43%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        p {
            color: black;
            font-size: 20px;
            font-weight: 700;
            margin-bottom: 15px;

        }
        div{
            display: flex;
            flex-wrap: wrap;
            align-items: baseline;
        }

        small{
                    
            margin-left: 8px;
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

            max-height: 200px;
            overflow: auto;

            ::-webkit-scrollbar {
                width: 6px;
                border-radius: 3px;
            }

            ::-webkit-scrollbar-thumb {
                background-color: var(--color-grey-1);
                border-radius: 3px;
            }
        }

    }

    .contact-button {
        height: 50px;
        width: 250px;
        max-width: 95%;
        padding-right: 5px;
        margin-top: 15px;

        display: flex;
        align-items: center;
        justify-content: space-around;
        flex-direction: row;
        
        border-radius: 10px;
        transition: background-color 0.3s ease;

        color: var(--color-primary);
        font-weight: 700;
        text-decoration: none;
        border: 1px solid var(--color-primary);
        
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

    @media (max-width: 800px) {

        .DivModal{
            max-height: 95%;
            section{
                display: flex;
                flex-direction: column;
                max-height: 80%;
                overflow-y: auto;

                ::-webkit-scrollbar {
                    width: 6px;
                    border-radius: 3px;
                }

                ::-webkit-scrollbar-thumb {
                    background-color: var(--color-grey-1);
                    border-radius: 3px;
                    }
                .modalshow{
                    width: 100%;
                    margin-bottom: 25px;
                }
            }
        }
            
        .DivInfos{
            width: 100%;
        }
    }
    `;