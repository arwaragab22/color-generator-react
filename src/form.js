import React, { useState } from "react";
import Values from "values.js";
import Colors from "./colors.js";
import rgbtohex from "./transfercolor";
export default function Form() {
  const [color, setcolor] = useState('#777');
  const [colors, setcolors] = useState(new Values("#777").all(10));
  const [error, seterror] = useState(false);
  const getcolor = (e) => {
    e.preventDefault();
    console.log(color);
    try {
        seterror(false);
       
      const colors = new Values(color).all(10);
      setcolors(colors);
      console.log(colors);
    } catch (error) {

      console.log(error);
      seterror(true);
    }
  };
  return (
    <div>
      {" "}
      <form onSubmit={getcolor}>
        <label for="color">color generator :</label>
        <input
          className={`${error} ?'error': null`}
          placeholder="#777"
          type="text"
          name="color"
          onChange={(e) => {
            setcolor(e.target.value);
          }}
        />
        <button type="submit">submit</button>
      </form>
     {error?<p className="errormessage">not valid color</p>:null}
      <section className="parent">
        {" "}
        {colors.map((color, index) => {
              return <Colors c={color} />;
            })
          }
      </section>
    </div>
  );
}
