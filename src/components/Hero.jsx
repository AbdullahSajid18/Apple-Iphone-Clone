import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import {heroVideo, smallHeroVideo} from '../utils'
import { useState } from "react";
const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(window.innerWidth < 760 ? smallHeroVideo : heroVideo);

  useGSAP(() => {
    gsap.to("#hero", { opacity: 1, delay: 1.5 });
  }, []);
  return (
    <section className="relative w-full bg-black nav-height">
      <div className="flex-col w-full h-5/6 flex-center">
        <p id="hero" className="hero-title">
          Iphone 15 Pro
        </p>
        <div className="w-9/12 md:10/12">
          <video autoPlay muted playsInline={true} key={videoSrc}>
            <source  src={videoSrc} type="video/mp4"/>
          </video>
        </div>
      </div>
    </section>
  );
};

export default Hero;
