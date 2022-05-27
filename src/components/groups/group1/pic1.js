import image11 from "../../../assets/image-1-1.jpg";
import image12 from "../../../assets/image-1-2.jpg";
import image13 from "../../../assets/image-1-3.jpg";
import image14 from "../../../assets/image-1-4.jpg";
import image15 from "../../../assets/image-1-5.jpg";

const styles = {
  container: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    // margin: "2rem",
  },
  img: {
    maxWidth: "90%",
    maxHeight: "80%",
  },
};

export const Img0 = ({ childRef }) => {
  return (
    <div style={styles.container} ref={childRef}>
      <p>Zero</p>
      <img style={styles.img} src={image11} alt="img0" />
    </div>
  );
};

export const Img1 = ({ childRef }) => {
  return (
    <div style={styles.container} ref={childRef}>
      <p>One</p>
      <img style={styles.img} src={image12} alt="img1" />
    </div>
  );
};

export const Img2 = ({ childRef }) => {
  return (
    <div style={styles.container} ref={childRef}>
      <p>Two</p>
      <img style={styles.img} src={image13} alt="img2" />
    </div>
  );
};

export const Img3 = ({ childRef }) => {
  return (
    <div style={styles.container} ref={childRef}>
      <p>Three</p>
      <img style={styles.img} src={image14} alt="img3" />
    </div>
  );
};

export const Img4 = ({ childRef }) => {
  return (
    <div style={styles.container} ref={childRef}>
      <p>Four</p>
      <img style={styles.img} src={image15} alt="img4" />
    </div>
  );
};
