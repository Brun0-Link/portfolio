import { useContext } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Header } from "./components/Header/Header";
import { HomeSection } from "./components/Sections/HomeSection/HomeSection";
import { AboutSection } from "./components/Sections/AboutSection/AboutSection";
import { ContactsSection } from "./components/Sections/ContactsSection/ContactsSection";
import { ProjectsSection } from "./components/Sections/ProjectsSection/ProjectsSection";
import { Footer } from "./components/Footer/Footer";

import { ThemeContext } from "./context/ThemeContext";

const router = createBrowserRouter([
  {
    path: "/Portfolio",
    element: <HomeSection />,
  },
  {
    path: "/Portfolio/sobre-mim",
    element: <AboutSection />,
  },
  {
    path: "/Portfolio/contatos",
    element: <ContactsSection />,
  },
  {
    path: "/Portfolio/projetos",
    element: <ProjectsSection />,
  },
]);

function App() {
  const { theme } = useContext(ThemeContext)

  return (
    <div className={`App ${theme === "dark" ? "dark_theme" : "light_theme"}`}>
      <Header />
      <RouterProvider router={router} />
      <Footer />
    </div >
  );
}

export default App;
