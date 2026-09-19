import React from 'react';
import { SequenceGame } from './shared.jsx';
const steps=[{id:1,title:'Boil the water',emoji:'🫖'},{id:2,title:'Add the tea',emoji:'🍃'},{id:3,title:'Add a little milk',emoji:'🥛'},{id:4,title:'Stir in the sugar',emoji:'🥄'}];
export default function RecipeSteps({onComplete}){return <SequenceGame title="Let’s make a lovely cup of tea. ☕" description="Today’s recipe: water, tea, milk, then sugar. Everyone has their own favorite way!" steps={steps} onComplete={onComplete}/>;}