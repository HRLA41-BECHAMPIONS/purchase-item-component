import React from 'react';
import { BsFillCaretRightFill, BsFillCaretLeftFill } from 'react-icons/bs';

const styleTwo = {
  // width: '55%',
  // height: '100%',
  // borderRadius: 5,
  position: 'absolute',
  right: '40%', // MONITOR: 40%
  top: '10%',  // MONITOR: 45% // MY SIDE 20%
  transform: 'scale(1.0)' // MONITOR: 1.4
};
const fullScreen = {
  position: 'absolute',
  top: '15%', // 2%
  right: '35%', // 1000px
  color: '#d4d4d4',
  transform: 'scale(2.0)',
  width: '10px',
  cursor: 'pointer',
  // zIndex: 1,
};

const rightArrow = {
  position: 'absolute',
  top: '50%', // 50%
  right: '36%', // 410px
  fontSize: '16',
  color: 'black',
  // zIndex: 1,
  cursor: 'pointer',
  userSelect: 'none',
  background: '#ffffff33',
  borderRadius: 40,
};

const leftArrow = {
  position: 'absolute',
  top: '50%', // 50%
  left: '19.5%', // 330px
  fontSize: '16',
  color: 'black',
  // zIndex: 1,
  cursor: 'pointer',
  userSelect: 'none',
  background: '#ffffff33',
  borderRadius: 40,
};

const BestSeller = {
  // zIndex: 1,
  position: 'absolute',
  left: '19%',
  width: '4%',
  top: '15%',
};

const MainDisplay = (props) => (
  <div className="main-display-picture" >
    <div >
      <BsFillCaretLeftFill className="left-arrow-main-display" style={leftArrow} onClick={() => props.changePicture(props.currentPicture - 1)} />
      <BsFillCaretRightFill className="right-arrow-main-display" style={rightArrow} onClick={() => props.changePicture(props.currentPicture + 1)} />
      {(props.pictures !== undefined) ?
        <>
          <img src="https://www-cdn.champion.com/amasty/amlabel/champ_overlay_bestseller.png" alt="Best Seller" style={BestSeller} />
          <img src="https://www.pngkey.com/png/full/511-5111874_click-for-full-screen-expand-icon-svg.png" style={fullScreen} alt="fullscreen" onClick={() => props.handleFullScreen(true)} />
          <img src={props.pictures} style={styleTwo} alt="Red One" />
        </>
       : ''}
    </div>
  </div>
);

export default MainDisplay;
