import { useContext } from "react";

import { AboutSection } from "./components/Sections/AboutSection/AboutSection";
import { ContactsSection } from "./components/Sections/ContactsSection/ContactsSection";
import { Header } from "./components/Header/Header";
import { HomeSection } from "./components/Sections/HomeSection/HomeSection";

import { ThemeContext } from "./context/ThemeContext";
import { BackToTop } from "./components/BackToTop/BackToTop";
import { ProjectsSection } from "./components/Sections/ProjectsSection/ProjectsSection";

function App() {
  const { theme } = useContext(ThemeContext)

  return (
    <div className={`App ${theme === "dark" ? "dark_theme" : "light_theme"}`}>
      <Header />
      <BackToTop />
      <main>
        <HomeSection />
        <AboutSection />
        <ProjectsSection />
        <ContactsSection />
      </main>
      <footer>Credits soon</footer>
    </div >
  );
}

export default App;
