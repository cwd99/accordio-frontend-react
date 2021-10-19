import React, {useState} from 'react'
import ShowImage from './ShowImage'
//import default image here

const ImageUpload = () => {
    const [image, setImage] = useState(null) //insert default image here
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
        <ShowImage image={image}/>
        <input type="file" onChange={imageSelectedHandler}/>
        <button onClick={imageUploadHandler}>Upload</button>
    </div>
    )
}

export default ImageUpload