import React, { Component } from 'react'
import "./Counter1.css"

export default class CounterApp1 extends Component 
{
    constructor()
    {
        super()
        this.state ={
            username :"Appu",
            count :0
        }
    }
    handleChange =()=>{
        this.setState({username:"Appu M"})
        console.log(this);
    }
    handleNumberChange=()=>{
        this.setState({count:1})
    }
    render() {
        return (
            <div>
             <h1 className='name'>{this.state.username}</h1>
             <h2>{this.state.count}</h2>
             <button onClick={this.handleChange}>Click to change</button>
             <button onClick={this.handleNumberChange}>Change the number</button>
            </div>
    )
  }
}
