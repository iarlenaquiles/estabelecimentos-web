import styled from 'styled-components';

export const Estabelecimento = styled.li`
  background: #fff;
  box-shadow: 0 0 14px 0 rgba(0, 0, 0, 0.02);
  border-radius: 2px;
  padding: 20px;

  display: flex;
  flex-direction: row;
  align-items: center;

  header {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  div strong p {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-right: 20px;
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
  display: block;
}
`;
