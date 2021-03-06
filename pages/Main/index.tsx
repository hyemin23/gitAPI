import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Container } from './style';

function Main() {
  const keys: string[] = [...'PAYHERE'];
  const history = useHistory();
  let keyNumber = 0;

  const selectedKeyup = (number: number) => {
    const prevKey: HTMLElement = document.getElementById(keys[number - 1]) as HTMLElement;
    const key: HTMLElement = document.getElementById(keys[number]) as HTMLElement;
    prevKey.classList.remove('selected');
    key.classList.add('selected');
  };

  const switchKeyNumber = (event: KeyboardEvent) => {
    const keyPressed: string = String.fromCharCode(event.keyCode);
    if (keyPressed === keys[keyNumber]) {
      switch (keyNumber) {
        case 0:
          keyNumber++;
          selectedKeyup(keyNumber);
          break;
        case 1:
          keyNumber++;
          selectedKeyup(keyNumber);
          break;
        case 2:
          keyNumber++;
          selectedKeyup(keyNumber);
          break;
        case 3:
          keyNumber++;
          selectedKeyup(keyNumber);
          break;
        case 4:
          keyNumber++;
          selectedKeyup(keyNumber);
          break;
        case 5:
          keyNumber++;
          selectedKeyup(keyNumber);
          break;
        default:
          keyNumber = 0;
          document.removeEventListener('keyup', switchKeyNumber);
          history.push('/home');
          break;
      }
    } else {
      alert('올바른 키를 입력해주세요.');
    }
  };
  const keyupEventListener = () => {
    const key: any = document.getElementById(keys[0]);
    key.classList.add('selected');
    document.addEventListener('keyup', switchKeyNumber);
  };

  useEffect(() => {
    keyupEventListener();
  }, []);

  useEffect(() => {
    let typingElement: any = document.getElementsByClassName('typing')[0];

    typingElement.addEventListener('click', () => {
      typingElement.className = 'typing';

      const handler = setTimeout(() => (typingElement.className = 'typing animate'), 1);
      return () => clearTimeout(handler);
    });
  }, []);

  return (
    <React.Fragment>
      <Container>
        <div className="typing animate"></div>
        <div className="keyboard">
          <ul className="row row-0">
            <li className="pinky" id="esc">
              ESC
            </li>
            <li className="pinky" id="1">
              1
            </li>
            <li className="ring" id="2">
              2
            </li>
            <li className="middle" id="3">
              3
            </li>
            <li className="pointer1st" id="4">
              4
            </li>
            <li className="pointer2nd" id="5">
              5
            </li>
            <li className="pointer2nd" id="6">
              6
            </li>
            <li className="pointer1st" id="7">
              7
            </li>
            <li className="middle" id="8">
              8
            </li>
            <li className="ring" id="9">
              9
            </li>
            <li className="pinky" id="10">
              0
            </li>
            <li className="pinky">-</li>
            <li className="pinky">+</li>
            <li className="pinky" id="back">
              BACK
            </li>
          </ul>
          <ul className="row row-1">
            <li className="pinky" id="tab">
              TAB
            </li>
            <li className="pinky" id="Q">
              Q
            </li>
            <li className="ring" id="W">
              W
            </li>
            <li className="middle" id="E">
              E
            </li>
            <li className="pointer1st" id="R">
              R
            </li>
            <li className="pointer2nd" id="T">
              T
            </li>
            <li className="pointer2nd" id="Y">
              Y
            </li>
            <li className="pointer1st" id="U">
              U
            </li>
            <li className="middle" id="I">
              I
            </li>
            <li className="ring" id="O">
              O
            </li>
            <li className="pinky" id="P">
              P
            </li>
            <li className="pinky">[</li>
            <li className="pinky">]</li>
            <li className="pinky">\</li>
          </ul>
          <ul className="row row-2">
            <li className="pinky" id="caps">
              CAPS
            </li>
            <li className="pinky" id="A">
              A
            </li>
            <li className="ring" id="S">
              S
            </li>
            <li className="middle" id="D">
              D
            </li>
            <li className="pointer1st" id="F">
              F
            </li>
            <li className="pointer2nd" id="G">
              G
            </li>
            <li className="pointer2nd" id="H">
              H
            </li>
            <li className="pointer1st" id="J">
              J
            </li>
            <li className="middle" id="K">
              K
            </li>
            <li className="ring" id="L">
              L
            </li>
            <li className="pinky">:</li>
            <li className="pinky">''</li>
            <li className="pinky" id="enter">
              ENTER
            </li>
          </ul>
          <ul className="row row-3">
            <li className="pinky" id="left-shift">
              SHIFT
            </li>
            <li className="pinky" id="Z">
              Z
            </li>
            <li className="ring" id="X">
              X
            </li>
            <li className="middle" id="C">
              C
            </li>
            <li className="pointer1st" id="V">
              V
            </li>
            <li className="pointer2nd" id="B">
              B
            </li>
            <li className="pointer2nd" id="N">
              N
            </li>
            <li className="pointer1st" id="M">
              M
            </li>
            <li className="middle">,</li>
            <li className="ring">.</li>
            <li className="pinky">;</li>
            <li className="pinky" id="right-shift">
              SHIFT
            </li>
          </ul>
        </div>
      </Container>
    </React.Fragment>
  );
}

export default Main;
