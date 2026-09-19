import React from 'react';
import { ObserveGame } from './shared.jsx';
const objects=[{name:'Keys',emoji:'🔑'},{name:'Book',emoji:'📖'},{name:'Apple',emoji:'🍎'},{name:'Glasses',emoji:'👓'},{name:'Flower',emoji:'🌷'},{name:'Cup',emoji:'☕'}];
const rounds=[{objects:objects.slice(0,3),options:objects.slice(0,3),correct:[1]},{objects:objects.slice(0,4),options:objects.slice(0,4),correct:[0]},{objects,options:objects,correct:[4]}];
export default function ObjectMemory({onComplete}){return <ObserveGame missing rounds={rounds} onComplete={onComplete}/>;}