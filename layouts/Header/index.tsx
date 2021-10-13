import Input from '@common/Input';
import React, { useCallback, useState } from 'react';
import { IoLogoGithub } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { HeaderContainer, HeaderNavigation } from './style';
import { useHistory } from 'react-router-dom';

const Header = () => {
  const [repoValue, setRepoValue] = useState('');
  const history = useHistory();

  const onChangeRepo = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setRepoValue(event.target.value);
  }, []);

  const onSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      history.push({
        pathname: `/detail`,
        search: `?repository=${repoValue}`,
      });
    },
    [repoValue],
  );

  return (
    <HeaderContainer>
      <div className="logo_container">
        <Link to="/home">
          <IoLogoGithub color="white" size={36} />
        </Link>
      </div>
      <div className="form_info">
        <form onSubmit={onSubmit}>
          <Input placeholder="레포지토리명을 입력해주세요." onChange={onChangeRepo} />
        </form>
      </div>
      <HeaderNavigation>
        <Link to="#">
          <span>Subscribe Issues</span>
        </Link>
      </HeaderNavigation>
    </HeaderContainer>
  );
};

export default Header;
