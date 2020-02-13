import React from 'react';
import Form from './Form.jsx'


export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cost: 0,
      taxes: 0,
      fees: 0,
      rate: 0
    }
    this.getCost = this.getCost.bind(this);
    this.getZipcode = this.getZipcode.bind(this);
  }
  // CRUD FOR COST TABLE
  getCost (id = 1) {
    fetch(`http://localhost:3002/api/cars/${id}`)
    .then((res) => {
      return res.json()
  })
  .then((data)=>{
    console.log('data',data)
    this.setState({
          cost:data.car[0].cost
    })
  })
  .catch(err =>{
      console.log(err)
  })
  }

  postCost (values) {
    fetch(`http://localhost:3002/api/cars/`, {
      method: 'POST',
      body: JSON.stringify(values),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    })
  }

  putCost ( id = 1, values ) {
    fetch(`http://localhost:3002/api/cars${id}`, {
      method: 'PUT',
      body: JSON.stringify(values),
      headers: {
        'Content-type': 'application/json'
      }
    })
    .then((response) => {
      console.log(response)
    })
    .catch((error) => {
      console.log(error)
    })
  }

  deleteCost ( id = 1 ) {
    fetch(`http://localhost:3002/api/cars${id}`, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json'
      }
    })
    .then((response) => {
      console.log(response); 
    })
    .catch((error) => {
      console.log(error);
    })
  }

  //CRUD FOR ZIP CODE TABLE
  getZipcode (zipcode = 60030) {
      fetch(`http://localhost:3002/api/location/${zipcode}`, {
        headers: {
          'Content-Type': 'application/json'
        },  
        params: JSON.stringify(zipcode)
      })
      .then((res) => {
        return res.json()
    })
    .then((data)=>{
      console.log('zipcode data', data)
      this.setState({
            taxes: data.creditScore[0].taxes,
            fees: data.creditScore[0].fees,
            rate: data.creditScore[0].rate
      })
    })
    .catch(err =>{
        console.log(err)
    })
  }
  
  postZipcode (data) {
    fetch(`http://localhost:3002/api/location/`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json'
      }
    })
    .then((response) => {
      console.log(response)
    })
    .catch((error) => {
      console.log(error)
    })
  }

  putZipcode ( zipcode = 60030, data ) {
    fetch(`http://localhost:3002/api/location/${zipcode}`, {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json'
      }
    })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    })
  }

  deleteZipcode ( zipcode = 60030 ) {
    fetch(`http://localhost:3002/api/location/${zipcode}`, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json'
      }
    })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    })
  }


  componentDidMount() {
    this.getCost(1)
    //this.getZipcode(60030)
  }
  render() {
    return (
      <div>
        <Form state={this.state} getCost={this.getCost} getZipcode={this.getZipcode}/>
      </div>
    )
  }
}


//export default App;