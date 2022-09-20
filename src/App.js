import "./App.css";

import React, {useState} from "react";
import Search from "./Components/Search";
import Main from "./Components/Main";
import {Route , Routes} from "react-router-dom"
// import {getAll} from "./Utils/BooksAPI"

function App() {
  const [showSearchPage, setShowSearchpage] = useState(false);
  
  
return(
  <Routes>
    <Route path="/" element={<Main searchState = {showSearchPage} setSearchState = {setShowSearchpage}/>}/>

    <Route path="/Search" element={<Search searchState = {showSearchPage} setSearchState = {setShowSearchpage} />}/>
    </Routes>
)

}


export default App;
