import React, { useEffect, useRef, useState } from 'react'
import { useDrag } from 'react-dnd'
import '../App.css';

function Audio({ id, url, image, name, refe }) {

  const [{ isDragging }, drag] = useDrag(() => ({
    type: "image",
    item: { id: id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    })
  }))


  return (
    <>
      <div className='d-flex flex-column mx-5 ' id='upperDiv'>
        <img ref={drag} src={image} alt='' style={{ border: isDragging ? '2px solid cyan' : '0px' }} />
        <audio src={url} alt="Audio track" ref={refe} style={{}}></audio>
        <p className='fw-normal text-warning text-uppercase text-center'>{name}  </p>
      </div>
    </>
  )
}

export default Audio


