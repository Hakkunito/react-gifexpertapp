import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  getGifs(category).then(
    (imgs) => {
      setTimeout(() => {
        setState({
          data: imgs,
          loading: false,
        });
      });
    },
    [category]
  );

  // setTimeout(() =>{
  //   setstate({
  //     data:[1,2,3,4,5],
  //     loading:false
  //   })
  // }, 3000);

  return state; //{data:[], loading:true}
};
