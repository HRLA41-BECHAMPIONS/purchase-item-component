import React from 'react';
import ColorComponent from './colors.jsx';
import SizeComponent from './size.jsx';
import ActionPanel from './actions.jsx';
import Stars from './stars.jsx';
import ModalPopUp from './modal.jsx';

const styleForTitle = {
  fontFamily: 'Knockout,Arial,sans-serif',
  fontSize: 25,
  textAlign: 'left',
  fontWeight: '100',
  marginTop: 0,
  width: '70%', // <--- Remove this prop for smaller screen fitment of title to match exact website
};

const containerStyle = {
  position: 'absolute',
  right: '11%',
  top: '10%', // 21%
  width: '18%',
  borderLeft: '1px solid #d6d6d6',
  padding: '2%',
  borderBottom: '1px solid #d6d6d6',
  overFlow: '',
};

const styleForMens = {
  fontFamily: 'Knockout,Arial,sans-serif',
  letterSpacing: '2px',
  fontSize: '14px',
  textTransform: 'uppercase',
  color: '#767676',
  paddingTop: '20px',
};

const styleForStyle = {
  color: '#9a9a9a',
  fontSize: '120%',
  marginBottom: '10px'
}
const styleForColor = {
  color: '#636365',
  fontFamily: "Knockout,Arial,sans-serif",
  fontSize: 16,
  fontWeight: 400,
  letterSpacing: 1,
  marginBottom: 16,
  textTransform: 'uppercase',
  borderBottom: '1px solid rgb(214, 214, 214)',
  // width: '80%',
}
const styleForSize = {
  color: '#212342',
  fontFamily: "Knockout,Arial,sans-serif",
  fontSize: 16,
  fontWeight: 900,
  letterSpacing: 1,
  marginBottom: 16,
  textTransform: 'uppercase',
}
const styleForQuantity = {
  color: '#212342',
  fontFamily: "Knockout,Arial,sans-serif",
  fontSize: 16,
  fontWeight: 900,
  letterSpacing: 1,
  marginBottom: 16,
  textTransform: 'uppercase',
  paddingBottom: '10%',
  borderBottom: '1px solid #cccccc',
}
let changeCSSOne = (e) => {
  e.target.style.color = 'red'
}
let changeCSSTwo = (e) => {
  e.target.style.color = '#767676'
}
const Purchase = (props) => (
  <div id='purchase-container' style={containerStyle}>
    <Stars />
    <div style={{ borderBottom: '1px solid rgb(214, 214, 214)' }}>
      <div style={styleForMens}>Men's Champion Life</div>
      <h1 style={styleForTitle} id='title'>Reverse Weave Hoodie, C Logo</h1>
      <div style={styleForTitle}> $60.00 </div><br />
      <div style={styleForStyle}>Style #GF68 &nbsp; Y06145</div>
    </div>
    <div id='colors-to-choose' style={styleForColor}>
      <div style={{ marginTop: '15%', marginBottom: '10%' }}>
        Available Color
        </div>
      {props.data.length > 0 ?
        <ColorComponent colors={props.data[0].Color} changeColor={props.changeColor}/>
        : <ColorComponent changeColor={props.changeColor}/>
      }
    </div>
    <div id='sizes-to-choose' style={styleForSize}>
      <span id='sizes' style={{ marginBottom: '5%', }}> Available sizes </span>
      <div id='sizes-guide' style={{ fontFamily: 'Knockout', color: '#767676', float: 'right', fontSize: '15px' }} onMouseEnter={changeCSSOne} onMouseLeave={changeCSSTwo} onClick={props.popUp}>Size Guide</div>
      {props.isTrue ?
        <ModalPopUp popUp={props.popUp} />
        : null
      }
      <SizeComponent handleClick={props.handleClick} />
    </div>
    <div id='quantity-to-choose'>
      <div id='quantity-name' style={styleForQuantity}>
        QUANTITY: &nbsp;
        <select style={{ border: '0px' }}>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
      </div>
    </div>
    <div id='add-to-component'>
      <ActionPanel />
    </div>
  </div>
)
export default Purchase;
