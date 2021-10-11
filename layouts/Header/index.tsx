import Input from '@common/Input';
import React from 'react';
import { IoLogoGithub } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { HeaderContainer, HeaderNavigation } from './style';

const onSubmit = () => {};
const Header = () => {
  return (
    <HeaderContainer>
      <div className="logo_container">
        <Link to="/home">
          <IoLogoGithub color="white" size={36} />
        </Link>
      </div>
      <div className="form_info">
        <form onSubmit={onSubmit}>
          <Input placeholder="레포지토리명을 입력해주세요." />
        </form>
      </div>
      <HeaderNavigation>
        <Link to="#">
          <span>Issue</span>
        </Link>
        {/* 해당 버튼을 누르면 */}
        {/* 모달 형식으로 내가 추가한 */}
        {/* 레파지토리 삭제 가능하게끔 */}
        <Link to="#">
          <span>Profile</span>
        </Link>
      </HeaderNavigation>
    </HeaderContainer>
  );
};

export default Header;
