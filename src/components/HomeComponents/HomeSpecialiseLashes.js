import { React, useState, useEffect } from "react";

const HomeSpecialiseLashes = () => {
  const bannerRotate = [
    "LIFTING           ",
    "TINTING           ",
  ];
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNumber, setLoopNumber] = useState(0);
  const [text, setText] = useState(""); //rotate words state
  const [delta, setDelta] = useState(300 - Math.random() * 100); // time it takes for new word to fill after previous word all deleted.
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
      setDelta(550);
    }
  };
  return (
    <div className="homespecialise-page-wrap">
      <div className="specialise-header">Lashes</div>
      <span className="rotate-word">{text}</span>
    </div>
  );
};

export default HomeSpecialiseLashes;