import { Component } from 'react';
import Cards from '../components/cards/cards.jsx';
import Logo from '/Users/Taku/Documents/git_Workspace/Fruits-veggies/fruits/src/logo.png';
import '/Users/Taku/Documents/git_Workspace/Fruits-veggies/fruits/src/pages/overview.css';

export default class Product extends Component {
  render() {
    return (
      <div className="parent-page">
        <img className="logo" src={Logo} alt="Logo" />
        <Cards />
      </div>
    );
  }
}
