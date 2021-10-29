import React from 'react'

const ShowImage = (props) => {

    return (
        <div>
            <img src={props.image} alt="Cover for your case study" width="182" height="182"/>
        </div>

    )
}
export default ShowImage