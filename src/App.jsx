import React, { useState } from "react";
import Header from "./components/Header";
import "./index.css";
import Form from "./components/Form";
import Image from "./components/Image";

export default function () {
  const memeUrl = "https://api.imgflip.com/get_memes";
  const [memeData, setMemeData] = useState([]);

  React.useEffect(() => {
    fetch(memeUrl)
      .then((res) => res.json())
      .then((data) => setMemeData(data.data.memes));
  }, []);

  const [meme, setMeme] = React.useState({
    id: "",
    topText: "",
    bottomText: "",
    url: "",
    name: "",
  });

  function handleChange(e) {
    const { value, name } = e.target;
    setMeme((prevMeme) => ({ ...prevMeme, [name]: value }));
  }

  function setRandomMeme() {
    const randomNum = Math.floor(Math.random() * memeData.length);
    const randomMeme = memeData[randomNum];
    const { id, name, url } = randomMeme;
    setMeme((prevMeme) => ({ ...prevMeme, id: id, name: name, url: url }));
  }

  function submitData(e) {
    e.preventDefault();
    setRandomMeme();
  }

  return (
    <>
      <Header />
      <Form
        handleChange={(event) => handleChange(event)}
        submitData={submitData}
        meme={meme}
      />
      <Image
        dis={true}
        name={meme.name}
        url={meme.url}
        topText={meme.topText}
        bottomText={meme.bottomText}
      />
    </>
  );
}
