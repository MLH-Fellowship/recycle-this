import { StyleSheet, Text, View, Dimensions} from 'react-native';
import Constants from './Constants';
const items = ["apple","banana", "can", "champagne", "milk-box","newspaper", "plastic-bottle"];
const RADIUS = Constants.RADIUS;
let points = 0;
let plastic = ["can", "plastic-bottle"];
let paper = ["milk-box", "newspaper"];
let organic = ["apple", "banana"];
let glass =["champagne"];
let trash = [];


const WIDTH = Dimensions.get("screen").width;
const HEIGHT = Dimensions.get("screen").height;

const MoveItem = (entities, { touches }) => {
    let item = entities[1];
    let move = touches.find(x => x.type==="move");
    if (move) {
        item.position = [
            item.position[0]+move.delta.pageX,
            item.position[1]+move.delta.pageY
        ]
    }
    return entities;
  };

  function search (str, strArray) {
    for (var j=0; j<strArray.length; j++) {
        if (strArray[j].match(str)) return j;
    }
    return -1;
}

  const Collision = (entities, {touches, dispatch, events}) => {
    let item = entities[1];
    let nextItem = items[Math.floor(Math.random() * items.length)];
    if (nextItem==item.item)
      nextItem = items[Math.floor(Math.random() * items.length)];
    for (let i=2; i<7; i++) {
      let bin = entities[i];
      var dx = item.position[0]-bin.position[0];
      var dy = item.position[1]-bin.position[1];
      var distance = Math.sqrt(dx*dx+dy*dy);
      if (distance < (RADIUS*2)) {
        item.position = [WIDTH/2, HEIGHT-200];
        if ((search(item.item, plastic)!=-1 && bin.category=="plastic") ||
         (search(item.item, organic)!=-1 && bin.category=="organic") ||
         (search(item.item, paper)!=-1 && bin.category=="paper") ||
         (search(item.item, glass)!=-1 && bin.category=="glass") ||
         (search(item.item, trash)!=-1 && bin.category=="trash")) {
            dispatch({type: "correct"});
         }
         else {
            dispatch({type: "wrong"});
         }
 
        item.item = nextItem;

      }
    }
    return entities;
  }


   
  export { MoveItem, Collision };