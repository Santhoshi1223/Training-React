import React, {useState, useRef, useEffect} from 'react'
import VIDEO from "./components/video.mp4";
const RefExamples = ()=>{

    const [play, setPlay]=useState(true);
    const eleRef=useRef();
    const videoRef=useRef();
    console.log(videoRef);
    useEffect(()=>{
        eleRef.current.style="teal";
        eleRef.current.innerText="React Ref"
    });

    let playORpause=()=>{
        if (play==true){
            videoRef.current.play();
            console.log(play);
            setPlay(false);
        }
    }
    return (
        <div>
            <h1> ref={eleRef} RefExamples</h1>
            <video src = {VIDEO} ref={videoRef} onClick={playORpause}></video>
        </div>
    )
}
export default RefExamples;