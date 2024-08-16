"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9446],{5454:(e,i,l)=>{l.r(i),l.d(i,{assets:()=>t,contentTitle:()=>r,default:()=>o,frontMatter:()=>d,metadata:()=>a,toc:()=>h});var s=l(4848),n=l(8453);const d={sidebar_position:1e3},r="Validation",a={id:"math/validation",title:"Validation",description:"This module allows easy validation of common parameters across functions from Stats, such as Pok\xe9mon levels, Effort Values (EVs), Individual Values (IVs) etc.",source:"@site/docs/math/validation.md",sourceDirName:"math",slug:"/math/validation",permalink:"/ts-pokeapi/docs/math/validation",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/math/validation.md",tags:[],version:"current",sidebarPosition:1e3,frontMatter:{sidebar_position:1e3},sidebar:"tutorialSidebar",previous:{title:"Stats",permalink:"/ts-pokeapi/docs/math/stats"},next:{title:"Pok\xe9mon Types",permalink:"/ts-pokeapi/docs/category/pok\xe9mon-types"}},t={},h=[{value:"Methods",id:"methods",level:2},{value:"isValidPokemonLevel",id:"isvalidpokemonlevel",level:3},{value:"Signature",id:"signature",level:4},{value:"Returns",id:"returns",level:4},{value:"Example",id:"example",level:4},{value:"isValidBaseStat",id:"isvalidbasestat",level:3},{value:"Signature",id:"signature-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Example",id:"example-1",level:4},{value:"isValidIV",id:"isvalidiv",level:3},{value:"Signature",id:"signature-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Example",id:"example-2",level:4},{value:"isValidEV",id:"isvalidev",level:3},{value:"Signature",id:"signature-3",level:4},{value:"Returns",id:"returns-3",level:4},{value:"Example",id:"example-3",level:4},{value:"isValidTotalEVs",id:"isvalidtotalevs",level:3},{value:"Signature",id:"signature-4",level:4},{value:"Returns",id:"returns-4",level:4},{value:"Example",id:"example-4",level:4},{value:"isValidIVPriorGen3",id:"isvalidivpriorgen3",level:3},{value:"Signature",id:"signature-5",level:4},{value:"Returns",id:"returns-5",level:4},{value:"Example",id:"example-5",level:4},{value:"isValidEVPriorGen3",id:"isvalidevpriorgen3",level:3},{value:"Signature",id:"signature-6",level:4},{value:"Returns",id:"returns-6",level:4},{value:"Example",id:"example-6",level:4},{value:"isValidEffortLevel",id:"isvalideffortlevel",level:3},{value:"Signature",id:"signature-7",level:4},{value:"Returns",id:"returns-7",level:4},{value:"Example",id:"example-7",level:4},{value:"isValidAV",id:"isvalidav",level:3},{value:"Signature",id:"signature-8",level:4},{value:"Returns",id:"returns-8",level:4},{value:"Example",id:"example-8",level:4},{value:"isValidTotalAVs",id:"isvalidtotalavs",level:3},{value:"Signature",id:"signature-9",level:4},{value:"Returns",id:"returns-9",level:4},{value:"Example",id:"example-9",level:4},{value:"isValidFrienshipValue",id:"isvalidfrienshipvalue",level:3},{value:"Signature",id:"signature-10",level:4},{value:"Returns",id:"returns-10",level:4},{value:"Example",id:"example-10",level:4}];function c(e){const i={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.h1,{id:"validation",children:"Validation"}),"\n",(0,s.jsxs)(i.p,{children:["This module allows easy validation of common parameters across functions from ",(0,s.jsx)(i.a,{href:"../stats",children:"Stats"}),", such as Pok\xe9mon levels, Effort Values (EVs), Individual Values (IVs) etc."]}),"\n",(0,s.jsx)(i.h2,{id:"methods",children:"Methods"}),"\n",(0,s.jsx)(i.h3,{id:"isvalidpokemonlevel",children:"isValidPokemonLevel"}),"\n",(0,s.jsx)(i.p,{children:"Returns true if given value is a valid Pok\xe9mon level."}),"\n",(0,s.jsx)(i.h4,{id:"signature",children:"Signature"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-typescript",children:"isValidPokemonLevel(level: number) => boolean\n"})}),"\n",(0,s.jsxs)("table",{class:"full-width",children:[(0,s.jsx)("thead",{class:"upc",children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{width:"15%",children:"Parameter"}),(0,s.jsx)("th",{width:"15%",children:"Type"}),(0,s.jsx)("th",{width:"15%",children:"Required"}),(0,s.jsx)("th",{children:"Description"})]})}),(0,s.jsx)("tbody",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(i.code,{children:"level"})}),(0,s.jsx)("td",{children:(0,s.jsx)(i.code,{children:"number"})}),(0,s.jsx)("td",{children:"Yes"}),(0,s.jsx)("td",{children:"The Pok\xe9mon's level."})]})})]}),"\n",(0,s.jsx)(i.h4,{id:"returns",children:"Returns"}),"\n",(0,s.jsx)(i.p,{children:"A boolean."}),"\n",(0,s.jsx)(i.h4,{id:"example",children:"Example"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-typescript",children:"isValidPokemonLevel(0) // false\nisValidPokemonLevel(100) // true\nisValidPokemonLevel(101) // false\n"})}),"\n",(0,s.jsx)(i.h3,{id:"isvalidbasestat",children:"isValidBaseStat"}),"\n",(0,s.jsx)(i.p,{children:"Returns true if given value is a valid Pok\xe9mon base stat."}),"\n",(0,s.jsx)(i.h4,{id:"signature-1",children:"Signature"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-typescript",children:"isValidBaseStat(baseStat: number) => boolean\n"})}),"\n",(0,s.jsxs)("table",{class:"full-width",children:[(0,s.jsx)("thead",{class:"upc",children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{width:"15%",children:"Parameter"}),(0,s.jsx)("th",{width:"15%",children:"Type"}),(0,s.jsx)("th",{width:"15%",children:"Required"}),(0,s.jsx)("th",{children:"Description"})]})}),(0,s.jsx)("tbody",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(i.code,{children:"baseStat"})}),(0,s.jsx)("td",{children:(0,s.jsx)(i.code,{children:"number"})}),(0,s.jsx)("td",{children:"Yes"}),(0,s.jsx)("td",{children:"The Base stat of Pok\xe9mon."})]})})]}),"\n",(0,s.jsx)(i.h4,{id:"returns-1",children:"Returns"}),"\n",(0,s.jsx)(i.p,{children:"A boolean."}),"\n",(0,s.jsx)(i.h4,{id:"example-1",children:"Example"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-typescript",children:"isValidBaseStat(0) // false\nisValidBaseStat(100) // true\n"})}),"\n",(0,s.jsx)(i.h3,{id:"isvalidiv",children:"isValidIV"}),"\n",(0,s.jsx)(i.p,{children:"Returns true if given value is a valid Pok\xe9mon Individual Value (IV)."}),"\n",(0,s.jsx)(i.h4,{id:"signature-2",children:"Signature"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-typescript",children:"isValidIV(iv: number) => boolean\n"})}),"\n",(0,s.jsxs)("table",{class:"full-width",children:[(0,s.jsx)("thead",{class:"upc",children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{width:"15%",children:"Parameter"}),(0,s.jsx)("th",{width:"15%",children:"Type"}),(0,s.jsx)("th",{width:"15%",children:"Required"}),(0,s.jsx)("th",{children:"Description"})]})}),(0,s.jsx)("tbody",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(i.code,{children:"iv"})}),(0,s.jsx)("td",{children:(0,s.jsx)(i.code,{children:"number"})}),(0,s.jsx)("td",{children:"Yes"}),(0,s.jsx)("td",{children:"The Pok\xe9mon's IV."})]})})]}),"\n",(0,s.jsx)(i.h4,{id:"returns-2",children:"Returns"}),"\n",(0,s.jsx)(i.p,{children:"A boolean."}),"\n",(0,s.jsx)(i.h4,{id:"example-2",children:"Example"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-typescript",children:"isValidIV(0) // true\nisValidIV(31) // true\nisValidIV(32) // false\n"})}),"\n",(0,s.jsx)(i.h3,{id:"isvalidev",children:"isValidEV"}),"\n",(0,s.jsx)(i.p,{children:"Returns true if given value is a valid Pok\xe9mon Effort Value (EV)."}),"\n",(0,s.jsx)(i.h4,{id:"signature-3",children:"Signature"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-typescript",children:"isValidEV(ev: number) => boolean\n"})}),"\n",(0,s.jsxs)("table",{class:"full-width",children:[(0,s.jsx)("thead",{class:"upc",children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{width:"15%",children:"Parameter"}),(0,s.jsx)("th",{width:"15%",children:"Type"}),(0,s.jsx)("th",{width:"15%",children:"Required"}),(0,s.jsx)("th",{children:"Description"})]})}),(0,s.jsx)("tbody",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(i.code,{children:"ev"})}),(0,s.jsx)("td",{children:(0,s.jsx)(i.code,{children:"number"})}),(0,s.jsx)("td",{children:"Yes"}),(0,s.jsx)("td",{children:"The Pok\xe9mon's EV."})]})})]}),"\n",(0,s.jsx)(i.h4,{id:"returns-3",children:"Returns"}),"\n",(0,s.jsx)(i.p,{children:"A boolean."}),"\n",(0,s.jsx)(i.h4,{id:"example-3",children:"Example"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-typescript",children:"isValidEV(0) // true\nisValidEV(255) // true\nisValidEV(256) // false\n"})}),"\n",(0,s.jsx)(i.h3,{id:"isvalidtotalevs",children:"isValidTotalEVs"}),"\n",(0,s.jsx)(i.p,{children:"Returns true if given value is a valid sum of all Pok\xe9mon Effort Values (EV)."}),"\n",(0,s.jsx)(i.h4,{id:"signature-4",children:"Signature"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-typescript",children:"isValidTotalEVs(totalEvs: number) => boolean\n"})}),"\n",(0,s.jsxs)("table",{class:"full-width",children:[(0,s.jsx)("thead",{class:"upc",children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{width:"15%",children:"Parameter"}),(0,s.jsx)("th",{width:"15%",children:"Type"}),(0,s.jsx)("th",{width:"15%",children:"Required"}),(0,s.jsx)("th",{children:"Description"})]})}),(0,s.jsx)("tbody",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(i.code,{children:"totalEvs"})}),(0,s.jsx)("td",{children:(0,s.jsx)(i.code,{children:"number"})}),(0,s.jsx)("td",{children:"Yes"}),(0,s.jsx)("td",{children:"The sum of all Pok\xe9mon's EVs."})]})})]}),"\n",(0,s.jsx)(i.h4,{id:"returns-4",children:"Returns"}),"\n",(0,s.jsx)(i.p,{children:"A boolean."}),"\n",(0,s.jsx)(i.h4,{id:"example-4",children:"Example"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-typescript",children:"isValidTotalEVs(510) // true\nisValidTotalEVs(511) // false\n"})}),"\n",(0,s.jsx)(i.h3,{id:"isvalidivpriorgen3",children:"isValidIVPriorGen3"}),"\n",(0,s.jsx)(i.p,{children:"Returns true if given value is a valid Pok\xe9mon Individual Value (IV) prior Generation III games."}),"\n",(0,s.jsx)(i.h4,{id:"signature-5",children:"Signature"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-typescript",children:"isValidIVPriorGen3(iv: number) => boolean\n"})}),"\n",(0,s.jsxs)("table",{class:"full-width",children:[(0,s.jsx)("thead",{class:"upc",children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{width:"15%",children:"Parameter"}),(0,s.jsx)("th",{width:"15%",children:"Type"}),(0,s.jsx)("th",{width:"15%",children:"Required"}),(0,s.jsx)("th",{children:"Description"})]})}),(0,s.jsx)("tbody",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(i.code,{children:"iv"})}),(0,s.jsx)("td",{children:(0,s.jsx)(i.code,{children:"number"})}),(0,s.jsx)("td",{children:"Yes"}),(0,s.jsx)("td",{children:"The Pok\xe9mon's IV."})]})})]}),"\n",(0,s.jsx)(i.h4,{id:"returns-5",children:"Returns"}),"\n",(0,s.jsx)(i.p,{children:"A boolean."}),"\n",(0,s.jsx)(i.h4,{id:"example-5",children:"Example"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-typescript",children:"isValidIVPriorGen3(0) // true\nisValidIVPriorGen3(15) // true\nisValidIVPriorGen3(16) // false\n"})}),"\n",(0,s.jsx)(i.h3,{id:"isvalidevpriorgen3",children:"isValidEVPriorGen3"}),"\n",(0,s.jsx)(i.p,{children:"Returns true if given value is a valid Pok\xe9mon Effort Value (EV) prior Generation III games."}),"\n",(0,s.jsx)(i.h4,{id:"signature-6",children:"Signature"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-typescript",children:"isValidEVPriorGen3(ev: number) => boolean\n"})}),"\n",(0,s.jsxs)("table",{class:"full-width",children:[(0,s.jsx)("thead",{class:"upc",children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{width:"15%",children:"Parameter"}),(0,s.jsx)("th",{width:"15%",children:"Type"}),(0,s.jsx)("th",{width:"15%",children:"Required"}),(0,s.jsx)("th",{children:"Description"})]})}),(0,s.jsx)("tbody",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(i.code,{children:"ev"})}),(0,s.jsx)("td",{children:(0,s.jsx)(i.code,{children:"number"})}),(0,s.jsx)("td",{children:"Yes"}),(0,s.jsx)("td",{children:"The Pok\xe9mon's IV."})]})})]}),"\n",(0,s.jsx)(i.h4,{id:"returns-6",children:"Returns"}),"\n",(0,s.jsx)(i.p,{children:"A boolean."}),"\n",(0,s.jsx)(i.h4,{id:"example-6",children:"Example"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-typescript",children:"isValidEVPriorGen3(0) // true\nisValidEVPriorGen3(65535) // true\nisValidEVPriorGen3(65536) // false\n"})}),"\n",(0,s.jsx)(i.h3,{id:"isvalideffortlevel",children:"isValidEffortLevel"}),"\n",(0,s.jsx)(i.p,{children:"Returns true if given value is a valid Effort Level on Pok\xe9mon Legends Arceus game."}),"\n",(0,s.jsx)(i.h4,{id:"signature-7",children:"Signature"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-typescript",children:"isValidEffortLevel(effortLevel: number) => boolean\n"})}),"\n",(0,s.jsxs)("table",{class:"full-width",children:[(0,s.jsx)("thead",{class:"upc",children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{width:"15%",children:"Parameter"}),(0,s.jsx)("th",{width:"15%",children:"Type"}),(0,s.jsx)("th",{width:"15%",children:"Required"}),(0,s.jsx)("th",{children:"Description"})]})}),(0,s.jsx)("tbody",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(i.code,{children:"effortLevel"})}),(0,s.jsx)("td",{children:(0,s.jsx)(i.code,{children:"number"})}),(0,s.jsx)("td",{children:"Yes"}),(0,s.jsx)("td",{children:"The Pok\xe9mon's Effort Level."})]})})]}),"\n",(0,s.jsx)(i.h4,{id:"returns-7",children:"Returns"}),"\n",(0,s.jsx)(i.p,{children:"A boolean."}),"\n",(0,s.jsx)(i.h4,{id:"example-7",children:"Example"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-typescript",children:"isValidEffortLevel(0) // true\nisValidEffortLevel(10) // true\nisValidEffortLevel(11) // false\n"})}),"\n",(0,s.jsx)(i.h3,{id:"isvalidav",children:"isValidAV"}),"\n",(0,s.jsx)(i.p,{children:"Returns true if given value is a valid Pok\xe9mon Awakening Value (AV)."}),"\n",(0,s.jsx)(i.h4,{id:"signature-8",children:"Signature"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-typescript",children:"isValidAV(av: number) => boolean\n"})}),"\n",(0,s.jsxs)("table",{class:"full-width",children:[(0,s.jsx)("thead",{class:"upc",children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{width:"15%",children:"Parameter"}),(0,s.jsx)("th",{width:"15%",children:"Type"}),(0,s.jsx)("th",{width:"15%",children:"Required"}),(0,s.jsx)("th",{children:"Description"})]})}),(0,s.jsx)("tbody",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(i.code,{children:"av"})}),(0,s.jsx)("td",{children:(0,s.jsx)(i.code,{children:"number"})}),(0,s.jsx)("td",{children:"Yes"}),(0,s.jsx)("td",{children:"The Pok\xe9mon's AV."})]})})]}),"\n",(0,s.jsx)(i.h4,{id:"returns-8",children:"Returns"}),"\n",(0,s.jsx)(i.p,{children:"A boolean."}),"\n",(0,s.jsx)(i.h4,{id:"example-8",children:"Example"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-typescript",children:"isValidAV(0) // true\nisValidAV(200) // true\nisValidAV(201) // false\n"})}),"\n",(0,s.jsx)(i.h3,{id:"isvalidtotalavs",children:"isValidTotalAVs"}),"\n",(0,s.jsx)(i.p,{children:"Returns true if given value is a valid sum of all Pok\xe9mon Awakening Values (AV)."}),"\n",(0,s.jsx)(i.h4,{id:"signature-9",children:"Signature"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-typescript",children:"isValidTotalAVs(totalAvs: number) => boolean\n"})}),"\n",(0,s.jsxs)("table",{class:"full-width",children:[(0,s.jsx)("thead",{class:"upc",children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{width:"15%",children:"Parameter"}),(0,s.jsx)("th",{width:"15%",children:"Type"}),(0,s.jsx)("th",{width:"15%",children:"Required"}),(0,s.jsx)("th",{children:"Description"})]})}),(0,s.jsx)("tbody",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(i.code,{children:"totalAvs"})}),(0,s.jsx)("td",{children:(0,s.jsx)(i.code,{children:"number"})}),(0,s.jsx)("td",{children:"Yes"}),(0,s.jsx)("td",{children:"The sum of all Pok\xe9mon's AVs."})]})})]}),"\n",(0,s.jsx)(i.h4,{id:"returns-9",children:"Returns"}),"\n",(0,s.jsx)(i.p,{children:"A boolean."}),"\n",(0,s.jsx)(i.h4,{id:"example-9",children:"Example"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-typescript",children:"isValidTotalAVs(0) // true\nisValidTotalAVs(1200) // true\nisValidTotalAVs(1201) // false\n"})}),"\n",(0,s.jsx)(i.h3,{id:"isvalidfrienshipvalue",children:"isValidFrienshipValue"}),"\n",(0,s.jsx)(i.p,{children:"Returns true if given value is a valid friendship value."}),"\n",(0,s.jsx)(i.h4,{id:"signature-10",children:"Signature"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-typescript",children:"isValidFrienshipValue(friendship: number) => boolean\n"})}),"\n",(0,s.jsxs)("table",{class:"full-width",children:[(0,s.jsx)("thead",{class:"upc",children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{width:"15%",children:"Parameter"}),(0,s.jsx)("th",{width:"15%",children:"Type"}),(0,s.jsx)("th",{width:"15%",children:"Required"}),(0,s.jsx)("th",{children:"Description"})]})}),(0,s.jsx)("tbody",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(i.code,{children:"friendship"})}),(0,s.jsx)("td",{children:(0,s.jsx)(i.code,{children:"number"})}),(0,s.jsx)("td",{children:"Yes"}),(0,s.jsx)("td",{children:"The Pok\xe9mon's friendship value."})]})})]}),"\n",(0,s.jsx)(i.h4,{id:"returns-10",children:"Returns"}),"\n",(0,s.jsx)(i.p,{children:"A boolean."}),"\n",(0,s.jsx)(i.h4,{id:"example-10",children:"Example"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-typescript",children:"isValidFrienshipValue(0) // true\nisValidFrienshipValue(200) // true\nisValidFrienshipValue(256) // false\n"})})]})}function o(e={}){const{wrapper:i}={...(0,n.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},8453:(e,i,l)=>{l.d(i,{R:()=>r,x:()=>a});var s=l(6540);const n={},d=s.createContext(n);function r(e){const i=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),s.createElement(d.Provider,{value:i},e.children)}}}]);