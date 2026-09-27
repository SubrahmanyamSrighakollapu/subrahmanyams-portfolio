import type {Metadata,Viewport} from 'next';
import localFont from 'next/font/local';
import {Header} from '@/components/header';
import {Footer} from '@/components/shared';
import {MotionController} from '@/components/motion';
import {profile} from '@/data/portfolio';
import {siteUrl} from '@/lib/seo';
import './globals.css';

const inter=localFont({src:'./fonts/inter.woff2',variable:'--font-inter',display:'swap',weight:'100 900'});
export const metadata:Metadata={
  ...(siteUrl?{metadataBase:new URL(siteUrl)}:{}),
  title:{default:`${profile.name} | Full-Stack Developer`,template:`%s | ${profile.name}`},
  description:'Full-stack developer and freelancer building Angular, Next.js, Node.js and .NET applications, HRMS platforms, CMS websites and digital experiences.',
  applicationName:'Subrahmanyam — Portfolio',authors:[{name:profile.name}],creator:profile.name,
  keywords:['Subrahmanyam Srighakollapu','Full Stack Developer','Next.js Developer','Angular Developer','Node.js','.NET','Freelance Web Developer','Andhra Pradesh'],
  robots:{index:true,follow:true},icons:{icon:'/favicon.svg'},formatDetection:{telephone:false},
};
export const viewport:Viewport={width:'device-width',initialScale:1,themeColor:'#081728'};

export default function RootLayout({children}:{children:React.ReactNode}){
  const person={'@context':'https://schema.org','@type':'Person',name:profile.name,jobTitle:profile.role,...(siteUrl?{url:siteUrl}:{}),sameAs:[profile.github,profile.linkedin],address:{'@type':'PostalAddress',addressRegion:'Andhra Pradesh',addressCountry:'IN'},knowsAbout:['Angular','Next.js','Node.js','.NET','SQL','Web Development']};
  return <html lang="en" className={inter.variable} suppressHydrationWarning><body><a className="skip-link" href="#main-content">Skip to content</a><Header/><main id="main-content">{children}</main><Footer/><MotionController/><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(person).replace(/</g,'\\u003c')}}/></body></html>;
}
