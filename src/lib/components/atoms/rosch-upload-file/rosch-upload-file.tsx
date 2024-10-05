import { ChangeEvent, FunctionComponent } from "react";
import { RoschUploadFileStyled } from "./rosch-upload-file.style";
import { RoschText } from "../rosch-text/rosch-text";

export interface RoschUploadFileProps {
    className?: string;
    urlImg?: string;
    onFileChange?: (file: File) => void;
}

const RoschUploadFile : FunctionComponent<RoschUploadFileProps> = ({ className, onFileChange, urlImg }) => {
    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        const selectedFile = event.target.files?.[0];
        if (selectedFile && selectedFile.type.startsWith("image/") && onFileChange) {
            onFileChange(selectedFile);
        }
    };

    //let url = "http://localhost:8000/uploads/1728149149184-collection-diamond.png";

    return (
        <RoschUploadFileStyled className={className}>
            <label htmlFor="file-upload" className="upload__box">
                <input
                    id="file-upload"
                    type="file"
                    accept="image/*"
                    style={{display: "none"}}
                    onChange={handleFileChange}
                />
                {
                    !urlImg ?
                        <div className="upload__box__content">
                            <RoschText id={"dz"} fontSize="xs">Cliquez ici pour uploader un fichier</RoschText>
                        </div>
                        :
                        <img src={urlImg} className="upload__box_image" alt=""/>
                }

            </label>
        </RoschUploadFileStyled>
    );
};

export { RoschUploadFile };