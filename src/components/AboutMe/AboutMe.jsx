import "./AboutMe.scss";
import Me from "../../assets/images/me.png";

const AboutMe = () => {
  return (
    <div className="aboutMe">
      <img className="aboutMe__image" src={Me} alt="" />
      <p className="aboutMe__text">
        Throughout university and previous job roles, I have always gravitated
        towards, Innovation, technology and problem solving. From the start of
        this year I have been working tirelessly to become a valuable software
        developer, accomplished through a 12 week intensive course and my own
        personal projects.
      </p>
    </div>
  );
};

export default AboutMe;
