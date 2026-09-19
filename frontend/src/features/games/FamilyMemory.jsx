import React from 'react';
import { QuizGame } from './shared.jsx';
import { images } from '../../data/images.js';
import { useStore } from '../../store/state.jsx';
export default function FamilyMemory({onComplete}){const{data}=useStore();const questions=[...data.challenges,{question:'Where was our lovely summer trip?',image:images.beach,context:'It was summer 2018. We walked by the sea in Goa and shared stories over tea.',options:['Goa','Jaipur','Delhi','Mumbai'],correct:0},{question:'Who planted their first sunflower with you?',image:images.garden,context:'Your grandson Arjun promised to water it every morning.',options:['Rahul','Anita','Arjun','Sunita'],correct:2}];return <QuizGame questions={questions} onComplete={onComplete}/>;}