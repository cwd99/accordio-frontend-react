import React, {useState} from 'react'


const ImageUpload = () => {
    const [image, setImage] = useState(null)
    const maxImageFileSize = 1000000

    const imageSelectedHandler = event => {
        const uploadedImage = event.target.files[0]
        if ( uploadedImage.size > maxImageFileSize ){
            console.log("too big")
        }else{
            console.log("image sent to state")
            setImage(uploadedImage)
        }
    }
    const imageUploadHandler = event => {
        console.dir(image)
        //send image to back end
    }


    return (
    <div className="ImageUpload">
        <input type="file" onChange={imageSelectedHandler}/>
        <button onClick={imageUploadHandler}>Upload</button>
    </div>
    )
}

export default ImageUpload