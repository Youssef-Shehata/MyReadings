import { useEffect, useState } from "react";
import { getAll} from "./BooksAPI";

export const useGetAll = (flip) => {
  const [state, setState] = useState({ data:[], loading: true });


  useEffect(()=>{
    setState({ data:[], loading: true });
    getAll().then(res =>{

          setState({ data:res, loading: false });
          console.log(res);
        }).catch(err=>{
          console.log(err)
        })

    
      },[flip , setState])
    console.log(flip)

  return state;
};

export default useGetAll