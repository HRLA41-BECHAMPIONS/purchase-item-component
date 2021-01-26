import React from 'react';

const styleForButton = {
  fontFamily: 'knockout',
  borderRadius: '50px',
  height: '37px',
  width: '50 %',
  fontSize: '16px',
  backgroundColor: '#f2f5f7',
  color: '#696969',
  border: '0px',
  marginTop: '7%',
  marginBottom: '10%',
}

var color = {
  cursor: 'pointer',
  backgroundColor: '',
  backgroundSize: 'initial',
  width: '37px',
  height: '37px',
  border: '1px solid rgba(0,0,0,.1)',
  borderRadius: '100%',
  display: 'inline-block',
  margin: '4px 4px 0 0',
}

class ColorComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentColor: 'Team Red Scarlet'
    }
    this.onClick = this.onClick.bind(this);
    this.onEnter = this.onEnter.bind(this);
    this.onLeave = this.onLeave.bind(this);
  }
  onClick(e) {
    this.setState({
      currentColor: e.target.className
    })
    e.target.style.border = '1px solid white'
    this.props.changeColor(e.target.className)
  }
  onEnter(e) {
    e.target.style.border = '1px solid white'
    e.target.style.boxShadow = '0 0 0 1px black'
  }
  onLeave(e) {
    e.target.style.border = '1px solid rgba(0,0,0,.1)'
    e.target.style.boxShadow = '0 0 0 0px black'
  }
  render() {
    let tempObj = {
      'Team Red Scarlet': 'rgb(193 48 48)',
      'Purple Pebble': 'rgb(99 89 106)',
      'Dark Khaki': 'rgb(150 132 122)',
      'Black': 'rgb(43 37 35)',
      'C Gold': 'rgb(253 185 82)',
      'Silver Grey': 'rgb(237 237 237)',
      'Surf The Web': 'rgb(30 43 110)',
      'White': 'rgb(233 233 233)',
      'Cargo Olive': 'rgb(68 75 43)',
      'Deep Blue Water': 'rgb(51 165 205)',
      'Granite Heather': 'rgb(70 70 72)',
      'Navy': 'rgb(35 39 51)',
      'Oxford Grey': 'rgb(151 153 153)',
      'Running Waves': 'rgb(3 87 124)',
      'Burnt Orange': 'rgb(189 109 78)',
      'Caramel Drizzle': 'rgb(159 122 85)',
      'Twilight Bloom': 'rgb(174 147 136)',
      'Carefree Teal': 'rgb(97 133 144)',
      'Ambitious Orange': 'rgb(185 88 59)',
      'Sepia Red': 'rgb(88 24 34)',
      'Caviar Brown' : 'rgb(42 34 33)',
    }
    return (
      <div>
        <div id="colors-to-choose">
          {(Array.isArray(this.props.colors)) ?
            <div style={{display: 'flex', flexWrap: 'wrap',}}>
              {Object.keys(tempObj).map((item, index) => {
                let value = tempObj[item];
                let copyOfCss = JSON.parse(JSON.stringify(color));
                copyOfCss.backgroundColor = value;
                if (this.props.colors.includes(item) === false) {
                  copyOfCss.transform = 'rotate(35deg)'
                  copyOfCss.margin = '4px 4px 4px 0px'
                  copyOfCss.cursor = 'not-allowed'
                  return (
                      <div style={copyOfCss} key={index}>
                        <span style={{position: 'absolute', left: '40%', color: 'white', top: '20%'}}>/</span>
                      </div>
                  )
                }
                return <div style={copyOfCss} className={item} onClick={this.onClick} onMouseEnter={this.onEnter} onMouseLeave={this.onLeave} key={index} ></div>
              })}
            </div>
            :
            <div>
              {Object.keys(tempObj).map((item, index) => {
                let value = tempObj[item];
                let copyOfCss = JSON.parse(JSON.stringify(color));
                copyOfCss.backgroundColor = value;
                return <div style={copyOfCss} className={item} onClick={this.onClick} onMouseEnter={this.onEnter} onMouseLeave={this.onLeave} key={index}></div>
              })}
            </div>
          }
        </div>
        <button style={styleForButton}>{this.state.currentColor}</button>
      </div>
    )
  }
}

export default ColorComponent;
