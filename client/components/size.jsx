import React from 'react';
import Axios from 'axios';

const styleForButtons = {
  width: '15%',
  border: '1px solid #d6d6d6',
  textAlign: 'center',
  borderRadius: '5px',
  padding: '3.5%',
  color: 'rgb(112 112 112)',
  margin: '0 4px 4px 0',
  display: 'inline-block',
}

class SizeComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      Colors: '',
      Sizes: '',
    }
    this.changeCSSOne = this.changeCSSOne.bind(this);
    this.changeCSSTwo = this.changeCSSTwo.bind(this);
  }
  changeCSSOne(event) {
    event.target.style.border = '1px solid black'
  }
  changeCSSTwo(event) {
    event.target.style.border = '1px solid rgb(214, 214, 214)'
  }
  render() {
    let tempArray = ['XS', 'S', 'M', 'L', 'XL', '2XL', '3XL']
    return(
      <div id='sizes-buttons' style={{borderBottom: '1px solid #d2d2d2', paddingBottom: '10%', marginTop: '7%',}}>
        {tempArray.map((item, index) => (
          <div style={styleForButtons} onMouseEnter={this.changeCSSOne} onMouseLeave={this.changeCSSTwo} onClick={this.props.handleClick} key={index}>{item}</div>
        ))}
      </div>
    )
  }
};

export default SizeComponent;
