'use client';
import {useEffect,useState,type FormEvent} from 'react';
import {profile} from '@/data/portfolio';
import {Icon,type IconName} from './icons';
const endpoint=process.env.NEXT_PUBLIC_CONTACT_ENDPOINT?.trim();
export function ContactForm(){
  const [message,setMessage]=useState(''),[subject,setSubject]=useState('Project Inquiry'),[status,setStatus]=useState(''),[busy,setBusy]=useState(false);
  useEffect(()=>{const q=new URLSearchParams(window.location.search).get('subject');if(q){setSubject('Project Inquiry');setMessage(`I’d like to discuss ${q.toLowerCase()}.`);}},[]);
  async function submit(event:FormEvent<HTMLFormElement>){
    event.preventDefault();const form=event.currentTarget;if(!form.reportValidity())return;const data=new FormData(form);if(data.get('website'))return;
    const name=String(data.get('name')||'').trim(),email=String(data.get('email')||'').trim(),body=String(data.get('message')||'').trim();
    if(!name||!email||!body){setStatus('Please enter your name, email and a message.');return;}
    setBusy(true);setStatus('');
    try{
      if(endpoint){
        if(!endpoint.startsWith('https://'))throw new Error('Contact endpoint must use HTTPS.');
        const response=await fetch(endpoint,{method:'POST',headers:{'Content-Type':'application/json',Accept:'application/json'},body:JSON.stringify({name,email,subject,message:body})});
        if(!response.ok)throw new Error('The form service could not accept your message.');
        setStatus('Thanks! Your message has been submitted. I’ll get back to you soon.');form.reset();setMessage('');
      }else{
        const mailBody=`Hi Subrahmanyam,\n\n${body}\n\nFrom: ${name}\nEmail: ${email}`;
        window.location.href=`mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(mailBody)}`;
        setStatus('Your email draft is ready to review in your email app. Please send it there. If no app opened, use the email address alongside this form.');
      }
    }catch{setStatus('Could not submit the message. Your text is still here; please email me directly or try again.');}finally{setBusy(false);}
  }
  return <form className="contact-form" onSubmit={submit}><div className="form-row"><label>Your Name <span>*</span><span className="input-wrap"><Icon name="users" size={17}/><input name="name" autoComplete="name" placeholder="Enter your name" required maxLength={100}/></span></label><label>Your Email <span>*</span><span className="input-wrap"><Icon name="mail" size={17}/><input name="email" type="email" autoComplete="email" placeholder="Enter your email" required maxLength={150}/></span></label></div><label>Subject <span>*</span><span className="input-wrap"><Icon name="briefcase" size={17}/><select name="subject" required value={subject} onChange={e=>setSubject(e.target.value)}>{['Project Inquiry','Job Opportunity','Freelance Collaboration','Schedule a Meeting','Tech Discussion','Just Saying Hello'].map(s=><option key={s}>{s}</option>)}</select><Icon name="chevron" size={15}/></span></label><label>Message <span>*</span><textarea name="message" value={message} onChange={e=>setMessage(e.target.value)} required maxLength={500} minLength={10} placeholder="Tell me about your project, opportunity or anything you’d like to discuss..." rows={6}/><small className="character-count">{message.length}/500</small></label><div className="honeypot" aria-hidden="true"><label>Leave this field empty<input name="website" tabIndex={-1} autoComplete="off"/></label></div><button type="submit" className="button contact-submit" disabled={busy}><Icon name="send"/>{busy?'Sending…':'Send Message'}<Icon name="arrow"/></button><p className="form-note">{endpoint?'Your details are used only to respond to your enquiry.':'Opens your email app with a draft for you to review and send.'}</p>{status&&<p className="form-status" role="status">{status}</p>}</form>;
}
export function ContactInfo(){const [copied,setCopied]=useState('');const rows:{label:string;value:string;href?:string;icon:IconName;color:string;copy?:boolean}[]=[{label:'Phone',value:profile.phone,href:`tel:${profile.phoneHref}`,icon:'phone',color:'mint',copy:true},{label:'Email',value:profile.email,href:`mailto:${profile.email}`,icon:'mail',color:'blue',copy:true},{label:'Location',value:profile.location,icon:'pin',color:'pink'},{label:'GitHub',value:'github.com/Subrahmanyam156',href:profile.github,icon:'github',color:'navy'},{label:'LinkedIn',value:'linkedin.com/in/subrahmanyam-srighakollapu-860945227',href:profile.linkedin,icon:'linkedin',color:'cyan'}];async function copy(text:string,label:string){try{await navigator.clipboard.writeText(text);setCopied(`${label} copied`);}catch{setCopied(`Could not copy. Select the ${label.toLowerCase()} text to copy it manually.`);}}
  return <><div className="contact-info-list">{rows.map(r=><div className="contact-info-row" key={r.label}><span className={`icon-tile ${r.color}`}><Icon name={r.icon} size={26}/></span><div><h3>{r.label}</h3>{r.href?<a href={r.href} {...(r.href.startsWith('https')?{target:'_blank',rel:'noopener noreferrer'}:{})}>{r.value}</a>:<p>{r.value}</p>}</div>{r.copy?<button className="icon-button copy-button" aria-label={`Copy ${r.label.toLowerCase()}`} onClick={()=>copy(r.value,r.label)}><Icon name={copied===`${r.label} copied`?'check':'copy'} size={18}/></button>:r.href?.startsWith('https')?<a className="icon-button copy-button" href={r.href} target="_blank" rel="noopener noreferrer" aria-label={`Open ${r.label}`}><Icon name="external" size={18}/></a>:null}</div>)}</div><p className="copy-status sr-only" role="status">{copied}</p></>;
}
