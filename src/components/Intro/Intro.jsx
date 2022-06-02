import "./Intro.scss";

const Intro = () => {
  return (
    <div className="intro">
      <div className="circleContainer">
        <div className="circleContainer__circle circleContainer__circle--1"></div>
        <div className="circleContainer__circle circleContainer__circle--2"></div>
        <div className="circleContainer__circle circleContainer__circle--3"></div>
        <div className="circleContainer__circle circleContainer__circle--4"></div>
        <div className="circleContainer__text">
          <p>Hi there! I am Cameron Hyden. Juniour full stack developer</p>
        </div>
      </div>
    </div>
  );
};

export default Intro;
