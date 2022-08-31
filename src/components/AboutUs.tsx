import "./AboutUs.css";

const simonProfileimg = require("../assets/AcnhSimon.png");
const andrewProfileimg = require("../assets/AcnhAndrew.png");
const miloProfileimg = require("../assets/AcnhMilo.png");

const AboutUs = () => {
  return (
    <div className="AboutUs">
      <h1>Meet Us</h1>

      <div className="Simon">
        <h3>Simon Orow</h3>
        <img
          className="simonimg"
          src={simonProfileimg}
          alt="Simon lookin all stronk"
        />
        <p className="Simoninfo">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea numquam
          debitis molestiae, eaque, delectus, dolore magni sequi magnam et
          praesentium id rem fugiat provident quisquam illo iure ad iusto
          accusantium!
        </p>
      </div>

      <div className="Andrew">
        <h3>Andrew Nadratowski</h3>
        <img
          className="andrewimg"
          src={andrewProfileimg}
          alt="Andrew be all fly an ish"
        />
        <p className="Andrewinfo">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
          voluptatibus est dicta ipsam beatae accusamus iusto officia quaerat
          id, perferendis rerum recusandae, veritatis ab optio at sunt cumque
          numquam repellendus?
        </p>
      </div>
      <div className="Milo">
        <h3>Milo Prince</h3>
        <img
          className="miloimg"
          src={miloProfileimg}
          alt="Milo being loud af"
        />
        <p className="Miloinfo">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          dolorum maxime sit officia. Repudiandae cupiditate, maiores dolor
          accusantium mollitia ab. Sint dolorem illum quibusdam laborum,
          deserunt amet vitae perferendis numquam.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
