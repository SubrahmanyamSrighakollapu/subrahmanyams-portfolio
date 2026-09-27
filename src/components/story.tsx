'use client';
import {useState} from 'react';
import Link from 'next/link';
import {Dialog} from './dialog';
import {Icon} from './icons';
export function StoryButton({light=false}:{light?:boolean}){
  const [open,setOpen]=useState(false),[chapter,setChapter]=useState(0);
  const chapters=[
    {label:'The beginning',title:'Curiosity became a craft.',text:'I’m Subrahmanyam, a full-stack developer from Andhra Pradesh. My journey started with an interest in technology and problem solving, and grew through an Electronics & Communication Engineering degree at RGUKT and hands-on projects.'},
    {label:'What I build',title:'Ideas into useful products.',text:'I work with Angular, Next.js, Node.js, .NET and SQL. My professional work includes recruitment and HRMS features, while my freelance work spans news platforms, CMS websites, real estate, e-commerce and hospitality projects for clients in India and Australia.'},
    {label:'What comes next',title:'Keep learning. Keep building.',text:'I enjoy taking ownership of a project from its first requirements to a working product. I’m open to full-time opportunities, freelance projects and thoughtful conversations about building better digital experiences.'},
  ];const c=chapters[chapter];
  return <><button className={`story-button ${light?'story-light':''}`} onClick={()=>{setChapter(0);setOpen(true);}}><span className="play-circle"><Icon name="play" size={18}/></span><span>My Story{light&&<small>1 min read</small>}</span></button><Dialog open={open} onClose={()=>setOpen(false)} title="My story"><div className="story-modal"><span className="eyebrow">{c.label} · 0{chapter+1}/03</span><h2>{c.title}</h2><p>{c.text}</p><div className="story-steps" aria-label="Story chapters">{chapters.map((ch,i)=><button key={ch.label} onClick={()=>setChapter(i)} className={i===chapter?'active':''} aria-label={`Read ${ch.label}`} aria-pressed={i===chapter}/>)}</div>{chapter<2?<button className="button" onClick={()=>setChapter(chapter+1)}>Next chapter <Icon name="arrow"/></button>:<Link className="button" onClick={()=>setOpen(false)} href="/contact/">Let’s connect <Icon name="arrow"/></Link>}</div></Dialog></>;
}
