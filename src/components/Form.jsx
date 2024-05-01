import React, { useState, useEffect } from "react";

export default function Form(props) {
  const styles = {
    form: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      alignItems: "center",
      gap: "20px",
      marginTop: "50px",
    },
    inputContainer: {
      display: "flex",
      flexDirection: "column",
      gap: "6px",
    },
    input: {
      display: "block",
      flex: "1",
      fontSize: "18px",
      padding: "6px 10px",
      border: "1px solid black",
      borderRadius: "5px",
    },
    btn: {
      gridColumn: "1 / 3",
      fontSize: "18px",
      padding: "10px",
      background: "linear-gradient(120deg, rgb(75, 0, 75), rgb(98, 11, 129))",
      color: "white",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      "&:hover": {
        color: "black",
      },
    },
  };

  return (
    <div className="container">
      <form style={styles.form} onSubmit={props.submitData}>
        <div className="input" style={styles.inputContainer}>
          <label htmlFor="top-text">Top Text</label>
          <input
            style={styles.input}
            type="text"
            id="top-text"
            className="input"
            name="topText"
            onChange={props.handleChange}
            value={props.meme.topText}
          />
        </div>
        <div className="input" style={styles.inputContainer}>
          <label htmlFor="bottom-text">Bottom Text</label>
          <input
            style={styles.input}
            type="text"
            id="bottom-text"
            className="input"
            name="bottomText"
            onChange={props.handleChange}
            value={props.meme.bottomText}
          />
        </div>
        <button style={styles.btn} className="btn">
          Generate Meme
        </button>
      </form>
    </div>
  );
}
