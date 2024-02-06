import React from "react";
/* import { ThemeProvider, useTheme } from "./ThemeContext"; */
import HeroSection from "./HeroSection";
import ProjectsSection from "./ProjectsSection";
import ContactSection from "./ContactSection";
import Theme_Toggle from "./ThemeButton";

/*   const { state } = useTheme();

  useEffect(() => {
    if (state.theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [state.theme]);

  return <Component {...pageProps} />;
}; */

const Home = () => {
  return (
    <>
      <Theme_Toggle />
      <HeroSection />
      <ProjectsSection />
      <ContactSection />
    </>
  );
};

export default Home;
