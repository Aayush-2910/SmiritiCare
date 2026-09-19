import React from 'react';
import { ObserveGame } from './shared.jsx';
const objects=[{name:'Cup',emoji:'☕'},{name:'Book',emoji:'📖'},{name:'Glasses',emoji:'👓'},{name:'Keys',emoji:'🔑'},{name:'Flower',emoji:'🌷'},{name:'Clock',emoji:'🕰️'}];
const extras=[{name:'Ball',emoji:'⚽'},{name:'Apple',emoji:'🍎'}];
const rounds=[{objects:objects.slice(0,3),options:[objects[0],extras[0],objects[2],objects[1],extras[1]],correct:[0,2,3]},{objects:objects.slice(2,6),options:[objects[3],extras[1],objects[4],objects[2],extras[0],objects[5]],correct:[0,2,3,5]},{objects,options:[...objects,...extras],correct:[0,1,2,3,4,5]}];
export default function RememberRoom({onComplete}){return <ObserveGame rounds={rounds} onComplete={onComplete}/>;}