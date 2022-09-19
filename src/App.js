import "./App.css";
import { useState} from "react";
import Search from "./Components/Search";
import Main from "./Components/Main";
// import {getAll} from "./Utils/BooksAPI"

function App() {
  const [showSearchPage, setShowSearchpage] = useState(false);
  
  
return(
  <>
   {showSearchPage ? ( <Search searchState = {showSearchPage} setSearchState = {setShowSearchpage}/>) : 
   ( 
    <>




   <Main searchState = {showSearchPage} setSearchState = {setShowSearchpage}/>
   </>
   )}
  
 
  </>
)

}


export default App;
