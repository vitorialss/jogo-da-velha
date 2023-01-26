import styled from "styled-components";

const Quadro = styled.div` 
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    color: pink;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100%;
    margin: 2em 0 2em; 

    & > div {
        display: flex;
        justify-content: center;
        height: 90%;
        width: 90%;
    }

    
`;
 export default Quadro;