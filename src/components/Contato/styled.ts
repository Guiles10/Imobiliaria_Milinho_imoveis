import styled from 'styled-components';


export const StyledContato = styled.section`
    width: 100%;
    background-color: var(--color-grey-3);

    .DivContato{
        margin: 0 auto;
        padding: 15px 80px;
        max-width: 1280px;
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-evenly;

        h1{
            color: white;
            font-size: 25px;
            font-weight: 700;
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
    @media (max-width: 700px) {
        .DivContato{
            padding: 15px 30px;
        }
    }
    @media (max-width: 500px) {
        .DivContato{
            padding: 15px 15px;
            flex-direction: column;
            h1{
                margin-bottom: 15px;
            }
        }
    }

`