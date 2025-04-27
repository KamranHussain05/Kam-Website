(()=>{var e={};e.id=308,e.ids=[308],e.modules={2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},3881:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>a.a,__next_app__:()=>m,originalPathname:()=>h,pages:()=>d,routeModule:()=>u,tree:()=>c}),s(2076),s(8840),s(2029),s(5866);var n=s(3191),r=s(8716),i=s(7922),a=s.n(i),o=s(5231),l={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>o[e]);s.d(t,l);let c=["",{children:["blog",{children:["[slug]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,2076)),"/Users/kamranhussain/Documents/GitHub/Kam-Website/kamsite/src/app/blog/[slug]/page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(s.bind(s,8840)),"/Users/kamranhussain/Documents/GitHub/Kam-Website/kamsite/src/app/blog/layout.tsx"]}]},{layout:[()=>Promise.resolve().then(s.bind(s,2029)),"/Users/kamranhussain/Documents/GitHub/Kam-Website/kamsite/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,5866,23)),"next/dist/client/components/not-found-error"]}],d=["/Users/kamranhussain/Documents/GitHub/Kam-Website/kamsite/src/app/blog/[slug]/page.tsx"],h="/blog/[slug]/page",m={require:s,loadChunk:()=>Promise.resolve()},u=new n.AppPageRouteModule({definition:{kind:r.x.APP_PAGE,page:"/blog/[slug]/page",pathname:"/blog/[slug]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},7073:(e,t,s)=>{Promise.resolve().then(s.t.bind(s,2994,23)),Promise.resolve().then(s.t.bind(s,6114,23)),Promise.resolve().then(s.t.bind(s,9727,23)),Promise.resolve().then(s.t.bind(s,9671,23)),Promise.resolve().then(s.t.bind(s,1868,23)),Promise.resolve().then(s.t.bind(s,4759,23))},6346:(e,t,s)=>{Promise.resolve().then(s.bind(s,6063)),Promise.resolve().then(s.bind(s,2347)),Promise.resolve().then(s.bind(s,1062))},9877:(e,t,s)=>{Promise.resolve().then(s.bind(s,6063)),Promise.resolve().then(s.bind(s,2347)),Promise.resolve().then(s.bind(s,1062))},183:(e,t,s)=>{Promise.resolve().then(s.bind(s,8205))},8205:(e,t,s)=>{"use strict";s.d(t,{BlogPost:()=>l});var n=s(326),r=s(9622),i=s(2453),a=s(434);let o=(0,s(6557).Z)("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);function l({post:e}){return e?n.jsx("div",{className:"max-w-4xl mx-auto",children:(0,n.jsxs)(r.E.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},children:[(0,n.jsxs)(a.default,{href:"/blog/",className:"inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-8",children:[n.jsx(o,{className:"w-4 h-4 mr-2"}),"Back to blog"]}),(0,n.jsxs)("article",{className:"prose prose-lg dark:prose-invert max-w-none",children:[n.jsx("h1",{children:e.title}),n.jsx("time",{className:"text-sm text-muted-foreground",children:(0,i.WU)(new Date(e.date),"MMMM d, yyyy")}),n.jsx("div",{className:"mt-8",dangerouslySetInnerHTML:{__html:e.content.split("\n").map(e=>e.startsWith("# ")?`<h1>${e.slice(2)}</h1>`:e.startsWith("## ")?`<h2>${e.slice(3)}</h2>`:e.startsWith("### ")?`<h3>${e.slice(4)}</h3>`:e.startsWith("- ")?`<li>${e.slice(2)}</li>`:""===e.trim()?"<br>":`<p>${e}</p>`).join("")}})]})]})}):(0,n.jsxs)("div",{className:"text-center py-12",children:[n.jsx("h1",{className:"text-2xl font-bold mb-4",children:"Post not found"}),n.jsx(a.default,{href:"/blog/",className:"text-primary hover:underline",children:"Return to blog"})]})}},6063:(e,t,s)=>{"use strict";s.d(t,{Footer:()=>c});var n=s(326),r=s(2893),i=s(2019),a=s(4857),o=s(5932);let l=[{icon:r.Z,href:"https://github.com/kamranhussain05",label:"GitHub"},{icon:i.Z,href:"https://linkedin.com/in/kamran-hussain1",label:"LinkedIn"},{icon:a.Z,href:"https://x.com/kamhn123",label:"Twitter"},{icon:o.Z,href:"mailto:kahussai@ucsc.com",label:"Email"}];function c(){return n.jsx("footer",{className:"bg-muted/50 py-12",children:(0,n.jsxs)("div",{className:"container mx-auto px-4",children:[(0,n.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8",children:[(0,n.jsxs)("div",{children:[n.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Kamran Hussain"}),n.jsx("p",{className:"text-muted-foreground",children:"Aspiring computational neuroscientist and machine learning researcher eager to apply machine learning methods to neuroprosthetic devices and build our understanding of the brain."})]}),(0,n.jsxs)("div",{children:[n.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Quick Links"}),(0,n.jsxs)("ul",{className:"space-y-2",children:[n.jsx("li",{children:n.jsx("a",{href:"#about",className:"text-muted-foreground hover:text-primary transition-colors",children:"About"})}),n.jsx("li",{children:n.jsx("a",{href:"#research",className:"text-muted-foreground hover:text-primary transition-colors",children:"Research"})}),n.jsx("li",{children:n.jsx("a",{href:"#projects",className:"text-muted-foreground hover:text-primary transition-colors",children:"Projects"})}),n.jsx("li",{children:n.jsx("a",{href:"/blog",className:"text-muted-foreground hover:text-primary transition-colors",children:"Blog"})})]})]}),(0,n.jsxs)("div",{children:[n.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Connect"}),n.jsx("div",{className:"flex space-x-4",children:l.map(e=>n.jsx("a",{href:e.href,target:"_blank",rel:"noopener noreferrer",className:"text-muted-foreground hover:text-primary transition-colors","aria-label":e.label,children:n.jsx(e.icon,{className:"w-5 h-5"})},e.label))})]})]}),n.jsx("div",{className:"mt-8 pt-8 border-t border-border text-center text-muted-foreground",children:(0,n.jsxs)("p",{children:["\xa9 ",new Date().getFullYear()," Kamran Hussain. All rights reserved."]})})]})})}},2347:(e,t,s)=>{"use strict";s.d(t,{Navbar:()=>p});var n=s(326),r=s(7577),i=s(9622),a=s(850),o=s(2607),l=s(3574);function c(){let{theme:e,setTheme:t}=(0,l.F)();return(0,n.jsxs)("button",{onClick:()=>t("light"===e?"dark":"light"),className:"rounded-full p-2 hover:bg-accent transition-colors","aria-label":"Toggle theme",children:[n.jsx(a.Z,{className:"h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"}),n.jsx(o.Z,{className:"absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"}),n.jsx("span",{className:"sr-only",children:"Toggle theme"})]})}var d=s(4019),h=s(748),m=s(434);let u=[{label:"Home",href:"/"},{label:"About",href:"/#about"},{label:"Research",href:"/#research"},{label:"Projects",href:"/#projects"},{label:"Contact",href:"https://www.linkedin.com/in/kamran-hussain1/"}];function p(){let[e,t]=(0,r.useState)(!1),[s,a]=(0,r.useState)(!1);return n.jsx(i.E.nav,{initial:{y:-100},animate:{y:0},transition:{duration:.5},className:`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 ${e?"bg-background/80 backdrop-blur-sm shadow-sm":"bg-transparent"}`,children:(0,n.jsxs)("div",{className:"container mx-auto px-4",children:[(0,n.jsxs)("div",{className:"flex items-center justify-between h-16",children:[n.jsx(m.default,{href:"/",className:"text-xl font-bold",children:"KH"}),(0,n.jsxs)("div",{className:"hidden md:flex items-center space-x-8",children:[u.map(e=>n.jsx(m.default,{href:e.href,className:"text-muted-foreground hover:text-primary transition-colors",children:e.label},e.label)),n.jsx(c,{})]}),n.jsx("button",{className:"md:hidden p-2",onClick:()=>a(!s),children:s?n.jsx(d.Z,{className:"w-6 h-6"}):n.jsx(h.Z,{className:"w-6 h-6"})})]}),s&&n.jsx(i.E.div,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},className:"md:hidden py-4",children:(0,n.jsxs)("div",{className:"flex flex-col space-y-4",children:[u.map(e=>n.jsx(m.default,{href:e.href,className:"text-muted-foreground hover:text-primary transition-colors",onClick:()=>a(!1),children:e.label},e.label)),n.jsx("div",{className:"pt-4",children:n.jsx(c,{})})]})})]})})}},1062:(e,t,s)=>{"use strict";s.d(t,{ThemeProvider:()=>i});var n=s(326);s(7577);var r=s(3574);function i({children:e,...t}){return n.jsx(r.f,{...t,children:e})}},2076:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>o,generateStaticParams:()=>a});var n=s(9510);let r=(0,s(8570).createProxy)(String.raw`/Users/kamranhussain/Documents/GitHub/Kam-Website/kamsite/src/components/blog-post.tsx#BlogPost`),i={"understanding-neural-networks":{title:"Understanding Neural Networks: A Neuroscience Perspective",date:"2024-02-15",excerpt:"Exploring the parallels between biological neural networks and artificial neural networks.",content:`
# Understanding Neural Networks: A Neuroscience Perspective

Neural networks have become a cornerstone of modern artificial intelligence, but their inspiration comes from the biological neural networks in our brains. In this article, we'll explore the fascinating parallels between biological and artificial neural networks.

## The Biological Foundation

The human brain contains approximately 86 billion neurons, each connected to thousands of other neurons through synapses. These connections form a complex network that processes information through electrical and chemical signals.

## From Biology to AI

Artificial neural networks mimic this biological structure by using:
- Nodes (neurons)
- Weights (synaptic strengths)
- Activation functions (neural firing patterns)

## Key Similarities

1. **Parallel Processing**: Both biological and artificial networks process information in parallel
2. **Learning**: Both systems adapt and learn from experience
3. **Pattern Recognition**: Both excel at identifying patterns in data

## Key Differences

1. **Complexity**: Biological networks are far more complex
2. **Energy Efficiency**: The brain is incredibly energy-efficient
3. **Plasticity**: Biological networks can physically change structure

## Future Directions

The field of neuromorphic computing aims to create hardware that more closely mimics the brain's architecture, potentially leading to more efficient and powerful AI systems.

## Conclusion

Understanding the biological foundations of neural networks not only helps us build better AI systems but also provides insights into how our own brains work.
    `},"brain-computer-interfaces":{title:"The Future of Brain-Computer Interfaces",date:"2024-02-01",excerpt:"How brain-computer interfaces are revolutionizing human-computer interaction.",content:`
# The Future of Brain-Computer Interfaces

Brain-computer interfaces (BCIs) are rapidly evolving technologies that create direct communication pathways between the brain and external devices. This article explores the current state and future potential of BCIs.

## Current Applications

BCIs are currently being used in:
- Medical rehabilitation
- Assistive technology
- Research and development
- Gaming and entertainment

## Future Possibilities

The future of BCIs holds exciting possibilities:
- Enhanced human-computer interaction
- Medical breakthroughs
- Cognitive enhancement
- New forms of communication

## Challenges and Considerations

While promising, BCIs face several challenges:
- Technical limitations
- Ethical considerations
- Privacy concerns
- Safety requirements

## Conclusion

BCIs represent a significant step forward in human-computer interaction, with the potential to transform how we interact with technology and each other.
    `},"ml-in-neuroscience":{title:"Machine Learning in Neuroscience Research",date:"2024-01-15",excerpt:"Applications of machine learning in analyzing and interpreting neural data.",content:`
# Machine Learning in Neuroscience Research

Machine learning is revolutionizing neuroscience research by providing powerful tools for analyzing complex neural data. This article explores how ML is transforming our understanding of the brain.

## Data Analysis

ML techniques are being used to:
- Process large-scale neural recordings
- Identify patterns in brain activity
- Predict neural responses
- Classify neural states

## Research Applications

ML is enabling new research directions:
- Brain mapping
- Neural circuit analysis
- Behavioral prediction
- Disease diagnosis

## Future Directions

The future of ML in neuroscience includes:
- More sophisticated models
- Better interpretability
- Real-time analysis
- Personalized medicine

## Conclusion

Machine learning is becoming an essential tool in neuroscience research, helping us unlock the mysteries of the brain.
    `}};function a(){return Object.keys(i).map(e=>({slug:e}))}function o({params:e}){let t=i[e.slug];return n.jsx(r,{post:t})}},8840:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>d,metadata:()=>c});var n=s(9510),r=s(6260),i=s.n(r),a=s(8589),o=s(8034),l=s(727);s(4315);let c={title:"Blog - Kamran Hussain",description:"Technical articles and insights about neuroscience, AI, and machine learning."};function d({children:e}){return n.jsx("html",{lang:"en",suppressHydrationWarning:!0,children:n.jsx("body",{className:i().className,children:n.jsx(a.f,{attribute:"class",defaultTheme:"system",enableSystem:!0,disableTransitionOnChange:!0,children:(0,n.jsxs)("div",{className:"min-h-screen bg-background",children:[n.jsx(o.w,{}),n.jsx("main",{className:"container mx-auto px-4 py-8",children:e}),n.jsx(l.$,{})]})})})})}},2029:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>d,metadata:()=>c});var n=s(9510),r=s(5317),i=s.n(r),a=s(8589),o=s(8034),l=s(727);s(4315);let c={title:"Kamran Hussain - Neuroscience & AI Researcher",description:"Personal website of Kamran Hussain, focusing on neuroscience research and AI/ML development."};function d({children:e}){return n.jsx("html",{lang:"en",suppressHydrationWarning:!0,children:n.jsx("body",{className:i().className,children:n.jsx(a.f,{attribute:"class",defaultTheme:"system",enableSystem:!0,disableTransitionOnChange:!0,children:(0,n.jsxs)("div",{className:"min-h-screen bg-background",children:[n.jsx(o.w,{}),n.jsx("main",{className:"container mx-auto px-4 py-8",children:e}),n.jsx(l.$,{})]})})})})}},727:(e,t,s)=>{"use strict";s.d(t,{$:()=>n});let n=(0,s(8570).createProxy)(String.raw`/Users/kamranhussain/Documents/GitHub/Kam-Website/kamsite/src/components/footer.tsx#Footer`)},8034:(e,t,s)=>{"use strict";s.d(t,{w:()=>n});let n=(0,s(8570).createProxy)(String.raw`/Users/kamranhussain/Documents/GitHub/Kam-Website/kamsite/src/components/navbar.tsx#Navbar`)},8589:(e,t,s)=>{"use strict";s.d(t,{f:()=>n});let n=(0,s(8570).createProxy)(String.raw`/Users/kamranhussain/Documents/GitHub/Kam-Website/kamsite/src/components/theme-provider.tsx#ThemeProvider`)},4315:()=>{}};var t=require("../../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),n=t.X(0,[673,946],()=>s(3881));module.exports=n})();