import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';
import { initialFamily } from '../data/family.js';
import { initialMemories } from '../data/memories.js';
import { initialReminders } from '../data/reminders.js';
import { initialMessages } from '../data/messages.js';
import { initialActivities } from '../data/garden.js';
import { achievements } from '../data/achievements.js';
const Context = createContext(null);
const KEY = 'smriticare-garden-v1';
const defaultState = { session:null, profile:{name:'Meera',age:68,favorites:'Memory Match, gardening, and family stories'}, family:initialFamily, memories:initialMemories, reminders:initialReminders, messages:initialMessages, challenges:[], activities:initialActivities, points:0, completed:[], settings:{textSize:1,contrast:false,motion:window.matchMedia('(prefers-reduced-motion: reduce)').matches,sound:false,appearance:'light',notifications:{memories:true,journey:true,reminders:true,achievements:true}} };
export function unlockedAchievements(data) {
 const count = {activities:data.completed.length,match:data.completed.filter(x=>x.game==='memory-match').length,bond:data.completed.filter(x=>x.game==='family-memory').length,memories:data.memories.length,days:new Set(data.completed.map(x=>x.date.slice(0,10))).size};
 return achievements.filter(a=>count[a.type]>=a.target).map(a=>a.id);
}
export function StoreProvider({children}) {
 const [data,setData] = useState(()=>{try {const saved=JSON.parse(localStorage.getItem(KEY));return saved ? {...defaultState,...saved,settings:{...defaultState.settings,...saved.settings}} : defaultState;}catch{return defaultState;}});
 const [toasts,setToasts] = useState([]);
 const [modal,setModal] = useState(null);
 const [storageFailed,setStorageFailed] = useState(false);
 const notify = useCallback((text,icon='🌿')=>{const id=crypto.randomUUID();setToasts(t=>[...t.slice(-2),{id,text,icon}]);setTimeout(()=>setToasts(t=>t.filter(x=>x.id!==id)),4500);},[]);
 useEffect(()=>{try {localStorage.setItem(KEY,JSON.stringify(data));}catch{if(!storageFailed){setStorageFailed(true);notify('Your browser storage is full. New changes will last for this visit only.','⚠️');}}},[data]);
 useEffect(()=>{document.documentElement.style.fontSize=`${16*data.settings.textSize}px`;document.documentElement.dataset.contrast=data.settings.contrast||data.settings.appearance==='contrast'?'true':'false';document.documentElement.dataset.motion=data.settings.motion?'reduced':'full';document.documentElement.dataset.appearance=data.settings.appearance;},[data.settings]);
 const update = useCallback(fn=>setData(d=>typeof fn==='function'?fn(d):({...d,...fn})),[]);
 const activity=(title,kind='activity')=>({id:crypto.randomUUID(),title,kind,date:new Date().toISOString()});
 function completeGame(game,score) {
   const date=new Date().toISOString();
   const completion={id:crypto.randomUUID(),game:game.id,title:game.title,date,score};
   update(d=>({...d,points:d.points+20,completed:[...d.completed,completion],activities:[activity(`${game.title} completed`,'game'),...d.activities]}));
   notify('Your garden has grown! +1 Memory Seed','🌸');
   if(data.settings.sound) playChime();
 }
 function addMemory(memory) {const m={...memory,id:crypto.randomUUID(),favorite:false};update(d=>({...d,memories:[m,...d.memories],activities:[activity(`${m.from || 'You'} added “${m.title}”`,'memory'),...d.activities]}));notify('A new memory has a home in your album.','📸');}
 function sendMessage(person,text,type='text',extra={}) {const message={id:crypto.randomUUID(),text,type,from:data.session==='family'?'them':'me',time:new Date().toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'}),...extra};update(d=>({...d,messages:{...d.messages,[person]:[...(d.messages[person]||[]),message]},activities:[activity('A little connection with family','family'),...d.activities]}));}
 function playChime(){try{const ctx=new (window.AudioContext||window.webkitAudioContext)();[523.25,659.25,783.99].forEach((frequency,i)=>{const osc=ctx.createOscillator(),gain=ctx.createGain();osc.connect(gain);gain.connect(ctx.destination);osc.frequency.value=frequency;gain.gain.setValueAtTime(0.045,ctx.currentTime+i*.13);gain.gain.exponentialRampToValueAtTime(.001,ctx.currentTime+.5+i*.13);osc.start(ctx.currentTime+i*.13);osc.stop(ctx.currentTime+.6+i*.13);});setTimeout(()=>ctx.close(),1200);}catch{/* Sound is optional. */}}
 return <Context.Provider value={{data,update,notify,toasts,setToasts,modal,setModal,completeGame,addMemory,sendMessage,activity,playChime}}>{children}</Context.Provider>;
}
export const useStore=()=>useContext(Context);
