import React from 'react';
import { SequenceGame } from './shared.jsx';
const steps=[{id:1,title:'Wake up to a lovely day',emoji:'☀️'},{id:2,title:'Brush your teeth',emoji:'🪥'},{id:3,title:'Enjoy some breakfast',emoji:'🥣'},{id:4,title:'Take a little walk',emoji:'🚶'}];
export default function DailySequence({onComplete}){return <SequenceGame title="A lovely start to the day." description="For this little story, wake up, brush, enjoy breakfast, then take a walk." steps={steps} onComplete={onComplete}/>;}