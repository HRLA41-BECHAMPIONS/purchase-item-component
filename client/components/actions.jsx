import React from 'react';
const styleForButton = {
  border: '0px',
  width: '70%',
  padding: '6%',
  left: '20%',
  fontFamily: 'knockout',
  borderRadius: '50px',
  margin: '7% 16%',
  background: '#e61937',
  color: 'white',
  letterSpacing: '1.5px',
  cursor: 'pointer',
};
const styleForHeart = {
  // margin: '6% 20%',
  alignContent: 'center',
};
const styleForFavs = {
    position: 'absolute',
    left: '35%',
    top: '89.9%',
}
const styleForEmail = {
  position: 'relative',
  left: '40%',
}
const ActionPanel = () => {
  let changeCss = function (event) {
    event.target.style.color = '#e83131'
  }
  let changeCssTwo = (event) => {
    event.target.style.color = 'black'
  }
  let buttonColorChange = (event) => {
    event.target.style.background = 'rgb(253 114 135)';
  }
  let buttonColor = (event) => {
    event.target.style.background = 'rgb(230, 25, 55)';
  }
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <button style={styleForButton} onMouseEnter={buttonColorChange} onMouseLeave={buttonColor}>ADD TO BAG</button>
      <div className='hearts' style={styleForHeart} onMouseEnter={changeCss} onMouseLeave={changeCssTwo}>
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="black" className="transform transition-transform duration-500 ease-in-out" style={{ position: 'relative', left: '20%' }}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
        <div style={styleForFavs}>
          ADD TO FAVORITES
      </div>
      </div>
      <div style={styleForEmail} onMouseEnter={changeCss} onMouseLeave={changeCssTwo}>
        <div style={{ marginBottom: '10px', }}>
          EMAIL
        </div>
      </div>
      <div style={{ paddingLeft: '35%', fontSize: '18px', cursor: 'help' }} onMouseEnter={changeCss} onMouseLeave={changeCssTwo}>
        NEED HELP?
      </div>
    </div>
  )
};
export default ActionPanel;