import styled from 'styled-components';


export const StyledSlides = styled.section`
    width: 100%;
    background-color: blue;
    max-height: 450px;

    .DivSlides{
        margin: 0 auto;
        padding: 15px;

        max-width: 1280px;
        width: 100%;

        display: flex;

        position: relative;

        img {
            display: block;
            width: 100%;
            height: 400px;
            
            }

            .button-prev, .button-next {
                background-color: rgba(0, 0, 0, 0.9);
                border-radius: 30%;
                padding: 10px;
                color: white;
                font-size: 1.5rem;
                border: none;
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                z-index: 2;
                opacity: 0.5;
                transition: opacity 0.2s ease-in-out;

                &:hover {
                    opacity: 1;
                }
            }

           .button-prev {
                left: 20px;
            }

            .button-next {
                right: 20px
            }
    }
`