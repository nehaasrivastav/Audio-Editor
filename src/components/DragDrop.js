import React, { useState } from 'react'
import { useDrop } from 'react-dnd'
import Audio from './Audio'
import betterday from '../Tracks/better-day.mp3'
import perfect from '../Tracks/perfect-beauty.mp3'
import glossy from '../Tracks/glossy.mp3'
import AudioPlayer from './AudioPlayer';
import '../App.css';

const AudioList = [
    {
        id: 1,
        url: betterday,
        name: "Better Day.mp3",
        image: "https://cdn.pixabay.com/audio/2024/02/14/22-35-32-207_200x200.png"
    },
    {
        id: 2,
        url: perfect,
        name: "Perfect.mp3",
        image: "https://cdn.pixabay.com/audio/2023/10/06/12-10-40-317_200x200.png"
    },
    {
        id: 3,
        url: glossy,
        name: "Glossy.mp3",
        image: "https://cdn.pixabay.com/audio/2023/08/22/09-24-09-858_200x200.jpg"
    },
]


function DragDrop() {

    const [editor, setEditor] = useState([]);

    const [{ isOver }, drop] = useDrop(() => ({
        accept: "image",
        drop: (item) => addAudioToEditor(item.id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        })
    }))

    const addAudioToEditor = (id) => {
        const audio = AudioList.find(a => a.id === id);
        setEditor(prevEditor => [...prevEditor, audio]);
    };



    return (
        <>
            <div className='d-flex flex-column align-items-center justify-content-center h-75'>
                <div className='d-flex  flex-wrap mx-3 tracks mt-5 '>
                    {AudioList.map((a) => {
                        return (
                            <>
                                <Audio id={a.id} url={a.url} image={a.image} name={a.name} />
                            </>
                        )
                    })}
                </div>


                <div ref={drop} className='editor d-flex flex-column border border-secondary w-75 h-50 rounded mb-3' >
                    {editor.map((a) => {
                        return (
                            <>
                                <Audio id={a.id} url={a.url} name={a.name} />
                            </>
                        )
                    })}
                </div>

                <div>
                    <AudioPlayer currentSongUrl={editor.length > 0 ? editor[0].url : ''} />
                </div>
            </div>
        </>
    )
}

export default DragDrop
