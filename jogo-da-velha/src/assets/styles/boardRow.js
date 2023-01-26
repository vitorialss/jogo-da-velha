import styled from "styled-components";

const BoardRow = styled.div`
        display: flex;
        justify-content: center;
        height: 90%;
        width: 90%;

        /*Mobile*/
    @media (max-width: 450px) {
        width: 100%;
        height: 150px;
    }
    @media screen and (max-width: 767px) {
        width: 100%;
    }
`;
export default BoardRow;