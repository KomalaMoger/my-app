import React from 'react'
import Home from './Home'
import { BrowserRouter, Link, Route } from 'react-router-dom'
import Counter from './Counter'
import Assignment from './Assignment'
import Random from './Random'
import Userlist from './Userlist'
import UserShow from './UserShow'
import navbar from './navbar'
import './App.css'

function App() {
    return (
        <BrowserRouter>
            <div className='app'>
                <h2>Hello App</h2>
                <ul>
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/assignment">Assignments</Link></li>
                        <li><Link to='/users'>Users</Link></li>
                </ul>
                <Route path="/home" component={Home} exact={true} />
                <Route path="/assignment" component={Assignment} exact={true} />
                <Route path="/assignment/counter" component={Counter} exact={true} />
                <Route path="/assignment/random" component={Random} exact={true} />
                <Route path='/users' component={Userlist} exact={true} />
                <Route path='/users/:id' component={UserShow} exact={true} />
            </div>
        </BrowserRouter>
    )
}
export default App