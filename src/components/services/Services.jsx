import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on helping your brand grow
          <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{color:"blueviolet"}}>Unique</motion.b> Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{color:"blueviolet"}}>For Your</motion.b> Business.
          </h1>
          <button>WHAT WE DO?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Web Development</h2>
          <p>
            Stay on top of the latest web development technologies and best practices. Framework includes 
            HTML5, CSS3, JavaScript, Typescript, ReactJS, NodeJs, Express, MongoDB, MySQL, etc. We utilize the most
            up-to-date APIs and web services to integrate rich functionality and real-time data into your site. 
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Mobile Development</h2>
          <p>
          Build high-performance native apps for iOS and Android using cutting-edge languages like React Native.
          This allows us to fully leverage the capabilities of each platform. We implement the latest design principles
          like material design and fluent design to craft intuitive, user-friendly mobile interfaces.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>UI/UX Design</h2>
          <p>
          Utilize the latest in design software and tools like Figma, Sketch, InVision, and Framer
          to create cutting-edge user experiences. Constantly expanding their skills and tools to 
          incorporate the latest UI/UX advances into every project.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
          Harness cutting-edge design tools and software like Illustrator, Photoshop, 
          and InDesign to craft brands with high visual impact. Continually educate 
          ourselves on neuromarketing, behavioral economics, and other advances to 
          craft brands based on the latest learnings.
          </p>
          <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
