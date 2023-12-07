import { useContext } from "react";

import { Header } from "./components/Header/Header";
import { HomeSection } from "./components/Sections/HomeSection/HomeSection";
import { Footer } from "./components/Footer/Footer";
// import { AboutSection } from "./components/Sections/AboutSection/AboutSection";
// import { ContactsSection } from "./components/Sections/ContactsSection/ContactsSection";
// import { ProjectsSection } from "./components/Sections/ProjectsSection/ProjectsSection";

import { ThemeContext } from "./context/ThemeContext";

function App() {
  const { theme } = useContext(ThemeContext)

  return (
    <div className={`App ${theme === "dark" ? "dark_theme" : "light_theme"}`}>
      <Header />
      <main>
        <HomeSection />
        {/* <AboutSection />
        <ProjectsSection />
        <ContactsSection /> */}
      </main>
      <Footer />
    </div >
  );
}

export default App;
