import React from "react";
import { FullPage, Slide } from "react-full-page";
import image11 from "../../assets/image-1-1.jpg";

const styles = {
  TopComponent: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "60%",
    height: "30vh",
    backgroundColor: "#F1F8FA",
    boxShadow:
      "4px 4px 20px rgba(0, 0, 0, 0.1), inset 4px 4px 20px rgba(0, 0, 0, 0.1)",
    borderRadius: "20px",
    p: {
      margin: "2rem",
    },
  },
};

function TopComponent({ props: { group, setGroup } }) {
  return (
    <div style={styles.TopComponent}>
      <p style={styles.TopComponent.p}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus
        architecto recusandae fuga provident ad aliquid, eveniet est corporis
        consectetur voluptates harum error laudantium repudiandae veniam
        repellat optio illo, culpa, quis aperiam dolorem asperiores. Aperiam
        eius deserunt reprehenderit mollitia, omnis quam nostrum sequi, facilis
      </p>
    </div>
  );
}

export default TopComponent;
