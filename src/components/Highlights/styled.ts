import styled from 'styled-components';


export const StyledHighlights = styled.section`
    width: 100%;
    background-color: orange;

    .Title{
        margin-top: 25px;
        text-decoration: none;
        color: white;
        font-size: 35px;
        font-weight: 700px;
        text-align: center;
    }
 
    .UlCards{
        margin: 0 auto;
        padding: 15px;
        max-width: 1280px;
        width: 100%;

        display: flex;
        flex-wrap: nowrap;
        align-items: center;
        gap: 50px;
        justify-content: space-between;
        
        overflow-x: auto;
        overflow-y: hidden;
    }
`