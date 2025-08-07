import React, { useState, useEffect, useRef } from "react";
import LoadingScreen from "./LoadingScreen";

function Hero() {
  const [videoLoading, setVideoLoading] = useState(true);
  const [videoSrc, setVideoSrc] = useState("");
  const videoRef = useRef(null);

  // Set video source based on screen width
  useEffect(() => {
    const width = window.innerWidth;
    if (width >= 1280) {
      setVideoSrc("/dronespray.webm");
    } else if (width >= 854) {
      setVideoSrc("/dronespray-tablet.webm");
    } else {
      setVideoSrc("/dronespray-mobile.webm");
    }
  }, []);

  // Handle video loading and playing
  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    const handleCanPlay = () => {
      setVideoLoading(false);
      videoElement.play().catch((err) => {
        console.error("Video play failed:", err);
      });
    };

    videoElement.addEventListener("canplay", handleCanPlay);
    videoElement.load(); 

    return () => {
      videoElement.removeEventListener("canplay", handleCanPlay);
    };
  }, [videoSrc]);

  return (
    <section className="hero">
      <div className="hero-video-container">
        {videoLoading && <LoadingScreen />}
        <video
          className="hero-video"
          ref={videoRef}
          autoPlay
          muted
          playsInline
          loop
          preload="auto"
        >
          {videoSrc && <source src={videoSrc} type="video/webm" />}
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
}

export default Hero;
