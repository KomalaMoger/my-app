import React from'react'
import './Counter.css'
class Counter extends React.Component{
    constructor(){
        super()
        this.state={
            count:0
        }
    }
    handleClick=()=>{
        this.setState(prevState=>({
            count:prevState.count+1
    }))
    }
    render(){
        return(
            <div className='counter'>
               {/* <h2>Counter Page</h2> */}
                <h2>{this.state.count}</h2>
                <button onClick={this.handleClick}>generator</button>
            </div>
        )
    }
}
export default Counter