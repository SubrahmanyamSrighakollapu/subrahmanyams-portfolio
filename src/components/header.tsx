'use client';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {useEffect,useRef,useState} from 'react';
import {navigation,profile} from '@/data/portfolio';
import {Icon} from './icons';

export function Logo(){return <Link href="/" className="brand" aria-label="Subrahmanyam — home"><span className="brand-mark" aria-hidden="true">S</span><span><strong>{profile.shortName}</strong><small>{profile.role}</small></span></Link>;}
export function Header(){
  const pathname=usePathname();const dark=['/','/projects','/experience'].includes(pathname.replace(/\/$/,'')||'/');
  const [open,setOpen]=useState(false);const [night,setNight]=useState(false);const toggle=useRef<HTMLButtonElement>(null);const menu=useRef<HTMLDivElement>(null);
  useEffect(()=>{try{const saved=localStorage.getItem('portfolio-theme');setNight(saved==='dark');document.documentElement.dataset.theme=saved==='dark'?'dark':'light';}catch{}},[]);
  useEffect(()=>{setOpen(false);},[pathname]);
  useEffect(()=>{
    if(!open)return;const old=document.body.style.overflow;document.body.style.overflow='hidden';
    const links=menu.current?.querySelectorAll<HTMLElement>('a,button');links?.[0]?.focus();
    const onKey=(event:KeyboardEvent)=>{
      if(event.key==='Escape'){setOpen(false);toggle.current?.focus();}
      if(event.key==='Tab'&&links?.length){const first=links[0],last=links[links.length-1];if(event.shiftKey&&document.activeElement===first){event.preventDefault();last.focus();}else if(!event.shiftKey&&document.activeElement===last){event.preventDefault();first.focus();}}
    };window.addEventListener('keydown',onKey);
    return()=>{document.body.style.overflow=old;window.removeEventListener('keydown',onKey);};
  },[open]);
  const changeTheme=()=>{const value=!night;setNight(value);document.documentElement.dataset.theme=value?'dark':'light';try{localStorage.setItem('portfolio-theme',value?'dark':'light');}catch{}};
  return <header className={`site-header ${dark?'on-dark':'on-light'} ${open?'menu-is-open':''}`}>
    <div className="container header-inner"><Logo/><nav className="desktop-nav" aria-label="Main navigation">{navigation.map(item=><Link key={item.label} href={item.href} aria-current={pathname.replace(/\/$/,'')===item.href.replace(/\/$/,'')?'page':undefined}>{item.label}</Link>)}</nav>
    <div className="header-actions"><button className="icon-button theme-toggle" onClick={changeTheme} aria-label={night?'Switch to light theme':'Switch to dark theme'}><Icon name={night?'moon':'sun'}/></button><Link href="/contact/" className="button small header-cta">Let’s Talk <Icon name="arrow" size={17}/></Link><button ref={toggle} className="icon-button mobile-toggle" aria-label={open?'Close navigation':'Open navigation'} aria-expanded={open} aria-controls="mobile-navigation" onClick={()=>setOpen(!open)}><Icon name={open?'close':'menu'}/></button></div></div>
    {open&&<div id="mobile-navigation" className="mobile-navigation" role="dialog" aria-modal="true" aria-label="Navigation" ref={menu}><button className="mobile-close" onClick={()=>{setOpen(false);toggle.current?.focus();}}>Close <Icon name="close"/></button>{navigation.map((item,i)=><Link key={item.label} href={item.href} onClick={()=>{setOpen(false);toggle.current?.focus();}}><span>0{i+1}</span>{item.label}<Icon name="arrowUpRight"/></Link>)}<a className="mobile-email" href={`mailto:${profile.email}`}>Let’s build something together.</a></div>}
  </header>;
}
