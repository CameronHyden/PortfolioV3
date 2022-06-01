import "./Intro.scss";

const Intro = () => {
  return (
    <div className="intro">
      <div className="intro__circleContainer">
        <div className="intro__circle intro__circle--1"></div>
        <div className="intro__circle intro__circle--2"></div>
        <div className="intro__circle intro__circle--3"></div>
        <div className="intro__circle intro__circle--4"></div>
      </div>
      <div className="intro__textContainer">
        <p>
          Hi there! I am Cameron Hyden. <br />
          Junior full stack developer
        </p>
      </div>
    </div>
  );
};

export default Intro;
