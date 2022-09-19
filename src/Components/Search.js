import React, { useState } from 'react'
import { useFetch } from '../Utils/useFetch';
import Book from './Book';
const Search = ({searchState ,setSearchState}) => {

const [query , setQuery] = useState("");
const [state , setState] = useState("")
const handleChange = (e) =>{
  setQuery(e.target.value.trim().toLowerCase())
}
  const {data , loading}=useFetch(query , state) 

 


  return (
    <>
   
      <div className="search-books">
        <div className="search-books-bar">
          <a
            className="close-search"
            onClick={() => setSearchState(!searchState)}
          >
            Close
          </a>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title, author, or ISBN"
              value={query}
              onChange={(event) => handleChange(event)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">

          {loading ? <></> : (data.length > 0) ? data.map((book)=>{
            return <li key={book.id}><Book book ={book } setState={setState} /></li>
            // console.log(book)
          }) : <></>}

          </ol>

        </div>
      </div>
  
    </>
  )
}

export default Search