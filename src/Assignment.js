import React from 'react'
import {Link} from 'react-router-dom'
import './Assignment.css'
function Assignment (){
return(
    <div className='assignments'>
        <h2>listing Assignment</h2>
        <ol className='generate'>
            <li><Link to='/assignment/counter'>Counter</Link></li>
            <li><Link to='/assignment/random'>Random</Link></li>
        </ol>
    </div>
)
}
export default Assignment