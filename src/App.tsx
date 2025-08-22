// App.tsx
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Components from "./components/ComponentsSection/ComponentsSection";
import Timeline from "./components/Timeline/Timeline";
import Documents from "./components/Documents/Documents";
import Team from "./components/Team/Team";
import Footer from "./components/Footer/Footer";
import ScrollTop from "./components/ScrollTop";
import { ThemeProvider } from "./components/ThemeProvider";
import "./App.css";

function App() {
  return (
    <ThemeProvider>
      <div className="App bg-white dark:bg-slate-900 transition-colors duration-300">
        <Header />
        <Hero />
        <About />
        <Components />
        <Timeline />
        <Documents />
        <Team />
        <Footer />
        <ScrollTop />
      </div>
    </ThemeProvider>
  );
}

export default App;
