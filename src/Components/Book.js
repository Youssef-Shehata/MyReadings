import React,{useState,useEffect} from 'react'
import { update } from '../Utils/BooksAPI';



const Book = ({book , setState}) => {


  const [shelfState,setShelfState] = useState(book.shelf);

  useEffect(() => {
    book.shelf = shelfState;
    update(book, shelfState).then(res =>{
    }).catch(err =>{
      console.log(err)
    })
  
   
  }, [shelfState])

  return ( 
    <>
    {!book? <></> : <div className="book">
  <div className="book-top">
    <div
      className="book-cover"
      style={{
        width: 128,
        height: 193,
        backgroundImage:
        `url(${ book.imageLinks ? book.imageLinks.smallThumbnail: ""})`,
      }}
    ></div>
    <div className="book-shelf-changer">
      <select defaultValue = {shelfState}  onChange={(e) =>{
        
        setShelfState(e.target.value);
        setTimeout(() => {
          setState(shelfState + book.id)

        }, 100);

      }}>
        <option value="none" disabled>
          Move to...
        </option>
        <option value="currentlyReading">
          Currently Reading
        </option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  </div>
  {/* {console.log(typeof(books))} */}
  <div className="book-title">{book.title}</div>
  <div className="book-authors">{book.authors ? book.authors.map(author => author) : book.author}</div>
</div> }
    
  
</>
)}
export default Book