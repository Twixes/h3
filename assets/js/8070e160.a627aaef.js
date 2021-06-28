(self.webpackChunkh3_website=self.webpackChunkh3_website||[]).push([[2651],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=s(n),d=i,h=f["".concat(c,".").concat(d)]||f[d]||p[d]||o;return n?r.createElement(h,a(a({ref:t},u),{},{components:n})):r.createElement(h,a({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},7917:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return c},toc:function(){return s},default:function(){return p}});var r=n(2122),i=n(9756),o=(n(7294),n(3905)),a=["components"],l={id:"quickstart",title:"Quick Start",sidebar_label:"Quick Start",slug:"/quickstart"},c={unversionedId:"quickstart",id:"quickstart",isDocsHomePage:!1,title:"Quick Start",description:"This page shows you how to get started with the functions in H3 that convert points to cell identifiers, and from cell identifiers back to geometry. These are the core indexing functions used in many applications of H3.",source:"@site/docs/quickstart.md",sourceDirName:".",slug:"/quickstart",permalink:"/docs/next/quickstart",editUrl:"https://github.com/uber/h3/edit/master/website/docs/quickstart.md",version:"current",sidebar_label:"Quick Start",frontMatter:{id:"quickstart",title:"Quick Start",sidebar_label:"Quick Start",slug:"/quickstart"},sidebar:"someSidebar",previous:{title:"Installation",permalink:"/docs/next/installation"},next:{title:"Migrating from H3 version 3.x",permalink:"/docs/next/library/migrating-3.x"}},s=[{value:"Point / cell",id:"point--cell",children:[]}],u={toc:s};function p(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This page shows you how to get started with the functions in H3 that convert points to cell identifiers, and from cell identifiers back to geometry. These are the core indexing functions used in many applications of H3."),(0,o.kt)("p",null,"You can run the code in this page directly in your browser. The page uses the JavaScript bindings for H3 to run the code. you can also follow along with the same API in ",(0,o.kt)("a",{parentName:"p",href:"/docs/community/bindings"},"your preferred programming language"),"."),(0,o.kt)("h2",{id:"point--cell"},"Point / cell"),(0,o.kt)("p",null,"First, we'll take the coordinates of the Ferry Building in San Francisco and find the containing H3 cell:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:"live",live:!0},"function example() {\n  const lat = 37.7955;\n  const lng = -122.3937;\n  const res = 10;\n  return h3.latLngToCell(lat, lng, res);\n}\n")),(0,o.kt)("p",null,"The result is the identifier of the hexagonal cell in H3 containing this point. We can retrieve the centroid of this cell:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:"live",live:!0},"function example() {\n  const h = '8a283082a677fff';\n  return h3.cellToLatLng(h);\n}\n")),(0,o.kt)("p",null,"Note that the result of this example is not our original coordinates. That's because the identifier represents the hexagonal cell, not the coordinates. All points indexed in H3 within the bounds of this cell will have the same identifier. We can find the bounds of this cell:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:"live",live:!0},"function example() {\n  const h = '8a283082a677fff';\n  return h3.cellToBoundary(h);\n}\n")))}p.isMDXComponent=!0}}]);