import { MdCloudUpload } from "react-icons/md"
import "./upload-button.css"

const uploadIconStyles = {
    color: "white",
    fontSize: "2.5rem"
}

function UploadButton() {

    const handleUpload = () => {
        fetch('/app/').then(res => {
            if (res.ok) {

            }
        }).then(jsonResponse => console.log(jsonResponse))
    }

    return(
        <div onClick={handleUpload} className="upload-button">
            <p>Choose a file</p>
            <MdCloudUpload style={uploadIconStyles}/>
        </div>
    )
}

export default UploadButton;