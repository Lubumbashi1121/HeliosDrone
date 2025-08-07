import { useEffect } from "react";
import $ from "jquery";
import "magnific-popup";

const images = Array.from({ length: 18 }, (_, i) => {
  const id = i + 1;
  return {
    thumb: `/assets/thumb${id}.webp`,
    full: `/assets/${id}.webp`,  
  };
});

const GaleriaAloldal = () => {
  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);

    // Initialize Magnific Popup
    $(".popup-gallery").magnificPopup({
      delegate: "a",
      type: "image",
      mainClass: "mfp-img-mobile",
      gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0, 1],
        tCounter: "%curr%/%total%",
      },
      image: {
        tError: "Nem sikerült a kép betöltése.",
        titleSrc: (item) => item.el.attr("title") || "",
      },
    });
  }, []);

  return (
    <div className="gallery_container">
      <div className="popup-gallery">
        {images.map((img, index) => (
          <div className="gallery_item" key={index}>
            <a className="hover_affect_nlf position-relative" href={img.full}>
              <img
                src={img.thumb}
                alt={`Thumbnail ${index + 1}`}
                loading="lazy"
              />
              <span className="singicon_btn_nlf">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  className="bi bi-plus-circle-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3z" />
                </svg>
              </span>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GaleriaAloldal;
