
import React, { Component } from 'react'



export default class DogIndex extends Component {
  constructor(props) {
    super(props)
    this.state = {
      image: ''
    };
  }

  fetchImage = async () => {
    try {
     const res = await fetch('https://dog.ceo/api/breeds/image/random')
     const data = await res.json()

     this.setState({ image: data.message})
     console.log(data)

    } catch (error) {
      console.log({error})
    }
  }

  componentDidMount() {
    this.fetchImage()
  }

  render() {
    return (
      <div>
        <img src={this.state.image} alt="random dog pic"/>
      </div>
      )
  }
}
