//import data from '/Users/Taku/Documents/git_Workspace/Fruits-veggies/fruits/src/data.json';
import './cards.css';
import { useEffect, useState } from 'react';

export default function Cards() {
  const [dataObj, setBackendData] = useState([]);

  useEffect(() => {
    fetch('/api')
      .then((response) => response.json())
      .then((data) => setBackendData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const listCards = dataObj.map((el) => (
    <div key={el.id} className="card">
      <div className="top-box">
        <button className="btn-back">
          <a href="/overview"> Back👈</a>
        </button>
        {/* if(el.availability === true) return */}
        <div className="tag-available">
          <h2>Instock</h2>
        </div>
      </div>
      <div className="productImage">{el.image}</div>
      <div className="fruit-items">
        <h4>{el.productName}</h4>
        <h4>🏷 €{el.price}</h4>
        <h4>𐄷 {el.weight} KG</h4>
      </div>
      <p>{el.productDiscription}</p>
    </div>
  ));

  return <ul>{listCards}</ul>;
}
