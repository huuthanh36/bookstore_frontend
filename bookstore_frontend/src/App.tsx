import "./App.css";
import Footer from "./layouts/Footer";
import HomePages from "./layouts/home/HomePage";
import Navbar from "./layouts/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HomePages />
      <Footer />
    </div>
  );
}

export default App;
