import React from 'react';
import { Container } from './style';
import Issues from '@components/Issues';
import Button from '@common/Button';
import TrashIcon from '../../public/static/svg/trash_can.svg';

interface IProps {
  localItem: RepoProps;
  deleteRepo: (id: string) => void;
}

interface RepoProps {
  id: string;
  repoName: string;
  repoOwner: string;
  ownerSrc: string;
}
const RepositoryItem: React.FC<IProps> = ({ localItem, deleteRepo }) => {
  return (
    <Container>
      <div className="sub_repo_info">
        Repository : {localItem.repoName}
        <div className="user_profile_image">
          <span>User : </span> <img src={`${localItem.ownerSrc}`} alt="userProfile" />
          <span>{localItem.repoOwner}</span>
        </div>
        <Button width="100px" icon={<TrashIcon />} onClick={() => deleteRepo(localItem.id)} />
      </div>

      {/* 이슈 리스트 출력 */}
      <Issues repositoryName={localItem.repoName} repositoryOwner={localItem.repoOwner} />
    </Container>
  );
};

export default RepositoryItem;
