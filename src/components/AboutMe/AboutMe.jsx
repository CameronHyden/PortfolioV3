import React from "react";
import Me from "../../assets/images/me.png";
import speech from "../../assets/images/speech.png";

const AboutMe = () => {
  return (
    <div>
      <div>
        <img src={Me} alt="" />
        <img src={speech} alt="" />
        <p> SOME TEXT ABOUT ME</p>
      </div>
    </div>
  );
};

export default AboutMe;
