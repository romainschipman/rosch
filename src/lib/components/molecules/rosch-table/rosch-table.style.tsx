import { CssProperties } from "../../../interfaces/css-properties.interface";
import styled from "styled-components";

export interface RoschTableStyledProps extends CssProperties {

}

const RoschTableStyled = styled.table`
    border-collapse: collapse;
    thead, tr {
        border-bottom: 1px solid #EDEDED;
    }
    tr:last-of-type {
        border:0;
    }
    td, th {
        min-width: 10rem;
        padding: 1rem;
    }
`;

export { RoschTableStyled };