import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

const App: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <Main />
      {/* <Footer /> */}
    </div>
  );
};

export default App;
