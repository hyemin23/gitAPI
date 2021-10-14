import styled from 'styled-components';

export const Container = styled.div`
  /* display: flex; */
  /* flex-direction: column; */
  padding: 5rem 10rem;
  border-top: 1px solid black;

  .sub_repo_info {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .user_profile_image {
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 20px;
      border-radius: 50%;
    }
  }
`;
