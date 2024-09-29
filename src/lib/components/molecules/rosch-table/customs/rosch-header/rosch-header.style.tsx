import styled from "styled-components";


export interface TableHeaderStyledProps {

};

const TableHeaderStyled = styled.thead<TableHeaderStyledProps>`
    th {
        text-align: left;
    }
`;

export { TableHeaderStyled };