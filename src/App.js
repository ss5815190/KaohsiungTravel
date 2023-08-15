import { ApiContext } from "./compontents/GetApi.js";
import { useContext } from "react";
import Header from "./compontents/header.js";
import "./App.css";
import Displaypage from "./compontents/Displaypage.js";
import Footer from "./compontents/Footer.js";
import Paging from "./compontents/paging.js";
function App() {
  const { isLoading } = useContext(ApiContext);
  if (isLoading) {
    return <div className="loading">Loading...</div>;
  }
  return (
    <div className="homee">
      <Header />
      <Displaypage />
      <Paging />
      <Footer />
    </div>
  );
}

export default App;
