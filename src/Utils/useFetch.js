
import { useEffect, useState } from "react";
import { search} from "./BooksAPI";
import useGetAll from "./useGetAll";

export const useFetch = (query , bookState) => {
  const [state, setState] = useState({ searchData:[], searchLoading: true });

  let [flip , setflip] = useState([]);
  const {data , loading} = useGetAll(flip); 
  


  useEffect(()=>{
    
    if (query !== "") { 
    search(query).then(res =>{
      const newBooks = res.map((book)=>{
        let booky = book;
        booky.shelf= "none"
        for (let b of data) {
          if (book.id === b.id) {
            booky = b;
          }
        }
        return booky
      })   

          setState({ searchData:newBooks, searchLoading: false });
        }).catch(err=>{
          console.log(err)
        })

    }else{
        setState({ searchData:[], searchLoading: true })
    }
      },[query , bookState])



      

  return state;




};