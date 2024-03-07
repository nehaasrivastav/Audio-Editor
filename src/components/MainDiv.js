import React, { useState } from 'react'
import DragDrop from './DragDrop';
import { FiUpload } from "react-icons/fi";

function MainDiv() {
  const handleUpload = async () => {
    try {
      const fileInput = document.createElement('input');
      fileInput.type = 'file';
      fileInput.accept = 'audio/*';
      fileInput.onchange = (e) => {
        const file = e.target.files[0];
        if (file) {
          const audioObject = {
            id: Date.now(),
            url: URL.createObjectURL(file),
            name: file.name,
            image: ""
          };

          console.log(audioObject);
        }
      };
      fileInput.click();
    } catch (error) {
      console.error('Error uploading file: ', error);
    }
  };

  return (
    <>
      <div className="d-flex flex-column bg-dark w-100 text-danger" style={{ height: "100vh" }}>
        <button id='UploadButton' onClick={handleUpload}><FiUpload size={28} /></button>
        <DragDrop />
      </div>
    </>

  )
}

export default MainDiv
