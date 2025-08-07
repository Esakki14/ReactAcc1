import { useState } from "react";

export const EventList = () => {
    const [like, setLike] = useState(0);
    const [dislike, setDislike] = useState(0);

  return (
    <div>
        <h2>{like}</h2>
        <h2>{dislike}</h2>
        <button onClick={()=> setLike((like)=> like + 1)}>Like</button>
        <button onClick={()=> setDislike((dislike)=> dislike - 1)}>dislike</button>

        {/* <button onClick={()=> setDislike(0)}>Reset</button>
        <button onClick={()=> setDislike(dislike * 2)}>Double</button> */}

        <label htmlFor="file">Progress</label>
        <progress value={like + dislike} max="10" />
         
        
    </div>
  )

}
