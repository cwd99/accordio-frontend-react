import React from 'react'

const imageUpload = () => {
    const fileSelectedHandler = event => {
        console.log(event)
    }


    return (
    <div className="imageUpload">
        <input type="file" onChange={fileSelectedHandler}/>
    </div>
    )
}

export default imageUpload