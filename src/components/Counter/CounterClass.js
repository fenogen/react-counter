// -------------------------------------------- Counter через Class:

import React, { Component } from "react";
import classes from "./Counter.module.css";

class Counter extends Component {

  // constructor(){                      --> Старая запись
  //   super();
  //   this.state = {
  //     count: 0,
  //   }
  //   this.plus =this.plus.bind(this)
  // }

  state = {
    count: 12,
    name: 'oleg',
    age: 25,
  }

  // change = () => {                     --> Не рабочий вариант
  //   this.state.count = 30;
  // } 

  // change = () => {                     --> Рабочий вариант
  //   this.setState ({count: 30})
  // }

  reset = () => {
    this.setState ({
      count: 0 })
  }

  // plus = () => {                       --> Вариант когда история предыдущего значения не важна
  //   this.setState ({
  //     count: this.state.count + 1
  //   })
  // }

  plus = () => {
    this.setState ((prevState) => ({
      count: prevState.count + 1
    }));
  }

  minus = () => {
    this.setState ((prevState) => ({
      count: prevState.count - 1
    }));
  }

  render() {
    console.log(this.props)
    return (
      <div className={classes.Container}>
        <h1>Counter {this.props.title}</h1>
        <div className={classes.Count}>{this.state.count}</div>
        <div>
          <button onClick={this.minus}>-</button>
          <button onClick={this.reset}>0</button>
          <button onClick={this.plus}>+</button>
          {/* <button onClick={() => console.log('hi')}>0</button>         1 вариант (анонимная ф-я)*/}
        </div>
      </div>
    );
  }
}

export default Counter;
