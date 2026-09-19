import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useStore, unlockedAchievements } from '../../store/state.jsx';
import { Button, Icon, PageHeader, Progress, Carousel, Avatar } from '../../components/common/ui.jsx';
import GardenScene, { GameArt } from '../../components/shared/GardenScene.jsx';
import { MemoryCard, MemoryForm, ChallengeForm, FamilyForm } from '../../components/shared/MemorySystem.jsx';
import { VoiceHero } from '../../components/shared/VoiceHero.jsx';
import { achievements } from '../../data/achievements.js';
import { games } from '../../data/games.js';

export function Dashboard({family=false}){
  const{data,setModal,notify}=useStore();
  const[scrollProgress,setScrollProgress]=useState(0);
  const[isScrolled,setIsScrolled]=useState(false);
  const[heroListening,setHeroListening]=useState(false);
  
  useEffect(()=>{
    const handleScroll=()=>{
      const scrolled=window.scrollY;
      const heroHeight=500;
      const progress=Math.min(scrolled/heroHeight,1);
      setScrollProgress(progress);
      setIsScrolled(progress>0.3);
    };
    window.addEventListener('scroll',handleScroll);
    return()=>window.removeEventListener('scroll',handleScroll);
  },[]);
  
  const handleVoiceToggle=(isListening)=>{
    setHeroListening(isListening);
    if(isListening){
      setTimeout(()=>{
        setHeroListening(false);
        notify('Demo voice: Play memory match game','🎙️');
      },2000);
    }
  };
  
  const today=data.completed.filter(c=>c.date.slice(0,10)===new Date().toISOString().slice(0,10));
  const finished=new Set(today.map(c=>c.game));
  const journey=['who-is-this','memory-match','family-memory'];
  const next=journey.find(id=>!finished.has(id));
  const percent=Math.round(journey.filter(id=>finished.has(id)).length/3*100);
  const unlocked=unlockedAchievements(data);
  
  const greeting=family?'Welcome back, Rahul':'Good evening, '+data.profile.name;
  const desc=family?'Small moments of care make a beautiful difference.':'Your little garden is happy to see you. Let\'s make a lovely moment.';
  
  const familyActions = [
    ['Send memory', 'ImagePlus', () => setModal({title: 'Send a memory to Meera', content: <MemoryForm/>})],
    ['Send message', 'MessageCircle', '/app/messages?person=rahul'],
    ['Create challenge', 'Puzzle', () => setModal({title: 'A little family challenge', content: <ChallengeForm/>})],
    ['Add family member', 'UserPlus', () => setModal({title: 'Welcome someone special', content: <FamilyForm/>})]
  ];

  const meeraLabel = "MEERA'S LITTLE MOMENTS";
  const todayLabel = "TODAY'S JOURNEY";
  const headerLabel = family ? meeraLabel : todayLabel;

  return <>
    <PageHeader 
      eyebrow={family?'GROWING CLOSER, TOGETHER':'A LITTLE JOY, JUST FOR YOU'} 
      title={greeting} 
      description={desc} 
      action={<span className="streak-pill"><Icon name="Flame" size={19}/>{new Set(data.completed.map(c=>c.date.slice(0,10))).size||1} {data.completed.length?'active days':'day of possibility'}</span>}
    />
    
    <div className="hanging-plant-container">
      <img src="https://res.cloudinary.com/sh4idspn/image/upload/v1789834996/plant-pot.png" alt="hanging plant pot" className="hanging-plant" />
    </div>
    
    <VoiceHero isScrolled={false} scrollProgress={0} onToggleListening={handleVoiceToggle}/>
    
    {family&&<div className="family-action-bar">{familyActions.map(([label,icon,action])=><Button key={label} variant="secondary" icon={icon} {...(typeof action==='string'?{to:action}:{onClick:action})}>{label}</Button>)}</div>}
    
    <div className="dashboard-top-grid">
      <section className="journey-card">
        <div className="card-eyebrow">
          <span><Icon name="Sun" size={17}/>{headerLabel}</span>
          <span>10 gentle minutes</span>
        </div>
        <h2>{family?'A lovely day, one activity at a time.':'A little remembering.\nA little connecting.'}</h2>
        <p className="muted">{family?'Follow along, encourage, and celebrate.':'Three small moments to make your day a little brighter.'}</p>
        <div className="daily-activities">
          {journey.map((id,i)=>{
            const g=games.find(g=>g.id===id);
            return (
              <Link key={id} to={`/app/games/${id}`} className={finished.has(id)?'completed':''}>
                <span className={`activity-icon ${g.color}`}>
                  <Icon name={finished.has(id)?'Check':g.icon} size={23}/>
                </span>
                <strong>{['Memory','A little play','Family time'][i]}</strong>
                <small>{finished.has(id)?'Lovely work!':['3 min','5 min','2 min'][i]}</small>
              </Link>
            );
          })}
        </div>
        <div className="journey-progress">
          <span>{percent===100?'Your daily moments, beautifully done.':'A little progress is still progress.'}</span>
          <strong>{percent}%</strong>
        </div>
        <Progress value={percent} label="Today's journey progress"/>
        <Button to={family?'/app/journey':`/app/games/${next||'who-is-this'}`}>
          {family?'View Meera\'s journey':percent===100?'Enjoy another little moment':percent?'Continue journey':'Begin today\'s journey'}
          <Icon name="ArrowRight" size={18}/>
        </Button>
        <div className="journey-card-fence">
          <img src="https://res.cloudinary.com/sh4idspn/image/upload/v1789834995/fence.png" alt="decorative fence" />
          <img src="https://res.cloudinary.com/sh4idspn/image/upload/v1789834995/fence.png" alt="decorative fence" />
          <img src="https://res.cloudinary.com/sh4idspn/image/upload/v1789834995/fence.png" alt="decorative fence" />
          <img src="https://res.cloudinary.com/sh4idspn/image/upload/v1789834995/fence.png" alt="decorative fence" />
          <img src="https://res.cloudinary.com/sh4idspn/image/upload/v1789834995/fence.png" alt="decorative fence" />
          <img src="https://res.cloudinary.com/sh4idspn/image/upload/v1789834995/fence.png" alt="decorative fence" />
          <img src="https://res.cloudinary.com/sh4idspn/image/upload/v1789834995/fence.png" alt="decorative fence" />
        </div>
      </section>
      
      <section className="dashboard-garden card">
        <div className="card-title">
          <div>
            <p className="eyebrow">A LITTLE WORLD OF YOUR OWN</p>
            <h3>{family?'Meera\'s memory garden':'Your memory garden'}</h3>
          </div>
          <span className="pill sage">{data.completed.length} seeds</span>
        </div>
        <GardenScene/>
        <div className="garden-card-footer">
          <p>
            <span>🌱</span>
            {data.completed.length?'Look at all that lovely growth.':'Every little activity plants a seed.'}
          </p>
          <Link to="/app/garden" className="text-link">
            Visit garden <Icon name="ArrowUpRight" size={17}/>
          </Link>
        </div>
      </section>
    </div>
    
    <section className="activity-section">
      <div className="section-heading horizontal compact-heading">
        <div>
          <h2>{family?'A glimpse of engagement':'Every little moment counts'}</h2>
          <p>Activity progress, never a medical score.</p>
        </div>
        <Link to="/app/journey" className="text-link">View journey <Icon name="ArrowRight" size={17}/></Link>
      </div>
      <div className="progress-cards">
        {[
          ['Brain','Memory moments',today.filter(c=>['memory-match','who-is-this','object-memory','family-memory'].includes(c.game)).length,'sage'],
          ['Focus','Time to focus',today.filter(c=>['remember-room','daily-sequence','recipe-steps','memory-market'].includes(c.game)).length,'peach'],
          ['Sprout','A growing rhythm',today.length,'amber']
        ].map(([icon,title,count,color])=>{
          const countText = count ? `${count} ${count===1?'activity':'activities'} today` : 'A fresh little start';
          return (
            <article className="progress-card card" key={title}>
              <span className={`feature-icon ${color}`}><Icon name={icon} size={22}/></span>
              <div>
                <h3>{title}</h3>
                <p>{countText}</p>
                <Progress value={Math.min(100,count*33.34)} label={title}/>
              </div>
              <strong>{count}<small>today</small></strong>
            </article>
          );
        })}
      </div>
    </section>
    
    <section className="dashboard-memories">
      <div className="section-heading horizontal compact-heading">
        <div>
          <p className="eyebrow">CLOSE TO THE HEART</p>
          <h2>A few moments worth keeping.</h2>
        </div>
        <Link className="text-link" to="/app/memories">Open your album <Icon name="ArrowRight" size={17}/></Link>
      </div>
      <Carousel items={data.memories.slice(0,6)} label="family memories" renderItem={m=><MemoryCard memory={m} compact/>}/>
    </section>
    
    <div className="dashboard-bottom-grid">
      <section className="card reminders-preview">
        <div className="section-heading horizontal compact-heading">
          <h3>A little nudge</h3>
          <Link className="text-link" to="/app/reminders">View all <Icon name="ArrowUpRight" size={16}/></Link>
        </div>
        {data.reminders.filter(r=>!r.done).slice(0,3).map(r=>(
          <Link to="/app/reminders" className="reminder-mini" key={r.id}>
            <span className="feature-icon amber">
              <Icon name={r.category==='Water'?'Droplets':r.category==='Walk'?'Footprints':'Heart'} size={20}/>
            </span>
            <div>
              <strong>{r.title}</strong>
              <span>{r.time} · {r.category}</span>
            </div>
            <Icon name="ChevronRight" size={16}/>
          </Link>
        ))}
        {!data.reminders.some(r=>!r.done)&&<p className="muted">All your little reminders are taken care of. 🌷</p>}
      </section>
      
      <section className="card achievement-preview">
        <div className="section-heading horizontal compact-heading">
          <h3>Little things to celebrate</h3>
          <Link className="text-link" to="/app/achievements"><Icon name="ArrowUpRight" size={18}/><span className="sr-only">View achievements</span></Link>
        </div>
        <div className="mini-badges">
          {achievements.slice(0,3).map(a=>(
            <Link to="/app/achievements" key={a.id} className={unlocked.includes(a.id)?'unlocked':''}>
              <span>{a.emoji}</span>
              <strong>{a.title}</strong>
              <small>{unlocked.includes(a.id)?'Beautifully earned':'A little joy ahead'}</small>
            </Link>
          ))}
        </div>
        <p className="small muted">Your first achievement is just one activity away.</p>
      </section>
    </div>
    
    <section className="recommendation-banner">
      <div className="recommendation-art"><GameArt type="recipe"/></div>
      <div>
        <p className="eyebrow">SOMETHING YOU MIGHT ENJOY</p>
        <h3>How about a little cup of memory?</h3>
        <p>Put the steps in order to make a lovely cup of tea.</p>
      </div>
      <Button to="/app/games/recipe-steps" variant="secondary">Let's make tea <Icon name="ArrowRight" size={18}/></Button>
    </section>
    
    <div className="mushroom-decoration">
      <img src="https://res.cloudinary.com/sh4idspn/image/upload/v1789834993/mushroom.png" alt="mushroom" />
      <img src="https://res.cloudinary.com/sh4idspn/image/upload/v1789834993/mushroom.png" alt="mushroom" />
    </div>
  </>;
}
