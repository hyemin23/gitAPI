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
  grid-gap: 10px;
  justify-items: center;

  a {
    color: black;
  }
  a:visited {
    color: black;
    text-decoration: none;
  }

  .detail_header_data {
    width: 100%;
    height: 100%;
    box-shadow: rgb(0 0 0 / 10%) 0px 0px 4px;
    border-radius: 10px;

    .detail_header_info {
      width: 100%;
      height: 130px;
      border-bottom: 1px solid rgba(0, 0, 0, 0.03);
      .detail_header_title {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        font-size: 12px;
        & div {
          padding: 10px;
        }
        .detail_header_repo_name_container {
          width: 150px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;

          .detail_header_repo_name:hover {
            font-size: 15px;
          }
        }
      }
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
  }
`;

export const PageContariner = styled.div`
  background-color: pink;
  max-width: 700px;
  margin: 0 auto;
  text-align: center;

  li {
    display: inline-flex;
  }
`;
