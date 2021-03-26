import React from 'react';
import axios from 'axios';
import Purchase from './purchase.jsx';
import MainDisplay from './main.jsx';
import FullScreen from './fullscreen.jsx';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      data: '',
      clickedItem: '',
      popUp: false,
      fullScreen: false, // This line down all stuff added for refactor
      currentPicture: 0,
      currentImage : '',
      dataTwo: [],
    }
    this.handleGet = this.handleGet.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.popUp = this.popUp.bind(this);
    //Added lines for refactor
    this.changePicture = this.changePicture.bind(this);
    this.handleFullScreen = this.handleFullScreen.bind(this);
    this.changeColor = this.changeColor.bind(this);
  }
  componentDidMount() {
    this.handleGet();
  }
  handleGet() {
    axios.get('/api/bechampions/purchase-item')
      .then(({ data }) => {
        this.setState({
          data: data
        })
      })
      .catch((err) => console.log(err))
    axios.get('/api/bechampions/main')
      .then(({ data }) => {
        this.setState({
          currentImage: data[0].imgurl,
          dataTwo: data
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  handleClick() {
    let title = document.getElementById('title').innerHTML;
    axios.get(`/api/bechampions/purchase-item/${title}`)
      .then(({data}) => {
        this.setState({
          clickedItem: [data]
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }
  popUp(turnOff) {
    // Selects the body so style can be changed to locked when popup is active
   let lockPage = document.getElementById('purchase-container').style;
   if (turnOff === false) {
    lockPage.position = 'absolute';
    lockPage.overFlow = '';
     this.setState({
       popUp: false
      })
    } else {
      lockPage.position = 'fixed';
      lockPage.overFlow = 'hidden';
      this.setState({
        popUp: true
      })
    }
  }
  // Added for refactor
  handleFullScreen(value) {
    this.setState({
      fullScreen: value,
    });
  }
  changePicture(number) {
    const nextPicture = this.state.currentImage[number];
    if (nextPicture === undefined) {
      this.setState({
        currentPicture: 0,
        animation: true
      });
    } else {
      this.setState({
        currentPicture: number,
      });
    }
  }
  changeColor(input) {
    let purple = this.state.dataTwo[1].imgurl;
    let darkKhaki = this.state.dataTwo[2].imgurl;
    if (input === 'Purple Pebble') {
      this.setState({
        currentPicture: 0,
        currentImage: purple
      })
    } else if (input === 'Dark Khaki') {
      this.setState({
        currentPicture: 0,
        currentImage: darkKhaki,
      })
    } else {
      this.setState({
        currentPicture: 0,
        currentImage: this.state.dataTwo[0].imgurl
      })
    }
  }
  render() {
    return (
      <>
        {this.state.fullScreen ?
          <FullScreen pics={this.state.currentImage} handleFullScreen={this.handleFullScreen} />
          :
          <>
            <MainDisplay pictures={this.state.currentImage[this.state.currentPicture]} currentPicture={this.state.currentPicture} handleFullScreen={this.handleFullScreen} changePicture={this.changePicture} />
            <Purchase isTrue={this.state.popUp} data={this.state.clickedItem} handleClick={this.handleClick} popUp={this.popUp} changeColor={this.changeColor} />
          </>
        }
      </>
    )
  }
}
export default App;
