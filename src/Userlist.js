import React from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

class Userlist extends React.Component {
    constructor() {
        super()
        this.state = {
            users: []
        }
    } 
    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/users")
    .then((response)=>{
        const  users=response.data
        this.setState({users})
    })
     .catch((err)=>{
console.log(err)
     })  
            }
    
    render(){
        return(
            <div className="tble">
    <h2>Listing User-{this.state.users.length}</h2>
    <ul>
        {this.state.users.map(user=>{
        return<li key={user.id}><Link to={`/users/${user.id}`}>{user.name}</Link></li>
        })}
    </ul>
            </div>
        )
    }
}
export default  Userlist