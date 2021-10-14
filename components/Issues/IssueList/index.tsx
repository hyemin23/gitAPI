import Input from '@common/Input';
import React from 'react';
import { IssueContainer } from './style';

interface IProps {
  issuesData: any;
}

const IssueList: React.FC<IProps> = ({ issuesData }) => {
  return (
    <IssueContainer>
      {issuesData.map(({ node }: any) => {
        return (
          <div className="issue_item_container" key={node.id}>
            <h3>
              Issue : <a href={`${node.url}`}>{node.title}</a>
            </h3>
            {/* 이슈에 따른 body html 출력*/}
            <div className="issue_item_detail_info">
              <Input type="checkbox" id={`check_${node.id}`} />
              <label htmlFor={`check_${node.id}`}>
                자세히<em></em>
              </label>
              <div dangerouslySetInnerHTML={{ __html: node.bodyHTML }} className="issue_item_detail_content"></div>
            </div>
          </div>
        );
      })}
    </IssueContainer>
  );
};

export default IssueList;
