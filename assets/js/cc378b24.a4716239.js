"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4699],{9897:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>h,contentTitle:()=>c,default:()=>a,frontMatter:()=>d,metadata:()=>t,toc:()=>l});var s=n(4848),i=n(8453);const d={sidebar_position:6},c="Locations",t={id:"poke-api/interfaces/location",title:"Locations",description:"Locations that can be visited within the games. Locations make up sizable portions of regions, like cities or routes.",source:"@site/docs/poke-api/interfaces/location.md",sourceDirName:"poke-api/interfaces",slug:"/poke-api/interfaces/location",permalink:"/ts-pokeapi/docs/poke-api/interfaces/location",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/poke-api/interfaces/location.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Items",permalink:"/ts-pokeapi/docs/poke-api/interfaces/items"},next:{title:"Machines",permalink:"/ts-pokeapi/docs/poke-api/interfaces/machines"}},h={},l=[{value:"Location",id:"location",level:2},{value:"LocationArea",id:"locationarea",level:2},{value:"EncounterMethodRate",id:"encountermethodrate",level:3},{value:"EncounterVersionDetail",id:"encounterversiondetail",level:3},{value:"PokemonEncounter",id:"pokemonencounter",level:3},{value:"PalParkArea",id:"palparkarea",level:2},{value:"PalParkEncounterSpecie",id:"palparkencounterspecie",level:3},{value:"Region",id:"region",level:2}];function o(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.h1,{id:"locations",children:"Locations"}),"\n",(0,s.jsx)(r.p,{children:"Locations that can be visited within the games. Locations make up sizable portions of regions, like cities or routes."}),"\n",(0,s.jsx)(r.h2,{id:"location",children:"Location"}),"\n",(0,s.jsxs)("table",{className:"full-width",children:[(0,s.jsx)("thead",{className:"left upc",children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:"Property"}),(0,s.jsx)("th",{children:"Type"}),(0,s.jsx)("th",{children:"Required"}),(0,s.jsx)("th",{children:"Description"})]})}),(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(r.code,{children:"id"})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.code,{children:"number"})}),(0,s.jsx)("td",{children:"Yes"}),(0,s.jsx)("td",{children:"The identifier for this resource."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(r.code,{children:"name"})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.code,{children:"string"})}),(0,s.jsx)("td",{children:"Yes"}),(0,s.jsx)("td",{children:"The name for this resource."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(r.code,{children:"names"})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.a,{href:"../utils/#name",children:(0,s.jsx)(r.code,{children:"Array<Name>"})})}),(0,s.jsx)("td",{children:"Yes"}),(0,s.jsx)("td",{children:"The name of this resource listed in different languages."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(r.code,{children:"region"})}),(0,s.jsxs)("td",{children:[(0,s.jsx)(r.a,{href:"../utils#namedapiresource",children:(0,s.jsx)(r.code,{children:"NamedAPIResource"})})," or ",(0,s.jsx)(r.code,{children:"null"})]}),(0,s.jsx)("td",{children:"Yes"}),(0,s.jsx)("td",{children:"The region this location can be found in."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(r.code,{children:"games_indices"})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.a,{href:"../utils/#generationgameindex",children:(0,s.jsx)(r.code,{children:"Array<GenerationGameIndex>"})})}),(0,s.jsx)("td",{children:"Yes"}),(0,s.jsx)("td",{children:"A list of game indices relevent to this location by generation."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(r.code,{children:"areas"})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.a,{href:"../utils/#namedapiresource",children:(0,s.jsx)(r.code,{children:"Array<NamedAPIResource>"})})}),(0,s.jsx)("td",{children:"Yes"}),(0,s.jsx)("td",{children:"Areas that can be found within this location."})]})]})]}),"\n",(0,s.jsx)(r.h2,{id:"locationarea",children:"LocationArea"}),"\n",(0,s.jsx)(r.p,{children:"Location areas are sections of areas, such as floors in a building or cave. Each area has its own set of possible Pok\xe9mon encounters."}),"\n",(0,s.jsxs)("table",{className:"full-width",children:[(0,s.jsx)("thead",{className:"left upc",children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:"Property"}),(0,s.jsx)("th",{children:"Type"}),(0,s.jsx)("th",{children:"Required"}),(0,s.jsx)("th",{children:"Description"})]})}),(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(r.code,{children:"id"})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.code,{children:"number"})}),(0,s.jsx)("td",{children:"Yes"}),(0,s.jsx)("td",{children:"The identifier for this resource."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(r.code,{children:"name"})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.code,{children:"string"})}),(0,s.jsx)("td",{children:"Yes"}),(0,s.jsx)("td",{children:"The name for this resource."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(r.code,{children:"names"})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.a,{href:"../utils/#name",children:(0,s.jsx)(r.code,{children:"Array<Name>"})})}),(0,s.jsx)("td",{children:"Yes"}),(0,s.jsx)("td",{children:"The name of this resource listed in different languages."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(r.code,{children:"location"})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.a,{href:"../utils#namedapiresource",children:(0,s.jsx)(r.code,{children:"NamedAPIResource"})})}),(0,s.jsx)("td",{children:"Yes"}),(0,s.jsx)("td",{children:"The region this location area can be found in."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(r.code,{children:"pokemon_encounters"})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.a,{href:"#pokemonencounter",children:(0,s.jsx)(r.code,{children:"Array<PokemonEncounter>"})})}),(0,s.jsx)("td",{children:"Yes"}),(0,s.jsx)("td",{children:"A list of Pok\xe9mon that can be encountered in this area along with version specific details about the encounter."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(r.code,{children:"encounter_method_rates"})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.a,{href:"#encountermethodrate",children:(0,s.jsx)(r.code,{children:"Array<EncounterMethodRate>"})})}),(0,s.jsx)("td",{children:"Yes"}),(0,s.jsx)("td",{children:"A list of methods in which Pok\xe9mon may be encountered in this area and how likely the method will occur depending on the version of the game."})]})]})]}),"\n",(0,s.jsx)(r.h3,{id:"encountermethodrate",children:"EncounterMethodRate"}),"\n",(0,s.jsxs)("table",{className:"full-width",children:[(0,s.jsx)("thead",{className:"left upc",children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:"Property"}),(0,s.jsx)("th",{children:"Type"}),(0,s.jsx)("th",{children:"Required"}),(0,s.jsx)("th",{children:"Description"})]})}),(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(r.code,{children:"encounter_method"})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.a,{href:"../utils#namedapiresource",children:(0,s.jsx)(r.code,{children:"NamedAPIResource"})})}),(0,s.jsx)("td",{children:"Yes"}),(0,s.jsx)("td",{children:"The method in which Pok\xe9mon may be encountered in an area."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(r.code,{children:"version_details"})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.a,{href:"#encounterversiondetail",children:(0,s.jsx)(r.code,{children:"Array<EncounterVersionDetail>"})})}),(0,s.jsx)("td",{children:"Yes"}),(0,s.jsx)("td",{children:"The chance of the encounter to occur on a version of the game."})]})]})]}),"\n",(0,s.jsx)(r.h3,{id:"encounterversiondetail",children:"EncounterVersionDetail"}),"\n",(0,s.jsxs)("table",{className:"full-width",children:[(0,s.jsx)("thead",{className:"left upc",children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:"Property"}),(0,s.jsx)("th",{children:"Type"}),(0,s.jsx)("th",{children:"Required"}),(0,s.jsx)("th",{children:"Description"})]})}),(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(r.code,{children:"rate"})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.code,{children:"number"})}),(0,s.jsx)("td",{children:"Yes"}),(0,s.jsx)("td",{children:"The chance of an encounter to occur."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(r.code,{children:"version"})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.a,{href:"../utils#namedapiresource",children:(0,s.jsx)(r.code,{children:"NamedAPIResource"})})}),(0,s.jsx)("td",{children:"Yes"}),(0,s.jsx)("td",{children:"The version of the game in which the encounter can occur with the given chance."})]})]})]}),"\n",(0,s.jsx)(r.h3,{id:"pokemonencounter",children:"PokemonEncounter"}),"\n",(0,s.jsxs)("table",{className:"full-width",children:[(0,s.jsx)("thead",{className:"left upc",children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:"Property"}),(0,s.jsx)("th",{children:"Type"}),(0,s.jsx)("th",{children:"Required"}),(0,s.jsx)("th",{children:"Description"})]})}),(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(r.code,{children:"pokemon"})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.a,{href:"../utils#namedapiresource",children:(0,s.jsx)(r.code,{children:"NamedAPIResource"})})}),(0,s.jsx)("td",{children:"Yes"}),(0,s.jsx)("td",{children:"The Pok\xe9mon being encountered."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(r.code,{children:"version_details"})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.a,{href:"../utils#versionencounterdetail",children:(0,s.jsx)(r.code,{children:"Array<VersionEncounterDetail>"})})}),(0,s.jsx)("td",{children:"Yes"}),(0,s.jsx)("td",{children:"A list of versions and encounters with Pok\xe9mon that might happen in the referenced location area."})]})]})]}),"\n",(0,s.jsx)(r.h2,{id:"palparkarea",children:"PalParkArea"}),"\n",(0,s.jsxs)(r.p,{children:["Areas used for grouping Pok\xe9mon encounters in Pal Park. They're like habitats that are specific to ",(0,s.jsx)(r.a,{href:"https://bulbapedia.bulbagarden.net/wiki/Pal_Park",children:"Pal Park"}),"."]}),"\n",(0,s.jsxs)("table",{className:"full-width",children:[(0,s.jsx)("thead",{className:"left upc",children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:"Property"}),(0,s.jsx)("th",{children:"Type"}),(0,s.jsx)("th",{children:"Required"}),(0,s.jsx)("th",{children:"Description"})]})}),(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(r.code,{children:"id"})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.code,{children:"number"})}),(0,s.jsx)("td",{children:"Yes"}),(0,s.jsx)("td",{children:"The identifier for this resource."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(r.code,{children:"name"})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.code,{children:"string"})}),(0,s.jsx)("td",{children:"Yes"}),(0,s.jsx)("td",{children:"The name for this resource."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(r.code,{children:"names"})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.a,{href:"../utils#name",children:(0,s.jsx)(r.code,{children:"Array<Name>"})})}),(0,s.jsx)("td",{children:"Yes"}),(0,s.jsx)("td",{children:"The name of this resource listed in different languages."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(r.code,{children:"pokemon_encounters"})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.a,{href:"#palparkencounterspecie",children:(0,s.jsx)(r.code,{children:"PalParkEncounterSpecie"})})}),(0,s.jsx)("td",{children:"Yes"}),(0,s.jsx)("td",{children:"A list of Pok\xe9mon encountered in this pal park area along with details."})]})]})]}),"\n",(0,s.jsx)(r.h3,{id:"palparkencounterspecie",children:"PalParkEncounterSpecie"}),"\n",(0,s.jsxs)("table",{className:"full-width",children:[(0,s.jsx)("thead",{className:"left upc",children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:"Property"}),(0,s.jsx)("th",{children:"Type"}),(0,s.jsx)("th",{children:"Required"}),(0,s.jsx)("th",{children:"Description"})]})}),(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(r.code,{children:"rate"})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.code,{children:"number"})}),(0,s.jsx)("td",{children:"Yes"}),(0,s.jsx)("td",{children:"The base rate for encountering this Pok\xe9mon in this pal park area."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(r.code,{children:"base_score"})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.code,{children:"number"})}),(0,s.jsx)("td",{children:"Yes"}),(0,s.jsx)("td",{children:"The base score given to the player when this Pok\xe9mon is caught during a pal park run."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(r.code,{children:"pokemon_species"})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.a,{href:"../utils#namedapiresource",children:(0,s.jsx)(r.code,{children:"NamedAPIResource"})})}),(0,s.jsx)("td",{children:"Yes"}),(0,s.jsx)("td",{children:"The Pok\xe9mon species being encountered."})]})]})]}),"\n",(0,s.jsx)(r.h2,{id:"region",children:"Region"}),"\n",(0,s.jsx)(r.p,{children:"A region is an organized area of the Pok\xe9mon world. Most often, the main difference between regions is the species of Pok\xe9mon that can be encountered within them."}),"\n",(0,s.jsxs)("table",{className:"full-width",children:[(0,s.jsx)("thead",{className:"left upc",children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:"Property"}),(0,s.jsx)("th",{children:"Type"}),(0,s.jsx)("th",{children:"Required"}),(0,s.jsx)("th",{children:"Description"})]})}),(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(r.code,{children:"id"})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.code,{children:"number"})}),(0,s.jsx)("td",{children:"Yes"}),(0,s.jsx)("td",{children:"The identifier for this resource."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(r.code,{children:"name"})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.code,{children:"string"})}),(0,s.jsx)("td",{children:"Yes"}),(0,s.jsx)("td",{children:"The name for this resource."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(r.code,{children:"names"})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.a,{href:"../utils#name",children:(0,s.jsx)(r.code,{children:"Array<Name>"})})}),(0,s.jsx)("td",{children:"Yes"}),(0,s.jsx)("td",{children:"The name of this resource listed in different languages."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(r.code,{children:"main_generation"})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.a,{href:"../utils#namedapiresource",children:(0,s.jsx)(r.code,{children:"NamedAPIResource"})})}),(0,s.jsx)("td",{children:"Yes"}),(0,s.jsx)("td",{children:"The generation this region was introduced in."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(r.code,{children:"locations"})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.a,{href:"../utils#namedapiresource",children:(0,s.jsx)(r.code,{children:"Array<NamedAPIResource>"})})}),(0,s.jsx)("td",{children:"Yes"}),(0,s.jsx)("td",{children:"A list of locations that can be found in this region."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(r.code,{children:"pokedexes"})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.a,{href:"../utils#namedapiresource",children:(0,s.jsx)(r.code,{children:"Array<NamedAPIResource>"})})}),(0,s.jsx)("td",{children:"Yes"}),(0,s.jsx)("td",{children:"A list of pok\xe9dexes that catalogue Pok\xe9mon in this region."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(r.code,{children:"version_groups"})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.a,{href:"../utils#namedapiresource",children:(0,s.jsx)(r.code,{children:"Array<NamedAPIResource>"})})}),(0,s.jsx)("td",{children:"Yes"}),(0,s.jsx)("td",{children:"A list of version groups where this region can be visited."})]})]})]})]})}function a(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},8453:(e,r,n)=>{n.d(r,{R:()=>c,x:()=>t});var s=n(6540);const i={},d=s.createContext(i);function c(e){const r=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function t(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),s.createElement(d.Provider,{value:r},e.children)}}}]);