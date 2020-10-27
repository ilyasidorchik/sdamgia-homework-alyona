import React from "react";

import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import SearchForm from "./components/SearchForm/SearchForm";

function App() {
  return (
    <div>
      <Header />
      <SearchForm />
      <Footer />
    </div>
  );
}

export default App;
