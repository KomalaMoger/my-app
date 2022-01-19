import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
class UserShow extends React.Component{
    constructor(props){
        console.log(props)
        super()
        this.state={
            users:{}
        }
    }
    componentDidMount(){
       const id=this.props.match.params.id
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((response)=>{
            const users=response.data
            this.setState({users})
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    render(){
        console.log('refresh',this.state.users)
        return(
            
            <div>
            <h2>User Id-{this.props.match.params.id}</h2>
            <p>{this.state.users.name}-{this.state.users.email}-{this.state.users.website}</p>
            <Link to="/users">back</Link>
            </div>
        )
    }
}
export default UserShow