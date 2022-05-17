import React from 'react'

const ShowImage = (props) => {

    return (
        <div className='show-image'>
            <img src={props.image} alt="Cover for your case study" />
        </div>

    )
}
export default ShowImage