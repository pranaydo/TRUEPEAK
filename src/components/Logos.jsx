import abc from "../assets/logosvg/abc.svg";
import cnn from "../assets/logosvg/cnn.svg";
import cosmo from "../assets/logosvg/cosmo.svg";
import forbes from "../assets/logosvg/forbes.svg";
import wsj from "../assets/logosvg/wsj.svg";

const logos = [
  { src: abc, alt: "ABC" },
  { src: cnn, alt: "CNN" },
  { src: cosmo, alt: "Cosmopolitan" },
  { src: forbes, alt: "Forbes" },
  { src: wsj, alt: "Wall Street Journal" },
];

const SeenInSection = () => (
  <section className="w-full bg-white py-32 overflow-hidden">
    <div className="relative">
      <div className="logo-marquee flex items-center gap-12 animate-marquee">
        {logos.concat(logos).map((logo, idx) => (
          <img
            key={idx}
            src={logo.src}
            alt={logo.alt}
            className="h-20 w-auto grayscale opacity-80"
          />
        ))}
      </div>
    </div>
  </section>
);

export default SeenInSection;
