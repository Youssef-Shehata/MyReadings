
import { useEffect, useState } from "react";
import { search} from "./BooksAPI";

export const useFetch = (query , bookState) => {
  const [state, setState] = useState({ data:[], loading: true });
  
    
  
  useEffect(()=>{
    if (query !== "") {
    search(query).then(res =>{

          setState({ data:res, loading: false });
        }).catch(err=>{
          console.log(err)
        })

    }else{
        setState({ data:[], loading: true })
    }
      },[query , bookState])

  return state;




};