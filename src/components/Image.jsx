import React from "react";

export default function Image(props) {
  const styles = {
    container: {
      marginTop: "20px",
    },
    img: {
      width: "100%",
      borderRadius: "5px",
    },
    fackImg: {
      width: "100%",
      borderRadius: "5px",
      background: "#ccc",
      height: "300px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "28px",
      fontWeight: "bold",
      color: "rgba(0,0,0,.2)",
    },
  };
  return (
    <div className="container" style={styles.container}>
      {props.dis ? (
        <div className="img">
          <h3 className="text top-text">{props.topText}</h3>
          <img
            style={styles.img}
            src={props.url || "https://i.imgflip.com/2oo7h0.jpg"}
            alt={props.name}
          />
          <h3 className="text bottom-text">{props.bottomText}</h3>
        </div>
      ) : (
        <div style={styles.fackImg} className="img">
          <h3 className="text top-text">{props.topText}</h3>
          <p>{props.name}</p>
          <h3 className="text bottom-text">{props.bottomText}</h3>
        </div>
      )}
    </div>
  );
}
