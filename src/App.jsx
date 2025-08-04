import React from "react";
import "./App.css";
import Header from "./components/header/header.jsx";
import Footer from "./components/footer/Footer.jsx";
import Scroll2Top from "./components/Scroll2top.jsx";
import Top from "./components/Top.jsx";
import Hero from "./components/Hero.jsx";
import Stats from "./components/Stats.jsx";
import Partner from "./components/Partner.jsx";
import Blogs from "./components/Blogs.jsx";
import Testimonial from "./components/Testimonial.jsx";
import FAQs from "./components/FAQs.jsx";
import Cta from "./components/Cta.jsx";
import Contact from "./components/Contact.jsx";
import Compare from "./components/Compare.jsx";
import How from "./components/How.jsx";
import FindAgent from "./components/Findagent.jsx";
import Chat from "./components/Chat.jsx"

function App() {
  return (
    <>
      <Top />
      <Header />

      <main>
        <Hero />
        <Scroll2Top/>
        <Stats />
        <Partner />
        <Compare />
        <How />
        <FindAgent />

        <Testimonial />
        <FAQs />
        <Blogs />
        <Cta />
        <Contact />
        <Chat/>
      </main>
      <Footer />
    </>
  );
}

export default App;
