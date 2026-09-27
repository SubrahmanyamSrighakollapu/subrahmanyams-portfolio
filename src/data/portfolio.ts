export const profile = {
  name: 'Subrahmanyam Srighakollapu',
  shortName: 'Subrahmanyam',
  role: 'Full-Stack Developer',
  email: 'subrahmanyamsrighakollapu@gmail.com',
  phone: '+91 6304113198',
  phoneHref: '+916304113198',
  location: 'Andhra Pradesh, India',
  github: 'https://github.com/Subrahmanyam156',
  linkedin: 'https://www.linkedin.com/in/subrahmanyam-srighakollapu-860945227/',
  resume: '/downloads/Subrahmanyam-Srighakollapu-Resume.docx',
  available: true,
};

export const navigation = [
  {label: 'Home', href: '/'}, {label: 'About', href: '/about/'},
  {label: 'Projects', href: '/projects/'}, {label: 'Experience', href: '/experience/'},
  {label: 'Skills', href: '/#skills'}, {label: 'Contact', href: '/contact/'},
];

export type SkillCategory = 'Frontend' | 'Backend' | 'Database' | 'Tools & Deployment' | 'Others';
export const skillCategories: SkillCategory[] = ['Frontend', 'Backend', 'Database', 'Tools & Deployment', 'Others'];
export const skills: {name:string; icon:string; category:SkillCategory}[] = [
  {name:'Angular',icon:'angular',category:'Frontend'},
  {name:'Next.js',icon:'nextjs',category:'Frontend'},
  {name:'React.js',icon:'react',category:'Frontend'},
  {name:'React Native',icon:'react',category:'Frontend'},
  {name:'JavaScript',icon:'javascript',category:'Frontend'},
  {name:'TypeScript',icon:'typescript',category:'Frontend'},
  {name:'Tailwind CSS',icon:'tailwind',category:'Frontend'},
  {name:'Bootstrap',icon:'bootstrap',category:'Frontend'},
  {name:'Node.js',icon:'nodejs',category:'Backend'},
  {name:'Express.js',icon:'express',category:'Backend'},
  {name:'.NET',icon:'dotnet',category:'Backend'},
  {name:'PHP',icon:'php',category:'Backend'},
  {name:'PostgreSQL',icon:'postgresql',category:'Database'},
  {name:'MySQL',icon:'mysql',category:'Database'},
  {name:'MongoDB',icon:'mongodb',category:'Database'},
  {name:'Git',icon:'git',category:'Tools & Deployment'},
  {name:'Nginx',icon:'nginx',category:'Tools & Deployment'},
  {name:'PM2',icon:'pm2',category:'Tools & Deployment'},
  {name:'Python',icon:'python',category:'Others'},
  {name:'HTML5',icon:'html',category:'Frontend'},
  {name:'CSS3',icon:'css',category:'Frontend'},
];

