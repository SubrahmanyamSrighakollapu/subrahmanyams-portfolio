'use client';
import {useMemo,useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {projects,type Project} from '@/data/portfolio';
import {Dialog} from './dialog';
import {Icon} from './icons';

export function ProjectGrid({featured=false}:{featured?:boolean}){
  const [filter,setFilter]=useState('All Projects'),[query,setQuery]=useState(''),[selected,setSelected]=useState<Project|null>(null);
  const visible=useMemo(()=>projects.filter(p=>(filter==='All Projects'||p.filters.includes(filter))&&`${p.name} ${p.description} ${p.tech.join(' ')}`.toLowerCase().includes(query.toLowerCase().trim())),[filter,query]);
  const primary=['All Projects','Web Applications','Dashboards','CMS Websites','Mobile Apps','Static Websites'];
  const secondary=['News / Media','E-Commerce','Real Estate','Hospitality','IT Services','Construction'];
  return <>
    {!featured&&<div className="project-toolbar"><div className="project-filters" role="group" aria-label="Filter projects">{primary.map(f=><button key={f} onClick={()=>setFilter(f)} className={f===filter?'active':''} aria-pressed={f===filter}>{f}</button>)}<label className={`more-filter ${secondary.includes(filter)?'active':''}`}><span className="sr-only">More project categories</span><select value={secondary.includes(filter)?filter:''} onChange={e=>setFilter(e.target.value||'All Projects')}><option value="">More</option>{secondary.map(f=><option key={f}>{f}</option>)}</select><Icon name="chevron" size={14}/></label></div><label className="project-search"><Icon name="search" size={18}/><span className="sr-only">Search projects</span><input value={query} onChange={e=>setQuery(e.target.value)} type="search" placeholder="Search projects..."/></label></div>}
    {!featured&&<p className="sr-only" role="status">{visible.length} {visible.length===1?'project':'projects'} found</p>}
    <div className={`project-grid ${featured?'featured-grid':''}`}>
      {(featured?projects.slice(0,3):visible).map(p=><article className="project-card" key={p.id}><button className="project-image" aria-label={`View details for ${p.name}`} onClick={()=>setSelected(p)}><Image src={`/images/${p.image}.webp`} alt={`${p.name} application interface preview`} fill sizes="(max-width: 600px) 100vw, (max-width: 1000px) 50vw, 33vw"/><span className="project-image-action"><Icon name="arrowUpRight"/></span></button><div className="project-card-body"><span className={`project-category ${p.color}`}>{p.category}</span><h3><button onClick={()=>setSelected(p)}>{p.name}</button></h3><p>{p.description}</p><div className="tags">{(featured?p.tech.slice(0,3):p.tech).map(t=><span key={t}>{t}</span>)}</div><div className="project-actions">{p.liveUrl&&<a className="text-link" href={p.liveUrl} target="_blank" rel="noopener noreferrer">Live Site<Icon name="arrowUpRight" size={16}/></a>}<button className="text-link" onClick={()=>setSelected(p)}>{featured?'Explore Project':'View Details'}<Icon name="arrow" size={16}/></button></div></div></article>)}
    </div>
    {!featured&&visible.length===0&&<div className="empty-projects"><Icon name="search" size={36}/><h3>No projects found</h3><p>Try a different search or category.</p><button className="button" onClick={()=>{setFilter('All Projects');setQuery('');}}>Show all projects</button></div>}
    <Dialog open={!!selected} onClose={()=>setSelected(null)} title={selected?.name||'Project details'}>{selected&&<><div className="project-modal-image"><Image src={`/images/${selected.image}.webp`} alt={`${selected.name} project preview`} fill sizes="700px"/></div><div className="project-modal-content"><span className={`project-category ${selected.color}`}>{selected.category}</span><h2>{selected.name}</h2><p>{selected.description}</p><div className="tags">{selected.tech.map(t=><span key={t}>{t}</span>)}</div><h3>Project highlights</h3><ul className="check-list">{selected.features.map(f=><li key={f}><Icon name="check" size={18}/>{f}</li>)}</ul><div className="button-row">{selected.liveUrl&&<a className="button" href={selected.liveUrl} target="_blank" rel="noopener noreferrer">Visit Website<Icon name="external" size={17}/></a>}<Link href={`/contact/?subject=${encodeURIComponent(`A project like ${selected.name}`)}`} className="button button-outline" onClick={()=>setSelected(null)}>Discuss a Similar Project<Icon name="arrow" size={17}/></Link></div></div></>}</Dialog>
  </>;
}
