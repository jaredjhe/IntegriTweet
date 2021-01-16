import { MdCloudUpload } from "react-icons/md"
import "./upload-button.css"

const uploadIconStyles = {
    color: "white",
    fontSize: "2.5rem"
}

function UploadButton() {
    return(
        <div className="upload-button">
            <p>Choose a file</p>
            <MdCloudUpload style={uploadIconStyles}/>
        </div>
    )
}

export default UploadButton;