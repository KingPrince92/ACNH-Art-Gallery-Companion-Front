import { useEffect, useState } from "react";
import "./Carousel.css";

const Carousel = (Props: any) => {
  const { children } = Props;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [length, setLength] = useState(children.length);

  const next = () => {
    if (currentIndex < length - 1) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  useEffect(() => {
    setLength(children.length);
  }, [children]);

  return (
    <div className="carousel-container">
      <div className="carousel-wrapper">
        {currentIndex > 0 && (
          <button onClick={prev} className="left-arrow">
            &lt;
          </button>
        )}
        <div className="carousel-content-wrapper">
          {currentIndex < length - 1 && (
            <button onClick={next} className="right-arrow">
              &gt;
            </button>
          )}
          <div
            className="carousel-content"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
