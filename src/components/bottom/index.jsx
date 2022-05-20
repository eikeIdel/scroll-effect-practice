import React, { useState, useEffect, useRef } from "react";
// import { useSprings, animated } from "react-spring";
import image11 from "../../assets/image-1-1.jpg";
import image12 from "../../assets/image-1-2.jpg";
import image13 from "../../assets/image-1-3.jpg";
import image14 from "../../assets/image-1-4.jpg";
import image15 from "../../assets/image-1-5.jpg";
import { useScrollDirection } from "react-use-scroll-direction";
import { Img1, Img2, Img3, Img4, Img0 } from "../groups/group1/pic1";

const styles = {
  BottomComponent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "0.3rem",
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
    // objectFit: "contain",
    // verticalAlign: "bottom",
  },
  scrollDiv: {
    overflow: "hidden",
    scrollBehavior: "smooth",
  },
  container: {
    width: "50%",
    height: "100%",

    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    display: "flex",
  },
};

function BottonComponent({ props: { group, setGroup } }) {
  const [visibleSlide, setVisibleSlide] = useState(0);

  const { scrollTargetRef, scrollDirection } = useScrollDirection();
  const images = [image11, image12, image13, image14, image15];

  //reference to the element to where the view jumps after event
  const scrollToZero = useRef();
  const scrollToOne = useRef();
  const scrollToTwo = useRef();
  const scrollToThree = useRef();
  const scrollToFour = useRef();

  //read out with useScrollDirection if the user scrolls up or down. then declare which page/element/slide is visibile
  // useEffect(() => {
  //   if (scrollDirection === "UP" && visibleSlide !== 0)
  //     setVisibleSlide(visibleSlide - 1);
  //   else if (scrollDirection === "DOWN" && visibleSlide !== images.length - 1)
  //     setVisibleSlide(visibleSlide + 1);
  //   // else if (scrollDirection ===)
  //   console.log({ scrollDirection, visibleSlide });
  // }, [scrollDirection]);

  //after updating the visibleSlide turn the number value (element index) to the ref name and scroll to thge loaction with scrollIntoView
  // useEffect(() => {
  //   switch (visibleSlide) {
  //     case 0:
  //       scrollToZero.current.scrollIntoView();
  //       break;
  //     case 1:
  //       scrollToOne.current.scrollIntoView();
  //       break;
  //     case 2:
  //       scrollToTwo.current.scrollIntoView();
  //       break;
  //     case 3:
  //       scrollToThree.current.scrollIntoView();
  //       break;
  //     case 4:
  //       scrollToFour.current.scrollIntoView();
  //       break;
  //     default:
  //       break;
  //   }
  // }, [visibleSlide]);

  return (
    <div style={styles.BottomComponent}>
      {/* jump to  element on button click */}
      {/* <div style={styles.buttonContainer}>
        <button onClick={() => scrollToZero.current.scrollIntoView()}>
          Zero
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
          Four
        </button>
      </div> */}
      <div
        style={styles.scrollDiv}
        ref={scrollTargetRef}
        onWheel={(event) => {
          console.log(event.deltaY);
          event.preventDefault();
        }}
      >
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
