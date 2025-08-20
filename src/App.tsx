// App.tsx
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Components from "./components/ComponentsSection/ComponentsSection";
import Timeline from "./components/Timeline/Timeline";
import Documents from "./components/Documents/Documents";
import Team from "./components/Team/Team";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Components />
      <Timeline />
      <Documents />
      <Team />
      <Footer />
    </div>
  );
}

export default App;
