import React, { Component } from "react";
import { StyleSheet, View, Image, Text} from "react-native";
 
const RADIUS = 20;
export default class Bin extends Component {
    constructor(props) {
      super(props);
    }
      render() {
        const x = this.props.body.position.x - RADIUS / 2;
        const y = this.props.body.position.y- RADIUS / 2;
          let c = this.props.category; //"paper"
          let img;
          if (c=="paper")
            img = require('./../assets/bin_paper.jpg');
          else if (c=="glass")
            img = require('./../assets/bin_glass.jpg');
          else if (c=="organic")
            img = require('./../assets/bin_organic.jpg');
          else if (c=="plastic")
            img = require('./../assets/bin_plastic.jpg');
          else if (c=="trash")
            img = require('./../assets/bin_trash.png');
          
          return (
              <View>
              <Text>{this.props.body.id}</Text>
            <Image source={img} style={[styles.bin, { left: x, top: y }]}/>
            </View>
            );
  
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