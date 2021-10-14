import styled from 'styled-components';

export const IssueContainer = styled.div`
  .issue_item_container {
    h3 {
      text-align: center;
    }

    .issue_item_detail_info {
      width: 100%;

      input[id*='check_'] {
        display: none;
      }

      input[id*='check_'] + label {
        width: 100%;
        display: block;
        padding: 20px;
        border: 1px solid #232188;
        border-bottom: 0;
        color: #fff;
        font-weight: 900;
        background: #3634a5;
        cursor: pointer;
        position: relative;
      }

      input[id*='check_'] + label em {
        position: absolute;
        top: 50%;
        right: 10px;
        width: 30px;
        height: 30px;
        /* 가운데 정렬을 위해 높이의 절반값을 빼줌 */
        margin-top: -15px;
        display: inline-block;
        background: url(../../../public/static/png/arrow.png) 0 0 no-repeat;
      }

      input[id*='check_']:checked + label em {
        background-position: 0 -30px;
      }
      input[id*='check_']:checked + label + div {
        max-height: 100%;
      }

      input[id*='check_'] + label + div {
        width: 100%;
        padding: 0 30px;
        max-height: 0;
        overflow: hidden;
        font-size: 11px;
        background: #ebf8ff;

        p,
        pre {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
    }
  }
`;
