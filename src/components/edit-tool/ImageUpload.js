import React, {useState} from 'react'
import ShowImage from './ShowImage'
import defaultCoverPhoto from './images/defaultCoverPhoto.jpeg'

const ImageUpload = () => {
    const [image, setImage] = useState(defaultCoverPhoto)
    const maxImageFileSize = 1000000

    const imageSelectedHandler = event => {
        const uploadedImage = event.target.files[0]
        if ( uploadedImage.size > maxImageFileSize ){
            console.log("too big")
        }else{
            console.log("image sent to state")
            console.dir(uploadedImage)
            setImage(uploadedImage)
        }
    }
    const imageUploadHandler = event => {
        console.dir(image)
        //send image to back end
    }


    return (
    <div className="ImageUpload">
        <ShowImage image={image}/>
        <input 
         style={{display: 'none'}} 
         type="file" 
         onChange={imageSelectedHandler}
         ref={fileInput => this.fileInput = fileInput}/>
        <button onClick={() => this.fileInput.click()}>Pick File</button>
        <button onClick={imageUploadHandler}>Upload</button>
    </div>
    )
}

export default ImageUpload