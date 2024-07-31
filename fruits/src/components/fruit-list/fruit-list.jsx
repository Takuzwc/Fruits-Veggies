//import data from '/Users/Taku/Documents/git_Workspace/Fruits-veggies/fruits/src/data.json';
import '/Users/Taku/Documents/git_Workspace/Fruits-veggies/fruits/src/components/fruit-list/fruit-list.css';
import { useEffect, useState } from 'react';

export default function FruitList() {
  const [dataObj, setBackendData] = useState([]);

  useEffect(() => {
    fetch('/api')
      .then((response) => response.json())
      .then((data) => setBackendData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const listFruits = dataObj.map((el) => (
    <div key={el.id} className="fruit-card">
      <div alt={el.productName} className="fruit-image">
        {el.image}
      </div>
      <div className="fruit-name">{el.productName}</div>
      <div className="fruit-availability">Available</div>
      <a className="view-product" href="/product">
        Detail👉
      </a>
    </div>
  ));

  return <ul>{listFruits}</ul>;
}
