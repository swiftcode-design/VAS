import React, { Component} from 'react'
import AppBar from 'material-ui/AppBar'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import ImageGallery from 'react-image-gallery';
import axios from 'axios'


class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      cars: []
    }
  }
  //  componentDidMount = async () =>{
  //
  //   try {
  //     const cars = await axios.get('/api/cars')
  //     console.log('test', cars.data.length);
  //     this.setState({cars: cars.data.length ? cars.data : []})
  //   } catch(err) {
  //
  //   }
  // }
  componentDidMount(){
    axios.get('/api/cars').then(cars => {
      this.setState({cars: cars.data.length ? cars.data : []})
    })
  }

  render() {

    return (
      <div>
          <div >
            {this.state.cars.map((car, idx) => {
                const { kb_price, make, model, miles, pics, selling_price, year, description } = car.row_to_json
                const images = car.row_to_json.pics.map(pic => (
                  {original: pic.url, thumbnail: pic.url}
                ))
                return (
                  <Card key={idx}>
                    <CardHeader title={`${make} ${model}`} subtitle={selling_price}/>
                    <CardMedia overlay={<CardTitle title={`${make} ${model}`} subtitle={year || 'N/A'}/>}>
                      <img src={images[0].original}/>
                    </CardMedia>
                    <CardTitle title={`${make} ${model}`} subtitle={`price: ${selling_price} miles: ${miles}`} />
                    <CardText>
                      {description}
                    </CardText>
                    <CardActions>
                      <FlatButton label="action1" />
                      <FlatButton label="action2" />
                    </CardActions>
                  </Card>
                )
              })}
          </div>
      </div>
    )
  }
}

export default Home
