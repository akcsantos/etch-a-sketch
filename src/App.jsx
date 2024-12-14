import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import MainContainer from "./components/MainContainer";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Header />
      <MainContainer />
      <Footer />
    </div>
  );
}

export default App;
