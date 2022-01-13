import { SiMongodb, SiMysql, SiRedux, SiCss3, SiReact, SiJavascript, SiNodedotjs, SiGithub, SiHtml5 } from "react-icons/si";
import { FaSass, FaBiking, FaRunning, FaHamburger, FaLinkedinIn, FaEnvelope, FaArrowRight, FaArrowLeft } from "react-icons/fa";

const Logos = ({ type, size }) => {
  switch (type) {
    case "html":
      return <SiHtml5 size={size} color='#DC4A25' />;
    case "css":
      return <SiCss3 size={size} color='#3495D0' />;
    case "react":
      return <SiReact size={size} color='#5ED2F3' />;
    case "js":
      return <SiJavascript size={size} color='#EFD81D' />;
    case "node":
      return <SiNodedotjs size={size} color='#75AC5F' />;
    case "sass":
      return <FaSass size={size} color='#C66593' />;
    case "github":
      return <SiGithub size={size} color='white' />;
    case "mongo":
      return <SiMongodb size={size} color='#7ABD7E' />;
    case "mysql":
      return <SiMysql size={size} color='#F2922C' />;
    case "redux":
      return <SiRedux size={size} color='#6F44B3' />;
    case "biking":
      return <FaBiking />;
    case "running":
      return <FaRunning />;
    case "hamburger":
      return <FaHamburger />;
    case "linkedin":
      return <FaLinkedinIn size={size} />;
    case "mail":
      return <FaEnvelope size={size} />;
    case "arrow-left":
      return <FaArrowLeft size={size} />;
    case "arrow-right":
      return <FaArrowRight size={size} />;
  }
};

export default Logos;
