import { useContext } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Header } from "./components/Header/Header";
import { HomeSection } from "./components/Sections/HomeSection/HomeSection";
import { AboutSection } from "./components/Sections/AboutSection/AboutSection";
import { ContactsSection } from "./components/Sections/ContactsSection/ContactsSection";
import { ProjectsSection } from "./components/Sections/ProjectsSection/ProjectsSection";
import { Footer } from "./components/Footer/Footer";

import { ThemeContext } from "./context/ThemeContext";

function App() {
  const { theme } = useContext(ThemeContext)

  return (
    <div className={`App ${theme === "dark" ? "dark_theme" : "light_theme"}`}>
      <Header />
      <BrowserRouter basename="/Portfolio">
        <Routes>
          <Route path="/Portfolio" element={<HomeSection />} />
          <Route path="/Portfolio/sobre-mim" element={<AboutSection />} />
          <Route path="/Portfolio/contatos" element={<ContactsSection />} />
          <Route path="/Portfolio/projetos" element={<ProjectsSection />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div >
  );
}

export default App;
