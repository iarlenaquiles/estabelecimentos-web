import styled from 'styled-components';

export const Estabelecimento = styled.li`
  background: #fff;
  box-shadow: 0 0 14px 0 rgba(0, 0, 0, 0.02);
  border-radius: 2px;
  padding: 20px;

  header {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  header img {
    width: 54px;
    height: 54px;
    border-radius: 50%;
  }

  strong {
  display: block;
  font-size: 16px;
  color: #333;
}

span {
  font-size: 13px;
  color: #999;
  margin-top: 2px;
}

p {
  color: #666;
  font-size: 14px;
  line-height: 20px;
  margin: 10px 0;
}
`;
