import React from 'react'
import { Link } from 'react-router-dom';


const BoardLink = (props) => {
    console.log('boardlink', props);
    return (
        <div>
            <Link to={`/${props.id}`} style={{ textDecoration: 'none' }}>
            {props.name}
            </Link>
        </div>
    )
}

export default BoardLink 
