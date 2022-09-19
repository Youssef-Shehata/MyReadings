// import React, { useState ,useEffect} from 'react'
import Book from './Book'
import PropTypes from 'prop-types';

const Section = ({name , data , loading , setState}) => {

  let  shelfname = name.charAt(0).toLowerCase() + name.slice(1);
  shelfname = shelfname.replace(/\s/g, '');
  


  return (
    
    <>
     <h2 className="bookshelf-title">{name}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {loading ? <>loading....</> : data.filter((book)=> book.shelf===shelfname).map(book=>  <li key={book.id}><Book book = {book} setState = {setState}/></li>)}
          </ol>
      </div>
    </>
  )
}
Section.prototypes={
  name : PropTypes.string.isRequired,
}
export default Section