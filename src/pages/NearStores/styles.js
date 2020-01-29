import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1000px;
  margin: 50px auto;

  display: flex;
  flex-direction: column;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    strong {
      font-size: 24px;
      color: #000;
      font-weight: bold;
      font-family: 'Roboto', sans-serif;
    }

    strong {
      color: #000;
      font-size: 24px;
      margin: 0 15px;
    }
  }

  ul {
    display: grid;
    grid-gap: 15px;
    margin-top: 30px;
  }

  div {
    p {
      font-size: 20px;
      color: #000;
      font-weight: bold;
      font-family: 'Roboto', sans-serif;
    }

    input {
      width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    }
  }
`;

