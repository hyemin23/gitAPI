import styled from 'styled-components';

export const Container = styled.div`
  width: 100wh;
  height: 100vh;
  background-color: white;

  h1 {
    text-align: center;
  }
`;

export const DetailSearchContainer = styled.div`
  padding: 0 10rem;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;

  a {
    color: black;
  }
  a:visited {
    color: black;
    text-decoration: none;
  }

  .user_profile_container {
    .user_profile_image {
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        width: 25px;
        border-radius: 50%;
      }

      span {
        padding: 10px;
      }
    }
  }
`;
