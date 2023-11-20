import {Component} from 'react'
import DestinationItem from '../DestinationItem'
import './index.css'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    const {destinationsList} = this.props
    const destinationResults = destinationsList.filter(eachName =>
      eachName.name.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="bg-container">
        <div className="text-container">
          <h1 className="title">Destination Search</h1>
          <div className="img-container">
            <input
              type="search"
              className="search"
              placeholder="Search"
              onChange={this.onChangeSearchInput}
              value={searchInput}
            />
            <img
              className="logo"
              alt="search icon"
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            />
          </div>
          <ul className="cards-container">
            {destinationResults.map(eachItem => (
              <DestinationItem cardDetails={eachItem} key={eachItem.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default DestinationSearch
