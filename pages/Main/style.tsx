import styled from 'styled-components';

export const Container = styled.div`
  background-color: #24292e;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;

  .typing.animate {
    width: 21ch;
    border-right: 0.1em solid black;
    font-family: monospace;
    font-size: 2em;
    animation: type 2.5s steps(20), writer 1s infinite alternate;
    overflow: hidden;
    white-space: nowrap;
    cursor: pointer;
  }

  .typing.animate::before {
    color: white;
    content: 'Payhere를 눌러주세요 😊';
  }

  @keyframes type {
    from {
      width: 0;
    }
    to {
      width: 21ch;
    }
  }

  @keyframes writer {
    50% {
      border-color: transparent;
    }
  }
  .title {
    color: mintcream;
    text-transform: uppercase;
    margin-top: 3em;
    margin-bottom: 3em;
    font-size: 1em;
    letter-spacing: 0.3em;
  }

  .keyboard {
    display: flex;
    flex-direction: column;
  }

  .row {
    list-style: none;
    display: flex;
  }

  li {
    height: 3em;
    width: 3em;
    color: rgba(0, 0, 0, 0.7);
    border-radius: 0.4em;
    line-height: 3em;
    letter-spacing: 1px;
    margin: 0.4em;
    transition: 0.3s;
    text-align: center;
    font-size: 1em;
  }

  #tab {
    width: 5em;
  }

  #caps {
    width: 6em;
  }

  #left-shift {
    width: 8em;
  }

  #enter {
    width: 6em;
  }

  #right-shift {
    width: 8em;
  }

  #back {
    width: 5em;
  }

  .pinky {
    background-color: crimson;
    border: 2px solid crimson;
  }
  .pinky.selected {
    color: crimson;
  }

  .ring {
    background-color: coral;
    border: 2px solid coral;
  }
  .ring.selected {
    color: coral;
  }

  .middle {
    background-color: darkorange;
    border: 2px solid darkorange;
  }
  .middle.selected {
    color: darkorange;
  }

  .pointer1st {
    background-color: gold;
    border: 2px solid gold;
  }
  .pointer1st.selected {
    color: gold;
  }

  .pointer2nd {
    background-color: khaki;
    border: 2px solid khaki;
  }
  .pointer2nd.selected {
    color: khaki;
  }

  .fill-out-key {
    background-color: slategrey;
    border: 2px solid slategrey;
  }

  .selected {
    background-color: transparent;
    -webkit-animation: vibrate-1 0.3s linear infinite both;
    animation: vibrate-1 0.3s linear infinite both;
  }

  .hit {
    -webkit-animation: hit 0.3s cubic-bezier(0.39, 0.575, 0.565, 1) both;
    animation: hit 0.3s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  }

  @-webkit-keyframes hit {
    0% {
      -webkit-transform: scale(1.2);
      transform: scale(1.2);
    }
    100% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }
  @keyframes hit {
    0% {
      -webkit-transform: scale(1.2);
      transform: scale(1.2);
    }
    100% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }

  @-webkit-keyframes vibrate-1 {
    0% {
      -webkit-transform: translate(0);
      transform: translate(0);
    }
    20% {
      -webkit-transform: translate(-2px, 2px);
      transform: translate(-2px, 2px);
    }
    40% {
      -webkit-transform: translate(-2px, -2px);
      transform: translate(-2px, -2px);
    }
    60% {
      -webkit-transform: translate(2px, 2px);
      transform: translate(2px, 2px);
    }
    80% {
      -webkit-transform: translate(2px, -2px);
      transform: translate(2px, -2px);
    }
    100% {
      -webkit-transform: translate(0);
      transform: translate(0);
    }
  }
  @keyframes vibrate-1 {
    0% {
      -webkit-transform: translate(0);
      transform: translate(0);
    }
    20% {
      -webkit-transform: translate(-2px, 2px);
      transform: translate(-2px, 2px);
    }
    40% {
      -webkit-transform: translate(-2px, -2px);
      transform: translate(-2px, -2px);
    }
    60% {
      -webkit-transform: translate(2px, 2px);
      transform: translate(2px, 2px);
    }
    80% {
      -webkit-transform: translate(2px, -2px);
      transform: translate(2px, -2px);
    }
    100% {
      -webkit-transform: translate(0);
      transform: translate(0);
    }
  }
`;