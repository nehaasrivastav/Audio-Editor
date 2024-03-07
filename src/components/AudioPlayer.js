import React, { useRef, useState } from 'react'
import { FaPlay } from "react-icons/fa";
import { FaRegPauseCircle } from "react-icons/fa";
import { IoVolumeHigh } from "react-icons/io5";
import { MdForward30 } from "react-icons/md";
import { MdOutlineReplay30 } from "react-icons/md";
import '../App.css';


function AudioPlayer({ currentSongUrl}) {

    const [isPlaying, setIsPlaying] = useState(false);
    const audioPlayer = useRef();

    const togglePlayPause = () => {

        if (!isPlaying) {
            audioPlayer.current.play();
        }
        else {
            audioPlayer.current.pause();
        }
        setIsPlaying(prev => !prev)
    }


    return (
        <div class="d-flex flex-row  bg-secondary h-75 w-100 border rounded-pill  align-items-center justify-content-center ">
            <div className="box m-0" >
                <audio ref={audioPlayer} src={currentSongUrl} ></audio>
                <button><IoVolumeHigh size={28} /></button>
                <input id='Volumeslider' type='range' min="0" max="1" step="0.05"  ></input>
                <button><MdOutlineReplay30 size={28} /> </button>
                <button onClick={togglePlayPause}> {isPlaying ? <FaRegPauseCircle size={28} /> : <FaPlay size={28} />}</button>
                <button><MdForward30 size={28} /></button>
            </div>

        </div>


    )
}

export default AudioPlayer
