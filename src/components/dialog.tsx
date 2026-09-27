'use client';
import {useEffect,useRef,type ReactNode} from 'react';
import {Icon} from './icons';
export function Dialog({open,onClose,title,children}:{open:boolean;onClose:()=>void;title:string;children:ReactNode}){
  const ref=useRef<HTMLDialogElement>(null);
  useEffect(()=>{
    const dialog=ref.current;if(!dialog)return;
    if(open&&!dialog.open){const active=document.activeElement as HTMLElement;dialog.showModal();const old=document.body.style.overflow;document.body.style.overflow='hidden';return()=>{dialog.close();document.body.style.overflow=old;active?.focus();};}
  },[open]);
  return <dialog className="modal" ref={ref} aria-label={title} onClose={onClose} onClick={e=>{if(e.target===e.currentTarget)onClose();}}><div className="modal-inner"><button className="icon-button modal-close" onClick={onClose} aria-label="Close dialog"><Icon name="close"/></button>{children}</div></dialog>;
}
