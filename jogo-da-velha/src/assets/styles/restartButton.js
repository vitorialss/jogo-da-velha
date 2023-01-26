import styled from "styled-components";

const RestartButton = styled.button`
    padding: 0.7rem 3rem 1rem;
    font-size: 1.5rem;
    text-transform: uppercase;
    color: #00ffed;
    text-decoration: none;
    border: 1px solid #00ffed;
    position: relative;
    overflow: hidden;
    background-color: #000;
    height: 7rem;
    font-family: 'Orbitron', sans-serif;

     :hover {
        box-shadow: 1px 1px 25px 10px rgba(0, 255, 237, 0.4);

     }

     ::before{
        content: "";
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(120deg, transparent, rgba(0, 255, 237, 0.4), transparent);
        transition: all 650ms;
    
     }

     :hover::before {
        left:100%;
     }
    
     /*Mobile*/
    @media (max-width: 450px) {
        height: 4rem;
    }
`;

export default RestartButton;