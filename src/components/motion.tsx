'use client';
import {useEffect} from 'react';
import {usePathname} from 'next/navigation';

/** One observer for every section. Re-entering from either edge replays the reveal. */
export function MotionController(){
  const pathname=usePathname();
  useEffect(()=>{
    const reduced=window.matchMedia('(prefers-reduced-motion: reduce)');
    let observer:IntersectionObserver|undefined, frame=0, previousY=window.scrollY, direction='down';
    const nodes=Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));
    const parallax=Array.from(document.querySelectorAll<HTMLElement>('[data-parallax]'));
    const progress=document.querySelector<HTMLElement>('.scroll-progress');
    const topButton=document.querySelector<HTMLElement>('.back-to-top');
    const initialize=()=>{
      observer?.disconnect();
      document.documentElement.classList.toggle('motion-ready',!reduced.matches);
      if(reduced.matches){nodes.forEach(n=>n.classList.add('is-visible'));return;}
      observer=new IntersectionObserver(entries=>{
        entries.forEach(entry=>{
          const element=entry.target as HTMLElement;
          if(entry.isIntersecting) element.classList.add('is-visible');
          else {element.classList.remove('is-visible');element.dataset.from=entry.boundingClientRect.top<0?'above':'below';}
        });
      },{threshold:0.08,rootMargin:'0px 0px -24px 0px'});
      nodes.forEach(n=>{n.dataset.from='below';observer?.observe(n);});
    };
    const update=()=>{
      const y=window.scrollY, total=document.documentElement.scrollHeight-window.innerHeight;
      direction=y<previousY?'up':'down';previousY=y;
      document.documentElement.dataset.scrollDirection=direction;
      document.documentElement.classList.toggle('has-scrolled',y>24);
      if(progress)progress.style.transform=`scaleX(${total>0?y/total:0})`;
      topButton?.classList.toggle('show',y>600);
      if(!reduced.matches)parallax.forEach(n=>{
        const rect=n.getBoundingClientRect();
        if(rect.bottom>0&&rect.top<window.innerHeight){const shift=Math.max(-28,Math.min(28,(window.innerHeight/2-rect.top-rect.height/2)*.045));n.style.setProperty('--parallax-y',`${shift}px`);}
      });frame=0;
    };
    const onScroll=()=>{if(!frame)frame=requestAnimationFrame(update);};
    initialize();update();
    window.addEventListener('scroll',onScroll,{passive:true});window.addEventListener('resize',onScroll);reduced.addEventListener('change',initialize);
    return()=>{observer?.disconnect();cancelAnimationFrame(frame);window.removeEventListener('scroll',onScroll);window.removeEventListener('resize',onScroll);reduced.removeEventListener('change',initialize);};
  },[pathname]);
  return <><div className="scroll-progress" aria-hidden="true"/><button className="back-to-top" type="button" aria-label="Back to top" onClick={()=>window.scrollTo({top:0,behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'})}>↑</button></>;
}
