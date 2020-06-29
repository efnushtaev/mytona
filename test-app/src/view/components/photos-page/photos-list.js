import React from 'react';

const PhotosList = ({photosList}) => {
  return photosList.map(e => {
    return <img className={"img-thumbnail"} style={{width:'10%'}} src={e.thumbnailUrl}/>
  })
}

export default PhotosList