import { StyleSheet, Text, View, Dimensions} from 'react-native';
import Matter from "matter-js";

const RADIUS = 20;

const WIDTH = Dimensions.get("screen").width;
const HEIGHT = Dimensions.get("screen").height;

const bins = ['','','binGlass','binOrganic','binPaper','binPlastic','binTrash'];
const Physics = (entities, { touches, time }) => {
  let engine = entities.physics.engine;
  engine.world.gravity.y = 0;
  let item  = entities.item.body;
  Matter.Body.setMass(item,500);
  Matter.Body.applyForce(item, item.position, {x:0.01, y:0})
  let move = touches.find(x => x.type==="move");
  if (move) {
    Matter.Body.setPosition(item, {x: item.position.x+move.delta.pageX, y: item.position.y+move.delta.pageY });
  }

  for (let i=2; i<7; i++) {
    let bin;
    switch(i) {
      case 2:
        bin=entities.binGlass.body;
        break;
      case 3:
        bin=entities.binOrganic.body;
        break;
      case 4:
        bin=entities.binPaper.body;
        break;
      case 5:
        bin=entities.binPlastic.body;
        break;
      case 6:
        bin=entities.binTrash.body;
        break;
    }
    var dx = item.position.x-bin.position.x;
    var dy = item.position.y-bin.position.y;
    var distance = Math.sqrt(dx*dx+dy*dy);
    if (distance < (RADIUS*2)) {
      alert("score bin!"+i);
      Matter.Body.setPosition(item, {x: WIDTH/2, y: HEIGHT-100 });
    }
  }
  Matter.Engine.update(engine, time.delta);
  return entities;
};


   
  export default Physics;
