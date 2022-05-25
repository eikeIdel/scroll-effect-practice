import image11 from "../../../assets/image-1-1.jpg";
import image12 from "../../../assets/image-1-2.jpg";
import image13 from "../../../assets/image-1-3.jpg";
import image14 from "../../../assets/image-1-4.jpg";
import image15 from "../../../assets/image-1-5.jpg";

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  img: {
    maxWidth: "90%",
    maxHeight: "90%",
  },
};

export const Img0 = () => {
  return (
    <div style={styles.container}>
      <p>Zero</p>
      <img style={styles.img} src={image11} alt="img0" />
    </div>
  );
};

export const Img1 = () => {
  return (
    <div style={styles.container}>
      <p>One</p>
      <img style={styles.img} src={image12} alt="img1" />
    </div>
  );
};

export const Img2 = () => {
  return (
    <div style={styles.container}>
      <p>Two</p>
      <img style={styles.img} src={image13} alt="img2" />
    </div>
  );
};

export const Img3 = () => {
  return (
    <div style={styles.container}>
      <p>Three</p>
      <img style={styles.img} src={image14} alt="img3" />
    </div>
  );
};

export const Img4 = () => {
  return (
    <div style={styles.container}>
      <p>Four</p>
      <img style={styles.img} src={image15} alt="img4" />
    </div>
  );
};
