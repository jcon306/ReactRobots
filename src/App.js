import React from 'react'
import CardList from './CardList'
import { robots } from './robots';
import SearchBar from './SearchBar'

const App = () => {
    return (
        <div className='tc'>
            <h1>RoboFriends</h1>
            <SearchBar />
            <CardList robots={robots}/>
        </div>
    )
}

export default App