import React from 'react'

const PhotosDetail = ({data}) => {
    //console.log('props:', data)
    return(
        <div className="card" key={data.id}>
            <div className="card-header">
                <p className="car-header-title">
                {
                    data.title
                }
                </p>
            </div>
            <div className="card-content">
                <img src={data.thumbnailUrl}/>
            </div>
        </div>
    )
}   


export default PhotosDetail