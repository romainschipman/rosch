import styled from "styled-components";

const StandaloneWrapperStyled = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow-x: hidden;

    .standalone-header-title {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #c2e8ff;
        padding: 10px;
        letter-spacing: 2px;
        text-transform: uppercase;
    }

    .standalone-header-body {
        background-color: #ffffff;
        margin: 10px;
        padding: 30px;
        letter-spacing: 2px;
        display: flex;
        flex-direction: column;
        align-items: center;
        overflow-y: scroll;
        gap: 10px;
    }

    .standalone-components-slider {
        background-color: #ffffff;
        padding: 10px;
        display: flex;
        gap: 15px;
        overflow-x: scroll;
        min-height: 2.5rem;

        .component-item {
            background-color: #f8f8f8;
            padding: 10px;
            cursor: pointer;
            min-width: 150px;
            display: flex;
            justify-content: center;
        }

        .component-item__selected {
            background-color: #57c1ff;
            color: white;
        }

`;

export { StandaloneWrapperStyled };