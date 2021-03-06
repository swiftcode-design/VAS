import React, { Component} from 'react'
import AppBar from 'material-ui/AppBar'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import axios from 'axios'


class HomePage extends Component {
  constructor(props){
    super(props);
    this.state = {
      cars: []
    }
  }
  componentDidMount(){
    axios.get('/api/cars').then(cars => {
      this.setState({cars: cars.data.length ? cars.data : []})
    })
  }

  render() {

    return (
      <div>
          <div className="home-page">
            {this.state.cars.map((car, idx) => {
                const { kb_price, make, model, miles, pics, selling_price, year, description } = car.row_to_json
                const images = car.row_to_json.pics.map(pic => (
                  {original: pic.url, thumbnail: pic.url}
                ))
                return (
                  <div className="card-container">
                    <Card  key={idx}>
                      <CardHeader title={`${make} ${model}`} subtitle={selling_price}/>
                      <CardMedia overlay={<CardTitle title={`${make} ${model}`} subtitle={year || 'N/A'}/>}>
                        <img src={images[0].original}/>
                      </CardMedia>
                      <CardTitle title={`${make} ${model}`} subtitle={`price: ${selling_price} miles: ${miles}`} />
                      <CardText>
                        {description}
                      </CardText>
                      <CardActions>
                        <FlatButton
                          backgroundColor="#00BCD4"
                          hoverColor="#8AA62F"
                          href="mailto:georgelopezayala@icloud.com?subject=car"
                          label="email us"/>
                        <FlatButton
                          backgroundColor="#00BCD4"
                          hoverColor="#8AA62F"
                          label="call us" />
                      </CardActions>
                    </Card>
                  </div>
                )
              })}
          </div>
      </div>
    )
  }
}

export default HomePage
