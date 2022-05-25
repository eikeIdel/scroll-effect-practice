import React, { useState, useEffect, useRef } from "react";
import { useTransition, animated, useSpringRef } from "react-spring";
import image11 from "../../assets/image-1-1.jpg";
import image12 from "../../assets/image-1-2.jpg";
import image13 from "../../assets/image-1-3.jpg";
import image14 from "../../assets/image-1-4.jpg";
import image15 from "../../assets/image-1-5.jpg";

import { Img1, Img2, Img3, Img4, Img0 } from "../groups/group1/pic1";

//each component is one slide. all of them are collected in on arr, so...
const arrOfComponets = [<Img0 />, <Img1 />, <Img2 />, <Img3 />, <Img4 />];
//...we can map through them with the animated container created with useTransistion
const slides = arrOfComponets.map((component) => {
  return ({ style }) => <animated.div style={style}>{component}</animated.div>;
});

function BottonComponent({ props: { group, setGroup, deltaY, setDeltaY } }) {
  const [visibleSlide, setVisibleSlide] = useState(0);
  const [scrollDown, setScrollDwon] = useState(true);
  const transRef = useSpringRef();
  //inline styling
  const styles = {
    BottomComponent: {
      display: "flex",
      flexDirection: scrollDown ? "column" : "column-reverse",
      justifyContent: "center",
      alignItems: "center",
      overflow: "auto",
      width: "60%",
      height: "50vh",
      willChange: "transform, opacity",
      backgroundColor: "#E7F3F7",
      boxShadow:
        "4px 4px 20px rgba(0, 0, 0, 0.1), inset 4px 4px 20px rgba(0, 0, 0, 0.1)",
      borderRadius: "20px",
    },
    animationContainer: {
      // position: "absolute",
      height: "90%",
    },
  };
  //read out with onWheel=>deltaY (from App.js) if the user scrolls up or down. then declare which page/element/slide is visibile
  useEffect(() => {
    if (deltaY < 0 && visibleSlide !== 0) {
      setScrollDwon(true);
      setVisibleSlide(visibleSlide - 1);
    } else if (deltaY > 0 && visibleSlide !== 4) {
      setScrollDwon(false);
      setVisibleSlide(visibleSlide + 1);
    } else if (deltaY === 0) return;
    setDeltaY(0);
  }, [deltaY]);

  useEffect(() => {
    console.log({ deltaY, visibleSlide });
    transRef.start();
  }, [visibleSlide]);

  //describe the animation
  const transitions = useTransition(visibleSlide, {
    config: { duration: 400 },
    key: visibleSlide,
    ref: transRef,
    // initial: {
    //   height: "100%",
    // },
    //from where the new component starts
    from: {
      opacity: "0",
      transform: `translateY(-100%)`,
      height: "0%",
    },
    //where the animation stops for the new Component and starts for the previous Component
    enter: {
      opacity: "1",
      transform: `translateY(0)`,
      height: "100%",
    },
    //where the animation stops for the previous Component
    leave: {
      opacity: "0",
      transform: `translateY(100%)`,
      height: "0%",
    },
  });

  return (
    <div style={styles.BottomComponent}>
      {/* render als components wrapped with the animated.div (useTransition)
        style si the parameter for the animations and i is the iterator */}
      {transitions((style, i) => {
        const Slide = slides[i];
        return <Slide style={style} />;
      })}
    </div>
  );
}

export default BottonComponent;