export type Project = {
  id:string; name:string; category:string; color:string; image:string;
  description:string; tech:string[]; filters:string[]; features:string[]; liveUrl?:string;
};
export const projects: Project[] = [
  {id:'news-portal',name:'News Portal - White Label Platform',category:'News / Media',color:'cyan',image:'news-portal',description:'Multi-tenant news publishing platform with role-based dashboards, approval workflows, SEO and social features.',tech:['Next.js','Node.js','MySQL','Nginx'],filters:['Web Applications','CMS Websites','Dashboards','News / Media'],features:['Multi-tenant content and publishing workflows','Separate role-based dashboards for content teams','SEO-friendly articles and social sharing','Frontend, APIs, database and Linux deployment']},
  {id:'rightlyhr',name:'RightlyHR - HRMS & Recruitment',category:'Web Application',color:'purple',image:'rightlyhr',description:'Production HRMS with KRA/KPI module, drag & drop, DocuSign, BoldSign and Microsoft Teams integration.',tech:['Angular','.NET','Graph API','SQL'],filters:['Web Applications','Dashboards'],features:['KRA/KPI configuration and employee performance tracking','Application-wide drag-and-drop functionality','DocuSign and BoldSign digital signatures','Microsoft Teams interview scheduling through Graph APIs']},
  {id:'robot-restaurant',name:'Robot Restaurant Control Screen',category:'Mobile App',color:'green',image:'robot-restaurant',description:'Voice-enabled ordering app with STT/TTS, Razorpay payments, RAGFlow integration and multilingual support.',tech:['React Native','Expo','Razorpay'],filters:['Mobile Apps'],features:['Voice-enabled ordering using speech-to-text and text-to-speech','Razorpay payment integration','RAGFlow integration for conversational assistance','Multilingual experience built with React Native and Expo']},
  {id:'mdigimart',name:'Mdigimart - Grocery Platform',category:'E-Commerce',color:'orange',image:'mdigimart',description:'Multi-portal e-commerce platform with customer, vendor and admin dashboards, order management and payments.',tech:['Next.js','Node.js','MySQL'],filters:['Web Applications','Dashboards','E-Commerce'],features:['Customer storefront and product browsing','Vendor and administrator workflows','Order management and payment flows','Reusable interfaces across multiple user roles']},
  {id:'landvest',name:'Landvest - Real Estate Platform',category:'Real Estate',color:'green',image:'landvest',description:'Property listing platform with advanced search, agent management and an admin CMS.',tech:['Next.js','Node.js','MySQL'],filters:['Web Applications','CMS Websites','Real Estate'],features:['Property listings and advanced search','Agent and property content management','Responsive property detail pages','Admin CMS for ongoing content updates']},
  {id:'cumberland',name:'Cumberland Motor Inn',category:'Hospitality',color:'brown',image:'cumberland',description:'Modern marketing website with CMS for rooms, gallery, amenities and booking enquiries. Built for an Australian client.',tech:['Next.js','Node.js','MySQL'],filters:['CMS Websites','Hospitality'],liveUrl:'https://www.cumberlandmotorinn.com.au/',features:['Room, gallery and local experience pages','CMS-managed content and imagery','Responsive stay enquiry experience','Production deployment for an Australian motel']},
  {id:'vividuss',name:'Vividuss - Marketing Website',category:'IT Services',color:'blue',image:'vividuss',description:'Modern static marketing website with a unique design, responsive layouts and custom UI/UX.',tech:['Next.js','Tailwind CSS'],filters:['Static Websites','IT Services'],features:['Service-specific marketing pages','Responsive layouts and shared navigation','Portfolio presentation and contact flow','Reusable static components']},
  {id:'noveltech',name:'Novel Technology',category:'IT Services',color:'purple',image:'noveltech',description:'Complete marketing website with services, careers and contact pages. Built for an Australian client.',tech:['Next.js','Tailwind CSS'],filters:['Static Websites','IT Services'],features:['Distinctive brand-led hero design','Reusable service detail pages','Careers and company information','Responsive contact experience']},
  {id:'build-right',name:'Build Right Tech',category:'Construction',color:'orange',image:'build-right',description:'Corporate website for a civil construction company with services, projects and contact forms.',tech:['Next.js','Tailwind CSS'],filters:['Static Websites','Construction'],features:['Service and project presentation','Responsive company website','Clear enquiry calls to action','Maintainable page components']},
  {id:'desi-safai',name:'Desi Safai',category:'Service Business',color:'green',image:'desi-safai',description:'Marketing website with CMS for services, gallery and contact. Clean and modern design.',tech:['Next.js','Node.js','MySQL'],filters:['CMS Websites'],features:['Editable service content','Gallery management','Responsive contact experience','Clean layouts for a service business']},
  {id:'creavo',name:'Creavo - Design Tool',category:'Product Website',color:'pink',image:'creavo',description:'Landing website for a design tool with a modern UI, feature highlights and pricing sections.',tech:['Next.js','Tailwind CSS'],filters:['Static Websites'],features:['Product-focused landing page','Feature presentation','Pricing section','Responsive, reusable marketing components']},
  {id:'kbs',name:'KBS Group',category:'IT Services',color:'blue',image:'kbs',description:'Marketing website for an IT company with services, portfolio and contact.',tech:['Next.js','Tailwind CSS'],filters:['Static Websites','IT Services'],features:['Company and service pages','Portfolio presentation','Responsive navigation','Production-ready marketing layouts']},
];

export const experiences = [
  {company:'SNAD Developers',role:'Software Engineer Trainee',date:'Oct 2025 – Present',mark:'SM',color:'purple',current:true,
    description:'Contribute to RightlyHR, a production HRMS & recruitment platform, building features across multiple modules using Angular and .NET.',
    contributions:['Developed a KRA/KPI module for configuring and tracking employee performance.','Implemented application-wide drag-and-drop functionality across tabs.','Integrated DocuSign and BoldSign digital signature services.','Integrated Microsoft Teams in the recruitment module using Microsoft Graph APIs.','Collaborated with product, backend and QA teams to deliver production-ready features.','Received the Amazing Addition Award (Dec 2025) for contribution to the team.'],
    tech:['Angular','.NET','Graph API','DocuSign','BoldSign','TypeScript']},
  {company:'Bot Shreyasi',role:'UI Developer',date:'Sep 2024 – Jul 2025',mark:'Bot',color:'blue',current:false,
    description:'Contributed to the development of an AI conversational bot aimed at streamlining the recruitment process.',
    contributions:['Designed and developed a responsive landing page for the bot.','Worked on OTP workflows, job application forms and candidate detail submissions.','Implemented dynamic UI modules using Angular and Bootstrap.','Integrated APIs with the backend team for seamless data flow.','Enhanced usability with real-time validations and smooth navigation.'],
    tech:['Angular','Bootstrap','JavaScript','HTML5','CSS3','REST API']},
];

export const freelanceContributions = [
  'Delivered 11+ live client websites and web applications end to end.',
  'Worked across news/media, fintech, real estate, e-commerce, IT services, construction, cleaning services and hospitality.',
  'Managed requirements, responsive implementation, CMS, deployment and post-launch support.',
  'Delivered projects for clients in India and Australia.',
];
