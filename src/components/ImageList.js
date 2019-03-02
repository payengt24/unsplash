import React from 'react'

const ImageList = (props) => {

    // console.log(props.images);

    const displayImages= props.images.map(( image ) => {
        return (
            <img  key={image.id} src={image.urls.regular}/>
        )
    })

    // console.log(displayImages);

  return (
    <div>
    <h1>Images</h1>
    {displayImages}
    
    </div>
  )
}

export default ImageList
