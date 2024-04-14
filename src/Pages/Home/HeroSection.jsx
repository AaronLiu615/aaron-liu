import { Link } from "react-scroll";

export default function HeroSection() {
  return (
    <section id="HeroSection" className="hero--section">
      <div className="hero--section--content-box">
        <div className="hero--section--content">
          <p className="section--title">Hello, I am Aaron</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Full Stack</span>{" "}
            <br />
            Developer
          </h1>
          <p className="hero--section--description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <br />
            Unde doloribus placeat dolore.
          </p>
        </div>
        <Link
          activeClass="navbar--active-content"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          to="Footer"
          className="btn btn-primary"
        >
          Get in Touch
        </Link>
      </div>
      <div className="hero--section--img">
        <img src="./img/headshot.jpeg" alt="a headshot of aaron liu"></img>
      </div>
    </section>
  );
}
