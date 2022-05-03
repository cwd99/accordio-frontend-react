import React, {useState, useRef} from 'react'
// import defaultCoverPhoto from './images/defaultCoverPhoto.jpeg'
import avatar from '../../images/Ellipse 20.png'
import ShowAvatar from './ShowAvatar'
const ImageUpload = () => {
    const [image, setImage] = useState(avatar)
    const maxImageFileSize = 1000000

    const imageSelectedHandler = event => {
        const uploadedImage = event.target.files[0]
        if ( uploadedImage.size > maxImageFileSize ){
            console.log("too big")
        }else{
            console.log("image sent to state")
            let imageURL = URL.createObjectURL(uploadedImage)
            //console.dir(URL.creatObjectURL(uploadedImage))
            // setImage(imageURL) // URL.revokeObjectURL() needs to be called when URL is no longer needed to prevent memory leak
        }
    }
    const removeImage = () => {
        setImage(avatar)
        console.log("remove image from backend")
    }
    const imageUploadHandler = event => {
        // console.dir(image)
        //send image to back end
    }
    const inputRef = useRef();
    const fileInput = () => {
        inputRef.current.click()
    }
    const imageUploadStyle = {
        // X: 418 px;
        // Y: 216 px;
        'width': '182px',
        'height': '286px',
        'border': 'none',
        'flex-direction': 'column'
    }
    const buttonStyle = {
        'border': 'none',
        'background': 'none'
    }

    return (
    <><div style={imageUploadStyle} className="ImageUpload">
            <ShowAvatar style={{ 'width': '182px' }} image={image} />
            <input
                style={{ display: 'none' }}
                type="file"
                onChange={imageSelectedHandler}
                ref={inputRef} />
            </div>
            <div className='photo_control'>
                <button style={buttonStyle} onClick={() => fileInput()}>Change photo</button>
                <button style={buttonStyle} onClick={() => removeImage()}>Remove current</button>
            </div>
            <div div className='name_and_edit'>
                <span>Gabriela Garcia</span>
                <a href='edit_name'>Edit name</a>
            </div>
            <br />
            <div className='name_and_pronouns'>
                <span>She/Her/Hers</span>                                                
                <a href='edit_pronouns'>Edit pronouns</a>
            </div>
        
    </>
    
    )
}

export default ImageUpload