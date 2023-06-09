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
        width: 200px;

        .Logo  {
            display: flex;
            width: 50px;
        }
    }

    .Nav  {
        width: 500px;

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
                    
                    :hover{
                        text-decoration: 3px underline;
                        transform: scale(1.1);
                    }
                }
            }
        }
    }
    .MenuButton{
        display: none;
    }
    .navMobile{
        display: none;
    }


@media (max-width: 500px) {

    .Nav{
        .UlHeader{
            display: none;
        }  
    }
    .MenuButton{
        display: flex;
        z-index: 10;

        .open {
            width: 30px;
            height: 30px;
        }
        .close {
            color: white;
            width: 30px;
            height: 30px;
            :hover{
                transform: scale(1.1);
            }
        }
    }
    .navMobile{
        display: flex;
        position: absolute;
        right: 10px;
        top: 10px;
        background-color: var(--color-grey-3);
        z-index: 9;
        padding: 25px 35px;
        border-radius: 4px;


        ul {
            margin-top: 25px;

            .navIten{
                display: flex;
                flex-direction: column;
                align-items: flex-start;

                button {
                    margin-top: 25px;
                    background-color: transparent;
                    border: none;
                    color: var(--color-grey-0);
                    font-size: 18px;
                    line-height: 30px;
                    font-weight: 700;

                    :hover{
                        text-decoration: 3px underline;
                        transform: scale(1.1);
                    }
                }
            }
        }

    }
}
`