import React, { Component } from 'react'
import CardList from './CardList'
import { robots } from './robots';
import SearchBar from './SearchBar'


class  App extends Component{
    constructor() {
        super()
        this.state = {
            robots: robots,
            searchfield: ''
        }
    }

    onSearchChange = (e) => {
        this.setState({
            searchfield: e.target.value
        })
    }

    render() {
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        return (
            <div className='tc bg-blue'>
                <h1>RoboFriends</h1>
                <SearchBar searchChange={this.onSearchChange}/>
                <CardList robots={filteredRobots}/>
            </div>
        )
    }
}

export default App