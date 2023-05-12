import styled from 'styled-components';

export const StyledFooter = styled.section`
    width: 100%;
    background-color: var(--color-grey-3); 
    
    .DivFooter {
        margin: 0 auto;
        padding: 15px 80px;
        max-width: 1280px;
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }

    .DivLogo {
        width: 50%;
    }

    .DivItens {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 10px;
        justify-content: flex-end;
        width: 50%;

        .Insta, .Face, .Fone {
            color: var(--color-grey-0);
            font-size: 25px;
            transition: color 0.1s ease;
            margin-left: 25px;

            small{
                font-size: 18px;
                margin-left: 0;
            }
        }

        .Insta:hover{
            color: #E1306C;
        }
        .Face:hover{
            color: #405DE6;
        }
        .Fone:hover{
            color: #27AE60;
        }

        p {
            display: flex;
            align-items: center;
            gap: 10px;
            font-size: 16px;
            color: var(--color-black);
        }
    }
`