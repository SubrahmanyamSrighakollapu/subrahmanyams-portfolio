'use client';
import {useState} from 'react';
import {skillCategories,skills,type SkillCategory} from '@/data/portfolio';
import {Icon,type IconName} from './icons';
const categoryIcons:Record<SkillCategory,IconName>={Frontend:'monitor',Backend:'server',Database:'database','Tools & Deployment':'network',Others:'more'};
export function Skills(){
  const [active,setActive]=useState<SkillCategory|'All'>('All');
  const shown=active==='All'?skills.slice(0,18):skills.filter(s=>s.category===active);
  return <div className="skills-browser"><div className="skill-tabs" role="group" aria-label="Filter technologies"><button className={active==='All'?'active':''} aria-pressed={active==='All'} onClick={()=>setActive('All')}><Icon name="grid" size={15}/> All Skills</button>{skillCategories.map(c=><button key={c} className={active===c?'active':''} aria-pressed={active===c} onClick={()=>setActive(c)}><Icon name={categoryIcons[c]} size={15}/>{c}</button>)}</div><div className="skills-grid" aria-live="polite">{shown.map(s=><div className="skill-card" key={s.name}><img src={`/tech/${s.icon}.svg`} alt="" width="38" height="38" loading="lazy"/><span>{s.name}</span></div>)}</div></div>;
}
