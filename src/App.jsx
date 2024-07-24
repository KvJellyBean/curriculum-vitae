import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import { skills, educations, projects } from "../data";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Outlet context={{ skills, educations, projects }} />
      <Footer />
    </>
  );
}
