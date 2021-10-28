import React from 'react';
import {useForm} from 'react-hook-form'
// import ShowImage from './ShowImage'
// import defaultCoverPhoto from './images/defaultCoverPhoto.jpeg'

const ImageUpload = () => {
    // const [image, setImage] = useState(defaultCoverPhoto)
    const maxImageFileSize = 1000000

    const {register, handleSubmit} = useForm()

    const onSubmit = (image) => {
        console.log(image)
    }



    return (
    <form onSubmit={handleSubmit(onSubmit)} className="ImageUpload">
        {/* <ShowImage image={image}/> */}
        <input ref={register} type='file' name='coverPhot' />
        <button>Upload Image</button>
    </form>
    )
}

export default ImageUpload