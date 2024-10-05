import styled from "styled-components";

const RoschUploadFileStyled = styled.div`
    width: 10rem;
    height: 10rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.5rem;
    
    .upload__box {
        width: 10rem;
        height: 10rem;
        border: 1px solid #ccc;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }
    
    .upload__box_image {
        width: 100%;
        height: 100%;
    }
    
    .upload__box__content {
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        line-height: 1.5rem;
        padding: 1rem;
    }
`;

export { RoschUploadFileStyled };