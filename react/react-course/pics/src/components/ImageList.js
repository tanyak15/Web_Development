import './ImageList.css';
import React from "react";
import ImageCard from './ImageCard'

const ImageList = (props) => {
    const images = props.images.map
    // destructuring
    ((image) => {
       return <ImageCard key={image.id} image={image}/>
    })
    return <div className='image-list'>{images}</div>
}

// const ImageList = (props) => {
//     const images = props.images.map((image) => {
//        return <img alt={image.description} key={image.id} src={image.urls.regular}/>
//     })
//     return <div>{images}</div>
// }

// OR 

// const ImageList = (props) => {
//     return props.images.map((image) => {
//        return <img src={image.urls.regular}/>
//     })
// }

export default ImageList;