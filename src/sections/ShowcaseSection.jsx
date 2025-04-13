import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          <div ref={rydeRef} className="first-project-wrapper">
            <div className="image-wrapper">
              <img src="/Chatterforge.png" alt="ChatterForge" />
            </div>
            <div className="text-content">
              <h2>
                ChatterForge is a dynamic chat application I developed using the
                PERN stack
              </h2>
              <p className="text-white-50 md:text-xl">
                An Application buil with(Postgres, Express.js, React.js,
                Node.js) along with Socket.IO and JWT for real-time
                communication and user authentication. It's a feature-rich
                platform that offers users seamless connectivity and secure
                messaging.
              </p>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={libraryRef}>
              <div className="image-wrapper bg-[#FFEFDB]">
                <img src="public/creova.png" alt="Creova" />
              </div>
              <h2>
                Creova – my minimalistic and lightweight version of Figma! 🎨✨
              </h2>
            </div>

            <div className="project" ref={ycDirectoryRef}>
              <div className="image-wrapper ">
                <img src="/InventFlow.png" alt="inventflow" />
              </div>
              <h2>
                InventFlow - An inventory Management deployed on AWS cloud
                Services
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;
