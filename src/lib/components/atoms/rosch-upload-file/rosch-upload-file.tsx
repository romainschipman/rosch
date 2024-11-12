import { ChangeEvent, FunctionComponent } from "react";
import { RoschUploadFileStyled } from "./rosch-upload-file.style";
import { RoschText } from "../rosch-text/rosch-text";

export interface RoschUploadFileProps {
    id: string;
    className?: string;
    urlImg?: string;
    onFileChange?: (file: File) => void;
}

const RoschUploadFile : FunctionComponent<RoschUploadFileProps> = ({ id, className, onFileChange, urlImg }) => {
    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        const selectedFile = event.target.files?.[0];
        if (selectedFile && selectedFile.type.startsWith("image/") && onFileChange) {
            onFileChange(selectedFile);
        }
    };

    return (
        <RoschUploadFileStyled className={className}>
            <label htmlFor={`upload-file-${id}`} className="upload__box">
                <input
                    id={`upload-file-${id}`}
                    type="file"
                    accept="image/*"
                    style={{display: "none"}}
                    onChange={handleFileChange}
                />
                {
                    !urlImg ?
                        <div className="upload__box__content">
                            <RoschText id={`upload-file-text-${id}`} fontSize="xs">Cliquez ici pour uploader un fichier</RoschText>
                        </div>
                        :
                        <img src={urlImg} className="upload__box_image" alt=""/>
                }

            </label>
        </RoschUploadFileStyled>
    );
};

export { RoschUploadFile };