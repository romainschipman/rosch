import styled from "styled-components";

export interface RoschTableCellStyledProps {
    textAlign?: "left" | "center" | "right";
}

const RoschTableCellStyled = styled.td<RoschTableCellStyledProps>`
    padding: 10px;
    text-align: ${props => props.textAlign};
`;

export { RoschTableCellStyled };