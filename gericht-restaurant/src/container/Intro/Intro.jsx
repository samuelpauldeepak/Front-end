import React, { useRef, useState } from "react";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";
import { meal } from "../../constants";
import "./Intro.css";

const Intro = () => {
  const [playVid, setPlayVid] = useState(false);
  const vidRef = useRef();
  const handleClick = () => {
    setPlayVid((prev) => !prev);
    if (!playVid) {
      vidRef.current.play();
    } else {
      vidRef.current.pause();
    }
  };

  return (
    <div className="app__video">
      <video
        src={meal}
        typeof="video/mp4"
        loop
        controls={false}
        muted
        ref={vidRef}
      />
      <div className="app__video-overlay flex__center">
        <div
          className="app__video-overlay_circle flex__center"
          onClick={handleClick}
        >
          {playVid ? (
            <BsPauseFill color="#fff" fontSize={30} />
          ) : (
            <BsFillPlayFill color="#fff" fontSize={30} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Intro;
