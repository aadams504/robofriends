import React, { Component } from "react"
import './App.css'
import Scroll from "../components/Scroll"
import CardList from "../components/CardList"
import SearchBox from "../components/SearchBox"


class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchField: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ robots: users}))
    }

    onSearchChange = (e) => {
        this.setState({ searchField: e.target.value })
    }

    render() {
        const filteredRobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchField.toLowerCase())
        })
        return (
            <div className="tc">
                <h1 className="f1">RoboFriends</h1>

                <SearchBox searchChange={this.onSearchChange} />
                <Scroll>
                    <CardList robots={ filteredRobots } />
                </Scroll>
            </div>
  )
    }
  
}

export default App