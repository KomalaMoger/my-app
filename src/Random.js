import React from 'react'
import './Random.css'
class Random extends React.Component{
    constructor(){
        super()
        this.state={
            random:''
        }
    }
    handleClick=()=>{
        const random=Math.round(Math.random()*100)
        this.setState({
            random:random
        })
        console.log(random,'random')
    }
    render(){
        return(
            <div>
                <h2>{this.state.random}</h2>
            <button  className='random' onClick={this.handleClick}>Random</button>
            </div>
        )
    }
}
export default Random