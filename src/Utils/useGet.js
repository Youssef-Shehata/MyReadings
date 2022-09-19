import { useEffect, useState } from "react";
import { get} from "./BooksAPI";

export const useGet = (id) => {
  const [state, setState] = useState({ data:{}, loading: true });

    
  
  useEffect(()=>{
    setState({ data:[], loading: true });
    get().then(res =>{

          setState({ data:res, loading: false });
        })

    
      },[])

  return state;




};

export default useGet