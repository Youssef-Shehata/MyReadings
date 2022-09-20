import React from 'react'
import Section from './Section'
import {  useState } from 'react'
import useGetAll from '../Utils/useGetAll'
import { Link } from 'react-router-dom'
const Main = () => {

  let [flip , setState] = useState('')
  let {data , loading}=useGetAll(flip) 
  return (
    <>
    <div className="list-books">
    <div className="list-books-title">
      <h1>MyReads</h1>
    </div>
    <div className="list-books-content">
      <div>
    
        <div className="bookshelf">
         <Section name ="Currently Reading" data = {data}  loading = {loading} setState={setState}/>
         <Section name = "Read" data = {data}  loading = {loading} setState={setState}/>
         <Section name = "Want To Read" data = {data}  loading = {loading} setState={setState}/>

             
          
        </div>
         
        </div>

      </div>
    </div>
    <div className="open-search">
      <Link to="/Search">Add a book</Link>
    </div>
  </>
  )
}

export default Main