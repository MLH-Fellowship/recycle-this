import { StyleSheet, Text, View, Dimensions} from 'react-native';

const RADIUS = 20;

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

  const Collision = (entities) => {
    let item = entities[1];
    for (let i=2; i<7; i++) {
      let bin = entities[i];
      var dx = item.position[0]-bin.position[0];
      var dy = item.position[1]-bin.position[1];
      var distance = Math.sqrt(dx*dx+dy*dy);
      if (distance < (RADIUS*2)) {
        alert("score bin!"+i);
        item.position = [WIDTH/2, HEIGHT-100]
      }
    }
    return entities;

  }
   
  export { MoveItem, Collision };