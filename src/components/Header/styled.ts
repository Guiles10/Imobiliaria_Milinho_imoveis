import styled from 'styled-components';


export const StyledHeader = styled.section`
    width: 100%;
    background-color: var(--color-secondary);
    
    .DivHeader{
        margin: 0 auto;
        padding: 15px;

        max-width: 1280px;
        width: 100%;

        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }

    .DivLogo  {
        display: flex;
        width: 25%;

        .Logo  {
            display: flex;
            width: 50px;
        }
    }

    .Nav  {
        width: 70%;

        display: flex;
 
        .UlHeader {
            width: 100%;

            display: flex;
            justify-content: space-between;
            flex-direction: row;
            align-items: center;

            .LiHeader {
                display: flex;

                button {
                    background-color: var(--color-secondary);
                    border: none;
                    color: var(--color-grey-0);
                    font-size: 18px;
                    line-height: 30px;
                    font-weight: 700;
                }
            }
        }
    }
`