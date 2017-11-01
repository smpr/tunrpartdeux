import React, { Component } from 'react';
import axios from 'axios'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

import NavBar from './components/NavBar'
import HomePage from './components/Home/HomePage'
import ArtistList from './components/ArtistList.js'
import Artist from './components/Artist.js'
import Song from './components/Song.js'

class App extends Component {
  state = {
    artists: []
  }
  async componentWillMount() {
    try {
      const res = await axios.get('/api/artists')
      this.setState({ artists: res.data })
    } catch (error) {
      console.log(error)
    }
  }
  render() {
    const ArtistListComponent = () => ( <ArtistList artists={this.state.artists} />) 
    return (
      <Router>
        <div>
          <h1>Tunr</h1>
          <NavBar />
          <Switch>
          <Route exact path="/" render={ArtistListComponent} />
          <Route exact path="/artists/:artistId" component={Artist} />
          <Route exact path="/artists/:artistId/sonngs/:songId" component={Song} />

          </Switch>
         
        </div>

      </Router>

    );
  }
}

export default App;
