import { RoschUploadFile } from "../../../../lib/components/atoms/rosch-upload-file/rosch-upload-file";
import { useState } from "react";

const UploadFileStandalone =  () => {
    const [urlImg, setUrlImg] = useState<string | undefined>(undefined);

    const onFileChange = (file: File) => {
        let url = URL.createObjectURL(file);
        setUrlImg(url);
    };

    return (
        <div>
            <RoschUploadFile urlImg={urlImg} onFileChange={onFileChange} />
        </div>  
    );
};

export { UploadFileStandalone };