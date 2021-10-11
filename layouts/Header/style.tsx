import styled from 'styled-components';

export const HeaderContainer = styled.header`
  width: 100%;
  height: 70px;
  padding: 14px;
  background-color: #24292e;
  line-height: 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo_container {
    flex: 1;
  }
  .form_info {
    flex: 1;

    form {
      input {
        margin: 0px 16px;
        background-color: hsla(0, 0%, 100%, 0.125);
        width: 100%;
        height: 28px;
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
  }
`;

export const HeaderNavigation = styled.div`
  flex: 1;
  text-align: right;
  a {
    margin: 0 10px;
  }
  a:hover {
    box-shadow: 0 1px 0;
  }
  a:visited {
    color: white;
  }
`;
