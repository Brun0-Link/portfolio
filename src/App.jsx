import { useContext, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Header } from "./components/Header";
import { HomeSection } from "./components/Sections/HomeSection";
import { AboutSection } from "./components/Sections/AboutSection";
import { ContactsSection } from "./components/Sections/ContactsSection";
import { ProjectsSection } from "./components/Sections/ProjectsSection";
import { Footer } from "./components/Footer";

import { ThemeContext } from "./context/ThemeContext";

function App() {
  const { theme } = useContext(ThemeContext)

  useEffect(() => {
    if (theme === 'dark') {
      document.body.classList.remove('light')
      document.body.classList.add('dark')
    }
    else {
      document.body.classList.remove('dark')
      document.body.classList.add('light')
    }
  }, [theme])

  return (
    <div className={`w-screen h-screen dark:bg-[--dark-bcg] transition-colors duration-500 bg-[--default-white] text-[--text-white]`}>
      <BrowserRouter basename="/">
        <Header />
        <Routes>
          <Route exact path="/" element={<HomeSection />} />
          <Route path="/sobre-mim" element={<AboutSection />} />
          <Route path="/projetos" element={<ProjectsSection />} />
          <Route path="/contatos" element={<ContactsSection />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div >
  );
}

export default App;
