import React, { useState } from 'react'
import ResourctList from './ResourceList'
import UserList from './UserList'

const App = () => {

    const [ resource, setResource ] = useState('posts')

    return (
        <div>
            <UserList />
            <div>
                <button onClick={() => setResource('posts')}>Posts</button>
                <button onClick={() => setResource('todos')}>Todos</button>
            </div> 
            <ResourctList resource={resource} />
        </div>
    )   
}

export default App
