import { ApiContext } from "./components/GetApi.js";
import { useContext } from "react";
import Header from "./components/Header.js";
import "./App.css";
import DisplayPage from "./components/DisplayPage.js";
import Footer from "./components/Footer.js";
import Paging from "./components/Paging.js";
function App() {
  const { isLoading } = useContext(ApiContext);
  if (isLoading) {
    return <div className="loading">Loading...</div>;
  }
  return (
    <div className="homee">
      <Header />
      <DisplayPage />
      <Paging />
      <Footer />
    </div>
  );
}

export default App;
