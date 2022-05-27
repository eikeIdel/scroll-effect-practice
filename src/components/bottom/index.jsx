import React, { useState, useEffect, useRef } from "react";
import { Img1, Img2, Img3, Img4, Img0 } from "../groups/group1/pic1";

const styles = {
  BottomComponent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",

    width: "60%",
    height: "50vh",

    backgroundColor: "#E7F3F7",
    boxShadow:
      "4px 4px 20px rgba(0, 0, 0, 0.1), inset 4px 4px 20px rgba(0, 0, 0, 0.1)",
    borderRadius: "20px",
  },
  img: {
    maxWidth: "90%",
    maxHeight: "90%",
  },
  scrollDiv: {
    overflowY: "hidden ",
    overflowX: "hidden",
    scrollBehavior: "smooth",
  },
  container: {
    width: "50%",
    height: "100%",
    overflow: "auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    display: "flex",
  },
};

function BottonComponent({ props: { group, setGroup, deltaY, setDeltaY } }) {
  //reference to the element to where the view jumps after event
  const scrollToZero = useRef();
  const scrollToOne = useRef();
  const scrollToTwo = useRef();
  const scrollToThree = useRef();
  const scrollToFour = useRef();
  const refContainer = useRef();

  const [visibleSlide, setVisibleSlide] = useState(0);
  const [rearrangePos, setRearrangePos] = useState(false);

  const slideRefs = [
    scrollToZero,
    scrollToOne,
    scrollToTwo,
    scrollToThree,
    scrollToFour,
  ];
  //read out with onWheel if the user scrolls up or down. then declare which page/element/slide is visibile
  useEffect(() => {
    if (deltaY < 0 && visibleSlide !== 0) setVisibleSlide(visibleSlide - 1);
    else if (deltaY > 0 && visibleSlide !== 4)
      setVisibleSlide(visibleSlide + 1);
    else if (deltaY === 0) return;
    setDeltaY(0);
    console.log({ deltaY, visibleSlide });
    console.log(
      { refContainer: refContainer?.current.getBoundingClientRect().top },
      { scrollToZero: scrollToZero?.current.getBoundingClientRect().top }
    );
    console.log({ scrollTop: refContainer?.current.scrollTop });

    // console.log(window.innerHeight, window.innerWidth);
  }, [deltaY]);

  //after updating the visibleSlide turn the number value (=== element index) to the ref name and scroll to the loaction with scrollIntoView
  useEffect(() => {
    switch (visibleSlide) {
      case 0:
        scrollToZero.current.scrollIntoView();
        break;
      case 1:
        scrollToOne.current.scrollIntoView();
        break;
      case 2:
        scrollToTwo.current.scrollIntoView();
        break;
      case 3:
        scrollToThree.current.scrollIntoView();
        break;
      case 4:
        scrollToFour.current.scrollIntoView();
        break;
      default:
        break;
    }
    setTimeout(() => checkAgain(), 500);
  }, [visibleSlide]);

  function checkAgain() {
    console.log("triggered");

    slideRefs[visibleSlide].current.scrollIntoView();
  }

  return (
    <div style={styles.BottomComponent}>
      <div style={styles.buttonContainer}>
        <button onClick={() => scrollToZero.current.scrollIntoView()}>
          Top
        </button>
        <button onClick={() => scrollToOne.current.scrollIntoView()}>
          One
        </button>
        <button onClick={() => scrollToTwo.current.scrollIntoView()}>
          Two
        </button>
        <button onClick={() => scrollToThree.current.scrollIntoView()}>
          Three
        </button>
        <button onClick={() => scrollToFour.current.scrollIntoView()}>
          Bottom
        </button>
      </div>

      <div style={styles.scrollDiv} ref={refContainer}>
        <Img0 childRef={scrollToZero} />
        <Img1 childRef={scrollToOne} />
        <Img2 childRef={scrollToTwo} />
        <Img3 childRef={scrollToThree} />
        <Img4 childRef={scrollToFour} />
      </div>
    </div>
  );
}

export default BottonComponent;
