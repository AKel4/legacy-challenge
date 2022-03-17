import React, { Component } from 'react';
 
class CatList extends Component{
  render() {

    const displayCats = () => {
      return this.props.cats.map(cat => <li>{cat}</li>)
    }

    return (
      <div>
        <ul>{displayCats()}</ul>
      </div>
    )

  }
}
 
export default CatList;
