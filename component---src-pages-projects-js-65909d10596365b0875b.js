"use strict";(self.webpackChunkswells23_github_io=self.webpackChunkswells23_github_io||[]).push([[853],{6840:function(t,e,r){r.r(e),r.d(e,{default:function(){return W}});var o=r(7294),a=r(5518),i=r(4320),n=r(7462),s=r(3366),c=r(5505),l=r(9236),u=r(3656),p=r(184),d=r(8953),g=r(1351),h=r(9508);function m(t){return(0,g.Z)("MuiCard",t)}(0,h.Z)("MuiCard",["root"]);var f=r(5893),b=["className","raised"],v=(0,u.ZP)(d.Z,{name:"MuiCard",slot:"Root",overridesResolver:function(t,e){return e.root}})((function(){return{overflow:"hidden"}})),S=o.forwardRef((function(t,e){var r=(0,p.Z)({props:t,name:"MuiCard"}),o=r.className,a=r.raised,i=void 0!==a&&a,u=(0,s.Z)(r,b),d=(0,n.Z)({},r,{raised:i}),g=function(t){var e=t.classes;return(0,l.Z)({root:["root"]},m,e)}(d);return(0,f.jsx)(v,(0,n.Z)({className:(0,c.Z)(g.root,o),elevation:i?8:void 0,ref:e,ownerState:d},u))})),Z=r(4942);function w(t){return(0,g.Z)("MuiCardActionArea",t)}var y=(0,h.Z)("MuiCardActionArea",["root","focusVisible","focusHighlight"]),C=r(7542),M=["children","className","focusVisibleClassName"],k=(0,u.ZP)(C.Z,{name:"MuiCardActionArea",slot:"Root",overridesResolver:function(t,e){return e.root}})((function(t){var e,r=t.theme;return e={display:"block",textAlign:"inherit",width:"100%"},(0,Z.Z)(e,"&:hover .".concat(y.focusHighlight),{opacity:(r.vars||r).palette.action.hoverOpacity,"@media (hover: none)":{opacity:0}}),(0,Z.Z)(e,"&.".concat(y.focusVisible," .").concat(y.focusHighlight),{opacity:(r.vars||r).palette.action.focusOpacity}),e})),B=(0,u.ZP)("span",{name:"MuiCardActionArea",slot:"FocusHighlight",overridesResolver:function(t,e){return e.focusHighlight}})((function(t){var e=t.theme;return{overflow:"hidden",pointerEvents:"none",position:"absolute",top:0,right:0,bottom:0,left:0,borderRadius:"inherit",opacity:0,backgroundColor:"currentcolor",transition:e.transitions.create("opacity",{duration:e.transitions.duration.short})}})),R=o.forwardRef((function(t,e){var r=(0,p.Z)({props:t,name:"MuiCardActionArea"}),o=r.children,a=r.className,i=r.focusVisibleClassName,u=(0,s.Z)(r,M),d=r,g=function(t){var e=t.classes;return(0,l.Z)({root:["root"],focusHighlight:["focusHighlight"]},w,e)}(d);return(0,f.jsxs)(k,(0,n.Z)({className:(0,c.Z)(g.root,a),focusVisibleClassName:(0,c.Z)(i,g.focusVisible),ref:e,ownerState:d},u,{children:[o,(0,f.jsx)(B,{className:g.focusHighlight,ownerState:d})]}))}));function E(t){return(0,g.Z)("MuiCardContent",t)}(0,h.Z)("MuiCardContent",["root"]);var N=["className","component"],A=(0,u.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:function(t,e){return e.root}})((function(){return{padding:16,"&:last-child":{paddingBottom:24}}})),x=o.forwardRef((function(t,e){var r=(0,p.Z)({props:t,name:"MuiCardContent"}),o=r.className,a=r.component,i=void 0===a?"div":a,u=(0,s.Z)(r,N),d=(0,n.Z)({},r,{component:i}),g=function(t){var e=t.classes;return(0,l.Z)({root:["root"]},E,e)}(d);return(0,f.jsx)(A,(0,n.Z)({as:i,className:(0,c.Z)(g.root,o),ownerState:d,ref:e},u))})),F=r(9308);function P(t){return(0,g.Z)("MuiCardActions",t)}(0,h.Z)("MuiCardActions",["root","spacing"]);var H=["disableSpacing","className"],j=(0,u.ZP)("div",{name:"MuiCardActions",slot:"Root",overridesResolver:function(t,e){var r=t.ownerState;return[e.root,!r.disableSpacing&&e.spacing]}})((function(t){var e=t.ownerState;return(0,n.Z)({display:"flex",alignItems:"center",padding:8},!e.disableSpacing&&{"& > :not(:first-of-type)":{marginLeft:8}})})),_=o.forwardRef((function(t,e){var r=(0,p.Z)({props:t,name:"MuiCardActions"}),o=r.disableSpacing,a=void 0!==o&&o,i=r.className,u=(0,s.Z)(r,H),d=(0,n.Z)({},r,{disableSpacing:a}),g=function(t){var e=t.classes,r={root:["root",!t.disableSpacing&&"spacing"]};return(0,l.Z)(r,P,e)}(d);return(0,f.jsx)(j,(0,n.Z)({className:(0,c.Z)(g.root,i),ownerState:d,ref:e},u))})),G=r(6968),I=r(339),V=r(6125),D={root:{paddingTop:"2rem",paddingBottom:"2rem"},sourceBtn:{color:"#F5F5F5"},githubBtn:{"&.MuiButtonBase-root":{backgroundColor:"#9933FF","&:hover":{backgroundColor:"#8000ff"}}},websiteBtn:{"&.MuiButtonBase-root":{backgroundColor:"#008000","&:hover":{backgroundColor:"#006600"}}},prototypeBtn:{"&.MuiButtonBase-root":{backgroundColor:"#C75000","&:hover":{backgroundColor:"#993d00"}}}},T=r(1428),z=function(t){var e,r,a,n=t.data;return o.createElement(I.Z,{component:"section",sx:D.root},o.createElement(i.ZP,{container:!0,spacing:3},(e=T.GalleryData,r=n.allFile.edges,a=new Map,r.forEach((function(t){a.set(t.node.base,t.node)})),e.map((function(t){var e=(0,V.d)(a.get(t.src));return o.createElement(i.ZP,{item:!0,key:t.title,md:6,lg:4},o.createElement(S,null,o.createElement(R,{href:t.websiteSrc||t.prototypeSrc||t.githubSrc},o.createElement(V.G,{image:e,alt:t.title}),o.createElement(x,null,o.createElement(F.Z,{gutterBottom:!0,variant:"h5",component:"h2"},t.title),o.createElement(F.Z,{variant:"body2"},t.description))),o.createElement(_,null,t.githubSrc&&o.createElement(G.Z,{sx:[D.sourceBtn,D.githubBtn],size:"small",href:t.githubSrc,target:"_blank","aria-label":t.title+" github"},"Github"),t.websiteSrc&&o.createElement(G.Z,{sx:[D.sourceBtn,D.websiteBtn],size:"small",href:t.websiteSrc,target:"_blank","aria-label":t.title+" website"},"Website"),t.prototypeSrc&&o.createElement(G.Z,{sx:[D.sourceBtn,D.prototypeBtn],size:"small",href:t.prototypeSrc,target:"_blank","aria-label":t.title+" prototype"},"Prototype"))))})))))};var W=function(t){var e=t.data,r=t.location;return o.createElement(a.Z,{page:"Projects",location:r},o.createElement(z,{data:e}))}},1428:function(t){t.exports=JSON.parse('{"GalleryData":[{"title":"Millennial Realty & Investments","description":"(WIP) - Real estate portfolio with headless Wordpress CMS.","src":"millennial.png","githubSrc":"https://github.com/swells23/millennial","websiteSrc":"https://millennial.vercel.app","prototypeSrc":""},{"title":"Red Hat Marketplace","description":"Try, purchase, deploy, and manage enterprise software across clouds.","src":"red-hat-marketplace.png","githubSrc":"","websiteSrc":"https://marketplace.redhat.com/en-us/","prototypeSrc":""},{"title":"Food Finder","description":"Discover restaurants in your area through our Yelp-integrated application.","src":"food-finder.png","githubSrc":"https://github.com/bastodd/InteractiveDesignFinal.git","websiteSrc":"https://webpages.uncc.edu/swells23/InteractiveDesignFinal/Index.html","prototypeSrc":""},{"title":"Meal Share Capstone","description":"","src":"meal-share.png","githubSrc":"https://github.com/marsgs/MealShare.git","websiteSrc":"","prototypeSrc":"https://cloud.indigo.design/share/run/hgzf1qpqw2gq"},{"title":"E Analytics Realty","description":"","src":"e-analytics-realty.png","githubSrc":"","websiteSrc":"https://eanalyticsrealtyraleighllc.com","prototypeSrc":""},{"title":"Stranger Things Mockup","description":"","src":"stranger-things.png","githubSrc":"https://github.com/swells23/Fed-Take-Home-1.git","websiteSrc":"","prototypeSrc":""},{"title":"Body Measurement Notebook","description":"","src":"body-measurement.png","githubSrc":"https://github.com/jbake101/-Group10-2--itsc3155TermProject-.git","websiteSrc":"","prototypeSrc":""},{"title":"Room to Grow Childcare","description":"","src":"room-to-grow.png","githubSrc":"","websiteSrc":"https://webpages.uncc.edu/swells23/Wells-Project/index.html","prototypeSrc":""}]}')}}]);
//# sourceMappingURL=component---src-pages-projects-js-65909d10596365b0875b.js.map