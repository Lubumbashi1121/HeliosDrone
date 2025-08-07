import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import LoadingScreen from "./LoadingScreen";

function IpariAloldal() {
  const [videoLoading, setVideoLoading] = useState(true);
  const [videoSrc, setVideoSrc] = useState("");
  const location = useLocation();

  const heroSectionRef = useRef(null);
  const contentSectionRef = useRef(null);
  const videoElementRef = useRef(null);

  // Handle scroll-to-top on pathname change
  useEffect(() => {
    if (location.pathname === "/ipar") {
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
      setVideoSrc("/ipari.webm");
    } else if (width >= 854) {
      setVideoSrc("/ipari-tablet.webm");
    } else {
      setVideoSrc("/ipari-mobile.webm");
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
            <h2>Innovatív drónmegoldások az ipar számára.</h2>
            <h3>
              Napelemparkok, vezetékek és ipari létesítmények vizsgálata és
              térképezése, építkezési folyamatok nyomon követése drónok
              segítségével.
            </h3>
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

      <section className="content-section" ref={contentSectionRef}>
        <div className="content-wrapper">
          <h2>Felmérés és térképezés</h2>
          <div className="content-container">
            <img
              src="/assets/felmeres.jpg"
              loading="lazy"
              alt="Felmérés"
              className="content-image content-image-left"
            />
            <div className="content-text">
              <h3>Légi térképezés nagy pontosságú adatokkal</h3>
              <p>
                A légi térképezés során a drón egy előre megtervezett út alapján, az{" "}
                <strong>RTK</strong> technológiának köszönhetően centiméteres
                pontosságú képeket készít nagy területekről vagy épületekről.
                <span className="custom-br">
                  <br />
                </span>
                Az így kapott <strong>2D</strong> illetve <strong>3D modelleken</strong> utólag
                szoftverek segítségével el tudjuk végezni az ügyfél által kért utómunkákat,
                legyen szó <strong>mérésekről, korábbi állapottal való összehasonlításról, térinformatikai adatokról.</strong>
                <span className="custom-br">
                  <br />
                </span>
                Ezek a modellek segítik az <strong>infrastruktúra-tervezést, építkezést, városfejlesztést,</strong>{" "}
                valamint <strong>környezetvédelmi projekteket.</strong> A drónos módszer{" "}
                <strong>gyorsabb, pontosabb és költséghatékonyabb,</strong> mint a hagyományos földi felmérések.
              </p>
            </div>
          </div>

          <h2>Infrastruktúra monitoring</h2>
          <div className="content-container">
            <img
              src="/assets/epitkezes.jpg"
              loading="lazy"
              alt="Építkezés"
              className="content-image content-image-right"
            />
            <div className="content-text">
              <h3>Építkezések előrehaladásának követése, ipari létesítmények felmérése</h3>
              <p>
                Manuális vagy automatizált repülés során a drón részletes képeket és videókat készít
                nehezen hozzáférhető, veszélyes helyszínekről – például{" "}
                <strong>épületekről</strong>, <strong>napelemparkokról</strong> vagy{" "}
                <strong>elektromos hálózatokról</strong>. A fejlett kamerarendszer akár{" "}
                <strong>112x</strong>-es zoomot is lehetővé tesz, így a legkisebb hibák is időben
                észlelhetők.
                <span className="custom-br">
                  <br />
                </span>
                A rendszeres repülések nyomon követhetővé teszik a projekt előrehaladását, és segítenek a váratlan költségek
                elkerülésében. A drónos módszer <strong>gyorsabb, biztonságosabb</strong> és{" "}
                <strong>költséghatékonyabb</strong> a hagyományos ellenőrzéseknél.
              </p>
            </div>
          </div>

          <h2>Környezetvédelmi és kárfelmérés</h2>
          <div className="content-container">
            <img
              src="/assets/karfelmeres.jpg"
              loading="lazy"
              alt="Kárfelmérés"
              className="content-image content-image-left"
            />
            <div className="content-text">
              <h3>Gyors, biztonságos és pontos kárfelmérés légi felvételekkel</h3>
              <p>
                A környezetvédelmi és kárfelmérési munkák során drónjaink segítségével gyorsan és biztonságosan dokumentáljuk
                a természeti károk mértékét, legyen szó <strong>viharkárokról, belvízről, árvízről</strong> vagy egyéb
                környezeti eseményekről.
                <span className="custom-br">
                  <br />
                </span>
                Az elkészült nagyfelbontású légi felvételek alapján pontosan felmérhető a környezeti károk mértéke. Az így szerzett
                adatokkal gyorsan, költséghatékonyan és <strong>emberi élet veszélyeztetése nélkül</strong> végezhető el a
                kárfelmérés, akár nehezen megközelíthető vagy veszélyes helyszíneken is.
                <span className="custom-br">
                  <br />
                </span>
                Az elkészült vizuális dokumentáció lehetővé teszi a helyreállítási munkák pontosabb tervezését,{" "}
                <strong>felgyorsítja a döntéshozatalt</strong>, és biztosítja a szabályozói megfelelést. A drónnal történő
                vizsgálatok jelentősen csökkentik a felmérésekhez szükséges időt, a költségeket, valamint a humán
                erőforrás-igényt is.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default IpariAloldal;
