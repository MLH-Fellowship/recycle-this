import { StyleSheet, Text, View, Dimensions} from 'react-native';

items = ["apple","banana", "can", "newspaper"];
const RADIUS = 20;

plastic = ["can"];
paper = [];
organic = ["apple", "banana"];
glass =[];
trash = [];


const WIDTH = Dimensions.get("screen").width;
const HEIGHT = Dimensions.get("screen").height;

const MoveItem = (entities, { touches }) => {
 
    //-- I'm choosing to update the game state (entities) directly for the sake of brevity and simplicity.
    //-- There's nothing stopping you from treating the game state as immutable and returning a copy..
    //-- Example: return { ...entities, t.id: { UPDATED COMPONENTS }};
    //-- That said, it's probably worth considering performance implications in either case.

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
        item.position = [WIDTH/2, HEIGHT-100];
        item.item = nextItem;
      }
    }
    return entities;
  }
   
  export { MoveItem, Collision };