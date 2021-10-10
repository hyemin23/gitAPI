import styled from 'styled-components';

export const Container = styled.div`
  min-width: 100%;
  min-height: 100vh;
  background-color: green;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  color: white;
  font-size: 36px;
  background-color: #24292e;

  .gitIcon {
    padding: 20px 0;
  }
`;

export const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  text-align: center;
`;

export const SearchBar = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  form {
    width: 50%;
    & input {
      width: 100%;
      height: 40px;
      background-color: hsla(0, 0%, 100%, 0.125);
      border: none;
      border-radius: 5px;
      outline: none;
      color: white;
      padding: 0px 12px;
      font-size: 14px;
      font-weight: bold;

      &::placeholder {
        text-align: center;
      }
    }
  }
`;

export const Navigation = styled.nav`
  width: 50%;
  height: 100%;

  ul {
    display: flex;
    padding: 0;
    li {
      width: 50%;
      flex: 1;
      text-align: center;
      transition: all 0.6s;

      &:last-child {
        margin-right: 0;
      }

      a {
        color: white;
        text-decoration: none;
        font-size: 16px;
        font-weight: bold;

        .highlight {
          display: inline-table;
          position: relative;
          overflow: hidden;

          span {
            position: relative;
            z-index: 2;
          }
        }
        .highlight::before {
          content: '';
          display: block;
          width: 100%;
          height: 100%;
          background-color: rgba(255, 200, 0, 0.5);
          position: absolute;
          top: 0;
          left: -100%;
          transition: all 0.35s;
        }
      }
    }
    li:hover {
      flex: 2;
      font-size: 20px;
      color: grey;
      text-shadow: 0 0 5px rgba(0, 0, 0, 0.5);

      .highlight::before {
        left: 0;
        z-index: 1;
      }
    }
    li:not(:hover) {
      flex: 0.8;
    }
  }
`;
