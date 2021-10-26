import styled from 'styled-components';

export const Background = styled.div`
  background-color: #f0f0f0;
  width: 100%;
  min-height: calc(100% - 120px);
`;

export const TableContainer = styled.div`
  width: 80%;
  margin: 100px auto 0px;
  background-color: #ffffffe5;
  border: 0.5px solid #6727f2;
  border-radius: 5px;
`;

export const TableHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;

  button {
    color: #fff;
    background: #6d5bd0;
    padding: 8px 15px;
    font-size: 16px;
    font-weight: bold;
    border: none;
    border-radius: 6px;
    color: #fff;
    margin-left: 16px;
  }
`;

export const InputSearch = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #6d5bd0;
  width: 220px;
  background: #f4f2ff;
  padding: 10px;
  border-radius: 6px;

  input {
    margin-left: 5px;
    border: none;
    background: #f4f2ff;
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  th,
  td {
    border-top: 0.5px solid #6727f2;
    border-bottom: 0.5px solid #6727f2;
  }

  thead {
    th {
      background: rgba(61, 24, 140, 0.1);
      color: #000000;
      padding: 15px 12px;
      font-size: 15px;
      text-align: center;
      text-transform: uppercase;
    }
  }

  tbody {
    td {
      text-align: center;
      padding: 12px;
      font-size: 14px;
      color: #000000;
      font-weight: bold;
    }
  }

  .table-row-light {
    background-color: #f2f2f2;
  }

  .table-row-dark {
    background-color: rgba(252, 252, 252, 0.6);
  }
`;

export const TableFooter = styled.div`
  height: 40px;
  width: 100%;
  border-radius: 0px 0px 5px 5px;
  background: rgba(61, 24, 140, 0.1);
`;
