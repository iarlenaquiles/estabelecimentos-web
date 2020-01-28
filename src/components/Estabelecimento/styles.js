import styled from 'styled-components';
import { darken } from 'polished';

export const Estabelecimento = styled.li`
  background: #fff;
  box-shadow: 0 0 14px 0 rgba(0, 0, 0, 0.02);
  border-radius: 2px;
  padding: 20px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  align-content: center;

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

export const Aside = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
`;

export const Actions = styled.div`
      display: flex;
      flex-direction: row;
      align-self: center;
      align-items: center;
      align-content: center;

      button.cancelar {
        display: flex;
        flex-direction: row;
        align-self: flex-end;
        align-items: center;
        margin: 5px 0 0;
        margin-left: 10px;
        height: 44px;
        padding: 5px;
        background: #f94d6a;
        font-weight: bold;
        color: #fff;
        border: 0;
        border-radius: 4px;
        font-size: 16px;
        transition: background 0.2s;

        &:hover {
          background: ${darken(0.03, '#F94D6A')};
        }
      }

      button.editar {
        display: flex;
        flex-direction: row;
        align-self: flex-end;
        align-items: center;
        margin: 5px 0 0;
        height: 44px;
        padding: 5px;
        background: #4dbaf9;
        font-weight: bold;
        color: #fff;
        border: 0;
        border-radius: 4px;
        font-size: 16px;
        transition: background 0.2s;

        &:hover {
          background: ${darken(0.03, '#4DBAF9')};
        }
      }


    svg {
      align-self: flex-start;
      margin-right: 5px;
    }
    strong {
      color: #fff;
      font-size: 24px;
      margin: 0 15px;
    }

`;
