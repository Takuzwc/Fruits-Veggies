import data from '/Users/Taku/Documents/git_Workspace/Fruits-veggies/fruits/src/data.json';
import '/Users/Taku/Documents/git_Workspace/Fruits-veggies/fruits/src/components/fruit-list/fruit-list.css';

export default function FruitList() {
  const listFruits = data.map((el) => (
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
