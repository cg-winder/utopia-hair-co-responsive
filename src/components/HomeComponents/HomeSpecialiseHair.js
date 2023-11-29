import { React, useState, useEffect } from "react";

const HomeSpecialiseHair = () => {
  const bannerRotate = [
    "BLONDES           ",
    "BALAYAGE          ",
    "VIVIDS            ",
    "EXTENSIONS        ",
  ];
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNumber, setLoopNumber] = useState(0);
  const [text, setText] = useState(""); //rotate words state.
  const [delta, setDelta] = useState(300 - Math.random() * 100); // Time it for word to refill after being deleted.
  const period = 260; //Time it takes for each letter to delete.

  useEffect(() => {
    let intervalSetter = setInterval(() => {
      tick();
    }, delta);
    return () => {
      clearInterval(intervalSetter);
    };
  }, [text]);

  // rotate word functioning.
  const tick = () => {
    let i = loopNumber % bannerRotate.length;
    let fullText = bannerRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, fullText.length + 1);
    setText(updatedText);

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNumber(loopNumber + 1);
      setDelta(-1);
    }
  };
  return (
    <div className="homespecialise-page-wrap">
      <div className="specialise-header">Hair</div>
      <span className="rotate-word">{text}</span>
    </div>
  );
};

export default HomeSpecialiseHair;
