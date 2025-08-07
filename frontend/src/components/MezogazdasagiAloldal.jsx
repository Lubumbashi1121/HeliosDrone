import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import LoadingScreen from "./LoadingScreen";

function MezogazdasagiAloldal() {
  const [videoLoading, setVideoLoading] = useState(true);
  const [videoSrc, setVideoSrc] = useState("");
  const location = useLocation();
  
  const heroSectionRef = useRef(null);
  const contentSectionRef = useRef(null);
  const videoElementRef = useRef(null);

  // Handle scroll-to-top on pathname change
  useEffect(() => {
    if (location.pathname === "/mezogazdasag") {
      window.scrollTo(0, 0);
    }

    const adjustContentMargin = () => {
      if (heroSectionRef.current && contentSectionRef.current) {
        contentSectionRef.current.style.marginTop = `${heroSectionRef.current.getBoundingClientRect().height}px`;
      }
    };

    adjustContentMargin();
    window.addEventListener("resize", adjustContentMargin);

    return () => {
      window.removeEventListener("resize", adjustContentMargin);
    };
  }, [location.pathname]);

  // Set video source based on screen width
  useEffect(() => {
    const width = window.innerWidth;
    if (width >= 1280) {
      setVideoSrc("/mezogazdasagi.webm");
    } else if (width >= 854) {
      setVideoSrc("/mezogazdasagi-tablet.webm");
    } else {
      setVideoSrc("/mezogazdasagi-mobile.webm");
    }
  }, []);

  // Play video when it can play
  useEffect(() => {
    const videoElement = videoElementRef.current;
    if (videoElement) {
      const handleCanPlay = () => {
        setVideoLoading(false);
        videoElement.play();
      };

      videoElement.addEventListener("canplay", handleCanPlay);

      return () => {
        videoElement.removeEventListener("canplay", handleCanPlay);
      };
    }
  }, []);

  return (
    <>
      <section className="hero hero2" ref={heroSectionRef}>
        <div className="hero-video-container hero-video-container2">
          {videoLoading && <LoadingScreen />}
          <video
            className="hero-video hero-video2"
            ref={videoElementRef}
            autoPlay
            muted
            playsInline
            loop
            preload="auto"
          >
            {videoSrc && <source src={videoSrc} type="video/webm" />}
            Your browser does not support the video tag.
          </video>

          <div className="hero-text">
            <h2>Precíziós dróntechnológia a mezőgazdaság szolgálatában.</h2>
            <h3>Multispektrális felmérések, permetezés és területmonitoring drónokkal - gyorsabb, pontosabb és fenntarthatóbb megoldások a modern mezőgazdaság számára.</h3>
          </div>

          <div
            className="arrow"
            onClick={() => {
              if (contentSectionRef.current) {
                const navbarHeight = 83;
                window.scrollTo({
                  top: contentSectionRef.current.offsetTop - navbarHeight,
                  behavior: "smooth",
                });
              }
            }}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </section>

      <section className="content-section content-section-mezogazdasag" ref={contentSectionRef}>
        <div className="content-wrapper">
          <h2>Növényállapot-ellenőrzés és multispektrális felmérés</h2>
          <div className="content-container">
            <img
              src="/assets/ndvi1.jpg"
              loading="lazy"
              alt="Felmérés"
              className="content-image content-image-left"
            />
            <div className="content-text">
              <p>
                A <strong>multispektrális elemzés</strong> során a drónra szerelt speciális kamerák több különböző hullámhosszon – például látható fényben, közeli infravörösben – készítenek felvételeket a növényzetről. Mivel az egészséges és stresszes növények eltérő módon verik vissza ezeket a fénysávokat, az így nyert képekből kiszámítható például a <strong>NDVI-index</strong>, amely pontosan jelzi a növények állapotát.
                <span className="custom-br" /><br />
                Ezek az adatok alapot adnak a <strong>differenciált</strong>, célzott beavatkozásokhoz, így elkerülhető a felesleges vegyszerhasználat, csökken a környezeti terhelés és <strong>optimalizálható a terméshozam</strong>.
                <span className="custom-br" /><br />
                A repüléses felmérés <strong>nagy területeket</strong> fed le gyorsan, költséghatékonyan és fenntartható módon, akár nehezen megközelíthető területeken is.
                <span className="custom-br" /><br />
                Minden felmérésről részletes, <strong>átlátható reportot</strong> készítünk, ami megkönnyíti az ügyfelek döntéshozatalát.
              </p>
            </div>
          </div>

          <h2>Drónos permetezés és precíziós kijuttatás</h2>
          <div className="content-container">
            <img
              src="/assets/ndvi2.jpg"
              loading="lazy"
              alt="Építkezés"
              className="content-image content-image-right"
            />
            <div className="content-text">
              <p>
                A drónos permetezés <strong>egyenletesebb fedést, minimális taposási kárt</strong> és <strong>pontosabb kijuttatást</strong> biztosít, mint a hagyományos földi gépek. Az automatizált, <strong>differenciált</strong> kijuttatási tervvel a permetezés kizárólag oda kerül, ahol valóban szükség van rá, így csökkenthetők a költségek és a túlzott vegyszerhasználat, valamint <strong>környezetkímélőbb</strong> is.
                <span className="custom-br" /><br />
                Kiemelten fontos számunkra a <strong>bio növényvédő szerek</strong> alkalmazása, amelyek nemcsak hatékonyan védenek, hanem támogatják a növények immunrendszerét is – különösen a klímaváltozás okozta stresszhatásokkal szemben.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default MezogazdasagiAloldal;
