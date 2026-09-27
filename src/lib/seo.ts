import type { Metadata } from 'next';
import { profile } from '@/data/portfolio';
const rawUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
export const siteUrl = rawUrl && /^https?:\/\//.test(rawUrl) ? rawUrl.replace(/\/$/, '') : undefined;
export function pageMetadata(title:string,description:string,path='/'): Metadata {
  const url=siteUrl ? `${siteUrl}${path}` : undefined;
  return { title:path==='/'?`${title} | ${profile.name}`:title,description,alternates:url?{canonical:url}:undefined,
    openGraph:{title:`${title} | ${profile.name}`,description,type:'website',siteName:`${profile.name} — Portfolio`,locale:'en_IN',...(url?{url}:{})},
    twitter:{card:'summary',title:`${title} | ${profile.name}`,description},
  };
}
