import styled from "styled-components";

const RowButton = styled.button`
    height: 100%;
    width: 20%;
    font-size: 4em;
    font-family: 'Orbitron', sans-serif;
    background-color: #0f0f0f;
    background-image: linear-gradient(43deg, #0f0f0f 72%, #420d43 100%);
    color: #FC00FF;
    text-shadow:
      0 0 7px #FFF,
      0 0 10px #FFF,
      0 0 21px #fff,
      0 0 42px #FC00FF,
      0 0 82px #FC00FF,
      0 0 92px #FC00FF,
      0 0 102px #FC00FF,
      0 0 151px #FC00FF;
    
    border: 1px solid #00ffed;

    /*Mobile*/
   
      @media screen and (max-width: 1023px) {
        width: 32%;
        
      }
      

    
`;

export default RowButton;