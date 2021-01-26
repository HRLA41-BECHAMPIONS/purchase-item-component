import React from 'react';

  let SocialMediaModal = {
    display: 'block', /* Hidden by default */
    position: 'fixed', /* Stay in place */
    zIndex: '15', /* Sit on top */
    paddingTop: '50px', /* Location of the box */
    left: '0',
    top: '0',
    width: '100%', /* Full width */
    height: '100%', /* Full height */
    overflow: 'hidden', /* Enable scroll if needed */
    backgroundColor: 'rgb(0,0,0)', /* Fallback color */
    backgroundColor: 'rgba(0,0,0,0.79)', /* Black w/ opacity */
  }
  let SocialMediaModalContainer = {
    backgroundColor: '#FEFEFE',
    padding: '20px',
    border: '1px solid #888',
    width: '40%',
    height: '75%',
    margin: '0% 0% 25% 23%',
    overflow: 'hidden',
  }
const ModalPopUp = (props) => (
  <div>
    <div style={{ ...SocialMediaModal }}>
      <div style={{ position: 'relative', width: '90%', left: '7%', height: '100%' }}>
        <h1 style={{ zIndex: '16', color: 'white', position: 'relative', left: '23%', width: '20%', margin: '0%', display: 'inline-block' }}>Size Guide</h1>
        <div style={{ position: 'relative', left: '43.5%', width: '2%', display: 'inline-block', cursor: 'pointer' }} onClick={() => props.popUp(false)}>
          <svg stroke="currentColor" fill="currentColor" strokeWidth="2" viewBox="0 0 24 24" height="1em" width="50px" xmlns="http://www.w3.org/2000/svg" style={{ zIndex: '1', }}>
            <path fill="none" stroke="white" strokeWidth="3" d="M3,3 L21,21 M3,21 L21,3" >
            </path>
          </svg>
        </div>
        <div style={{ ...SocialMediaModalContainer }}>
          <img src='https://www-cdn.champion.com/catalog/product/c/h/chp_com_sizechart_mensapparel.png?quality=85&bg-color=255,255,255&fit=bounds&height=&width=&format=jpeg&_ga=2.92352158.20098477.1611079794-173069320.1610383812' style={{ maxHeight: '90%' }}></img>
        </div>
      </div>
    </div>
  </div>
)
export default ModalPopUp;