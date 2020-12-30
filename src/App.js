import React from 'react';

function Food({fav}) {
  return (
    <h3>I like {fav}</h3>
  );
}

function App() {
  return (
    <div><h1>Hello World!!!</h1>
    <Food fav="kimchi"></Food>
    <Food fav="ramen"></Food>
    <Food fav="samgiopsal"></Food>
    <Food fav="curry"></Food>
    </div>
  );
}

export default App;
