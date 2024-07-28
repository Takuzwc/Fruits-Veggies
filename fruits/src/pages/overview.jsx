import { Component } from 'react';
import FruitList from '../components/fruit-list/fruit-list.jsx';
import Logo from '/Users/Taku/Documents/git_Workspace/Fruits-veggies/fruits/src/logo.png';
import '/Users/Taku/Documents/git_Workspace/Fruits-veggies/fruits/src/pages/overview.css';

export default class Overview extends Component {
  render() {
    return (
      <div className="parent-page">
        <img className="logo" src={Logo} alt="Logo" />
        <FruitList />
      </div>
    );
  }
}
