import styled from "styled-components";

const GameTitle = styled.h1`
    font-size: 3em;
    color: #fff;
    margin: 10px;;

    text-shadow: 0 0 5px #00ffed, 0 0 15px #00ffed, 0 0 20px #00ffed, 0 0 40px #00ffed, 0 0 60px #00998e, 0 0 10px #00ffed, 0 0 98px #00998e;
    animation: blink 12s infinite;
    -webkit-animation: blink 12s infinite;

    @-webkit-keyframes blink {
  20%,
  24%,
  55% {
    color: #111;
    text-shadow: none;
  }

  0%,
  19%,
  21%,
  23%,
  25%,
  54%,
  56%,
  100% {
  text-shadow: 0 0 5px #00ffed, 0 0 15px #00ffed, 0 0 20px #00ffed, 0 0 40px #00ffed, 0 0 60px #00998e, 0 0 10px #00ffed, 0 0 98px #00998e;
    color: #fff;
  }
}

@keyframes blink {
  20%,
  24%,
  55% {
    color: #111;
    text-shadow: none;
  }

  0%,
  19%,
  21%,
  23%,
  25%,
  54%,
  56%,
  100% {
    text-shadow: 0 0 5px #00ffed, 0 0 15px #00ffed, 0 0 20px #00ffed, 0 0 40px #00ffed, 0 0 60px #00998e, 0 0 10px #00ffed, 0 0 98px #00998e;
    color: #fff;
  }
}

`;
export default GameTitle;