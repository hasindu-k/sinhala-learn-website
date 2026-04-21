// App.tsx
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Timeline from "./components/Timeline/Timeline";
import Documents from "./components/Documents/Documents";
import Presentations from "./components/Presentations/Presentations";
import Team from "./components/Team/Team";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import ScrollTop from "./components/ScrollTop";
import { ThemeProvider } from "./components/ThemeProvider";
import "./App.css";

function App() {
  return (
    <ThemeProvider>
      <div className="App flex flex-col min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
        <Header />
        <main className="flex-1">
          <Hero />
          <About />
          <Timeline />
          <Documents />
          <Presentations />
          <Team />
          <Contact />
        </main>
        <Footer />
        <ScrollTop />
      </div>
    </ThemeProvider>
  );
}

export default App;
