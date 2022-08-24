import React, { useEffect, useState } from 'react';
import './App.css';
var colors = [
  '#16a085',
  '#27ae60',
  '#2c3e50',
  '#f39c12',
  '#e74c3c',
  '#9b59b6',
  '#FB6964',
  '#342224',
  '#472E32',
  '#BDBB99',
  '#77B1A9',
  '#73A857'
];

function App() {
  const [quotes,setQuotes] = useState(null);
  const [curr_color,setColor] = useState("");

  useEffect(()=>{
    clickHandle();
  },[]);


  const clickHandle = async () =>{
      let id = Math.floor((Math.random()*100)%colors.length);
      setColor(colors[id]);

      let res = await fetch("https://api.quotable.io/random");
      let data = await res.json();
      setQuotes(data);

      // var p = document.getElementsByTagName("p");
      // p[0].style.animation = "textAnimate 800ms 5";
      // p[1].style.animation = "textAnimate 800ms 5";
  }

  return (
    <div className="App" style={{"background" : curr_color,"color": curr_color}}>
      <div id="quote-box">
        <div id="text">
          <i className="fa fa-quote-left"></i><span> {quotes?quotes['content']:null}</span>
        </div>
        <div id="author">
            <span>- {quotes?quotes['author']:null}</span>
        </div>
        <div className="btns">
          <div className="share-btn">
            <a href="/">
              <div id="tweet-quote" style={{"background": curr_color,"transition": "800ms"}}>
                <i className="fa fa-twitter"></i>
              </div>
            </a>
            <a href="/">
              <div id="tumblr-quote" style={{"background": curr_color,"transition": "800ms"}}>
                <i className="fa fa-tumblr"></i>
              </div>
            </a>
          </div>
          <div id="new-quote">
              <button onClick={clickHandle} style={{"background": curr_color,"transition": "800ms"}}>
                New quote
              </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
