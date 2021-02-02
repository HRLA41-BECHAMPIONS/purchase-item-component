
import React from 'react';

const style = {
  width: '100%',
  height: '100%',
  zIndex: '1000',
  margin: '-5px',
};
const closeStyle = {
  position: 'absolute',
  top: '50%',
  left: '370px',
  fontSize: '30',
  color: 'black',
  zIndex: 10,
  cursor: 'pointer',
  userSelect: 'none',
  background: '#ffffff33',
  borderRadius: 40,
}
const position = {
  position: 'sticky',
  top: '30%',
  left: '100%',
}
const FullScreen = (props) => (
  <div id="fullscreen-main-display" style={{zIndex: '1000', position: 'absolute', top: '-3%'}}>
    <svg stroke="currentColor" fill="currentColor" strokeWidth="2" viewBox="0 0 24 24" height="1em" width="50px" xmlns="http://www.w3.org/2000/svg" style={position} onClick={() => props.handleFullScreen(false)} >
      <path fill="none" stroke="gray" strokeWidth="3" d="M3,3 L21,21 M3,21 L21,3" style={closeStyle} >
      </path>
      </svg>
    {props.pics.map((item, index) => (
      <>
        <img src={item} key={index} style={style} alt="Just" />
      </>
    ))}
  </div>
);

export default FullScreen;
