import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    items: [
      {
        title: 'clean room',
        done: false,
      },
      {
        title: 'go grocery shopping',
        done: false,
      },
      {
        title: 'change oil',
        done: false,
      },
      {
        title: 'create the next million dollar app',
        done: false,
      },
    ],
  };

  toggleTodo(item) {
    const {items} = this.state;
    const newItems = items.map(
      stateItem =>
        stateItem.title === item.title
          ? {...stateItem, done: !stateItem.done}
          : stateItem,
    );
    this.setState({items: newItems});
  }

  render() {
    const {items} = this.state;
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>My Todos</h2>
        </div>
        <ul>
          {items.map(item => (
            <li
              key={item.title}
              className={item.done ? 'task-done' : ''}
              onClick={() => this.toggleTodo(item)}
            >
              {item.title}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
