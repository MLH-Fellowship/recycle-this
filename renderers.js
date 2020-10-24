import React, { PureComponent } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
 
const RADIUS = 20;

class Item extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      item: this.props.item
    }
  }

  componentDidUpdate(prevProps) {
    if(prevProps.item !== this.props.item) {
      this.setState({item: this.props.item});
    }
  }

  render() {
    const x = this.props.position[0] - RADIUS / 2;
    const y = this.props.position[1] - RADIUS / 2;
    let item = this.state.item;
    let img;
    switch(item) {
      case 'apple':
        img = require('./assets/apple.png');
        break;
      case 'banana':
        img = require('./assets/banana.png');
        break;
      case 'can':
        img = require('./assets/can.png');
        break;
      case 'champagne':
        img = require('./assets/champagne.png');
        break;
      case 'milk-box':
        img = require('./assets/milk-box.png');
        break;
      case 'newspaper':
        img = require('./assets/newspaper.png');
        break;
      case 'plastic-bottle':
        img = require('./assets/plastic-bottle.png');
        break;
      default:
        img = require('./assets/newspaper.png');
    }
    //img = require('./assets/'+item+'.png'); -> should get rid of the long switch!

    return (
      <Image source={img} key={this.props.item} style={[styles.item, { left: x, top: y }]}/>
    );
  }
}

class Bin extends PureComponent {
  constructor(props) {
    super(props);
  }
    render() {
        const x = this.props.position[0] - RADIUS / 2;
        const y = this.props.position[1] - RADIUS / 2;
        let c = this.props.category;
        let img;
        if (c=="paper")
          img = require('./assets/bin_paper.jpg');
        else if (c=="glass")
          img = require('./assets/bin_glass.jpg');
        else if (c=="organic")
          img = require('./assets/bin_organic.jpg');
        else if (c=="plastic")
          img = require('./assets/bin_plastic.jpg');
        else if (c=="trash")
          img = require('./assets/bin_trash.png');
        
        return (
          <Image source={img} style={[styles.bin, { left: x, top: y }]}/>
          );

    }
}

class Timer extends PureComponent {
state = {
  minutes: 0,
  seconds: 5,
}

componentDidMount() {
  this.myInterval = setInterval(() => {
      const { seconds, minutes } = this.state

      if (seconds > 0) {
          this.setState(({ seconds }) => ({
              seconds: seconds - 1
          }))
      }
      if (seconds === 0) {
          if (minutes === 0) {
              clearInterval(this.myInterval)
              this.props.onChange();
          } else {
              this.setState(({ minutes }) => ({
                  minutes: minutes - 1,
                  seconds: 59
              }))
          }
      } 
  }, 1000)
}

componentWillUnmount() {
  clearInterval(this.myInterval)
}

render() {
  const { minutes, seconds } = this.state;
  return (
      <View>
          { minutes === 0 && seconds === 0
              ? <Text>Busted!</Text>
              : <Text>Time Remaining: {minutes}:{seconds < 10 ? `0${seconds}` : seconds}</Text>
          }
      </View>
  )
}
}
 
const styles = StyleSheet.create({
  bin: {
    borderRadius: RADIUS * 2,
    width: RADIUS * 3,
    height: RADIUS * 4,
    position: "absolute"
  },
  item: {
    borderRadius: RADIUS * 2,
    width: RADIUS * 2,
    height: RADIUS * 2,
    position: "absolute"
  }

});
 
export { Item, Bin, Timer };