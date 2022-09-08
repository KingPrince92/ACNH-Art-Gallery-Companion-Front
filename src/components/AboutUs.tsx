import "./AboutUs.css";

const simonProfileimg = require("../assets/AcnhSimon.png");
const andrewProfileimg = require("../assets/AcnhAndrew.png");
const miloProfileimg = require("../assets/AcnhMilo.png");
const aboutUsImg = require("../assets/AboutUs.png");

const AboutUs = () => {
  return (
    <div className="AboutUs">
      <img src={aboutUsImg} className="aboutUsImage" alt="About Us" />

      <div className="Simon">
        <div className="fixsimon">
          <h3>Simon Orow</h3>
          <img
            className="simonimg"
            src={simonProfileimg}
            alt="Simon lookin all stronk"
          />
        </div>
        <p className="Simoninfo">
          After working in the Financial Industry for roughly 4 and a half
          years, I made the switch to attend the Grand Circus Bootcamp. I’ve
          learned so much in the past 3 months, and I’ve loved every minute of
          it. This project was a fantastic finish to the bootcamp because I
          couldn’t have asked for a better group. I now feel like someone who
          can better contribute to society. <br></br>
          <span className="penguin">
            Penguin Brothers Forever <i className="fa-solid fa-kiwi-bird"></i>
          </span>
          <p className="social-links">
            <a href="https://www.linkedin.com/in/simon-orow/">
              <i className="fa-brands fa-linkedin social-links"></i>
            </a>
          </p>
        </p>
      </div>

      <div className="Andrew">
        <p className="Andrewinfo">
          After working in a kitchen for almost my entire professional career, I
          started to realize something was missing. I didn’t enjoy the fact that
          I walked into each day doing the same thing as the last, or making the
          same food, with no new challenges or problems to face. When introduced
          to Software Development by a family friend, and the work he creates, I
          fell in love instantly. The constant problem solving and opportunity
          to build something gave me the fulfillment I’ve been looking for. I am
          looking to leverage the tech skills I’ve gained from my coding
          bootcamp, in order to create intuitive and user friendly clean code.
          <br></br>
          <span className="penguin">
            Penguin Brothers Forever <i className="fa-solid fa-kiwi-bird"></i>
          </span>
          <p className="social-links">
            <a href="https://www.linkedin.com/in/andrew-nadratowski/">
              <i className="fa-brands fa-linkedin social-links"></i>
            </a>
          </p>
        </p>
        <div className="fixname">
          <h3>Andrew Nadratowski</h3>
          <img
            className="andrewimg"
            src={andrewProfileimg}
            alt="Andrew be all fly an ish"
          />
        </div>
      </div>
      <div className="Milo">
        <div className="fixmilo">
          <h3>Milo Prince</h3>
          <img
            className="miloimg"
            src={miloProfileimg}
            alt="Milo being loud af"
          />
        </div>
        <p className="Miloinfo">
          Former fry cook, barista, and government-endorsed underwriter. Current
          paranormal enthusiast, coffee-fan, and web developer with a fully
          curated art museum on his island. Had an excellent time during the
          Grand Circus bootcamp learning how to code, and is very thankful that
          Simon and Andrew agreed to spend the last two weeks of their class on
          an Animal Crossing themed project even though they never really played
          before. <br></br>
          <span className="penguin">
            Penguin Brothers Forever <i className="fa-solid fa-kiwi-bird"></i>
          </span>
          <p className="social-links">
            <a href="https://www.linkedin.com/in/milo-prince/">
              <i className="fa-brands fa-linkedin social-links"></i>
            </a>
          </p>
        </p>
      </div>
      <div className="ThankYou">
        <p>
          Lastly, thank you to the Grand Circus team, and a special shout out to
          Mitch Cuckovich and James Devine for all of their help and support!{" "}
          <i className="fa-solid fa-heart"></i>
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
