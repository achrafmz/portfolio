import "./App.css";
import { Helmet } from "react-helmet";

import Home from "./pages/Home";
function App() {
  return (
      
         <>
         <Home />
      <Helmet>
  <meta name="google-site-verification" content="DGAXCNMKmD-u8gwwzyCqgufjWauFP-QXwbonYo8lqOc" />
</Helmet>
      {/* Le reste de ton app */}
    </>
  );
}

export default App;
