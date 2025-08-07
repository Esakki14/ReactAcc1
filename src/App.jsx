import { useState } from 'react';
import './App.css'
import { EventList } from './EventList';
import { Movie } from './Movie';
import { MovieList } from './MovieList';
export default function App() {
  return (
    <div>
      {/* <UserList /> */}
      {/* <EventList />
      <Movie/> */}
         {/* <MovieList/> */}
         <ColorGame/>

    </div>
  );
}



function ColorGame() {
  const [color, setColor] = useState("");
  const [colorList, setColorList] = useState(["pink", "purple", "plum", "orange"]);

  const styles = {
    background: color,
  };
  

  // const handleAddColor = () => {
  //     setColorList([...colorList, color]);
  // };

  return (
    <div>
      <input
        type="text"
        style={styles}
        value={color}
        onChange={(event) => setColor(event.target.value)}
      />
      <button onClick={()=> setColorList(colorList.concat(color))}>Add</button>

      <h1>{color}</h1>

     
      {colorList.map((color) => (
        <ColorBox color={color} />
      ))}
    </div>
  );
}

function ColorBox({ color }) {
  const boxStyles = {
    background: color,
    height: "25px",
    width: "225px",
    marginTop: "8px",
    border: "1px solid black",
  };

  return <div style={boxStyles}></div>;
}

function UserList() {
  return (
    <div>
      <div className="App">
        <User
          hello="Hello"
          name="Name1"
          img="https://media.istockphoto.com/id/814423752/photo/eye-of-model-with-colorful-art-make-up-close-up.jpg?s=612x612&w=0&k=20&c=l15OdMWjgCKycMMShP8UK94ELVlEGvt7GmB_esHWPYE="
        />
        <User
          hello="Hello"
          name="Name2"
          img="https://imgv3.fotor.com/images/slider-image/A-clear-close-up-photo-of-a-woman.jpg"
        />
        <User
          hello="Hello"
          name="Name3"
          img="https://media.gettyimages.com/id/468662696/photo/focusing-at-you.jpg?s=612x612&w=0&k=20&c=OOH7GJYckqk5JZEOAcuDI1_E4tCcG-QvSDhK8GyX2Rs="
        />
     
      </div>
    </div>
  );
}

function User({ name, hello, img }) {
  return (
    <>
      <div className="userComp">
        <img src={img} alt="img" />
        <h3>
          <span>{hello}, </span>
          {name}
        </h3>
      </div>
    </>
  );
}
