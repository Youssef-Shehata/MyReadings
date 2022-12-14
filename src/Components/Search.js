import React, { useState } from 'react'
import { useFetch } from '../Utils/useFetch';
import Book from './Book';
import { Link } from 'react-router-dom';
const Search = () => {

const [query , setQuery] = useState("");
const [state , setState] = useState("")
const handleChange = (e) =>{
  setQuery(e.target.value.trim().toLowerCase())
}
  const {searchData , searchLoading}=useFetch(query , state) 



  return (
    <>
   
      <div className="search-books">
        <div className="search-books-bar">
          <Link exact to="/" className="close-search">
            Close
          </Link>
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

          {searchLoading ? <></> : (searchData.length > 0) ? searchData.map((book)=>{
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