(self.webpackChunkh3_website=self.webpackChunkh3_website||[]).push([[1774],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return d},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=s(r),f=o,m=p["".concat(l,".").concat(f)]||p[f]||u[f]||a;return r?n.createElement(m,i(i({ref:t},d),{},{components:r})):n.createElement(m,i({ref:t},d))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},292:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return c},metadata:function(){return l},toc:function(){return s},default:function(){return u}});var n=r(2122),o=r(9756),a=(r(7294),r(3905)),i=["components"],c={id:"h3ToGeoBoundaryDesc",title:"Generate the cell boundary in latitude/longitude coordinates of an H3Index cell",sidebar_label:"Generate the cell boundary in latitude/longitude coordinates of an H3Index cell",slug:"/core-library/h3ToGeoBoundaryDesc"},l={unversionedId:"core-library/h3ToGeoBoundaryDesc",id:"version-3.x/core-library/h3ToGeoBoundaryDesc",isDocsHomePage:!1,title:"Generate the cell boundary in latitude/longitude coordinates of an H3Index cell",description:"This operation is performed by function h3ToGeoBoundary. See the comments in the function source code for more detail.",source:"@site/versioned_docs/version-3.x/core-library/h3ToGeoBoundaryDesc.md",sourceDirName:"core-library",slug:"/core-library/h3ToGeoBoundaryDesc",permalink:"/docs/core-library/h3ToGeoBoundaryDesc",editUrl:"https://github.com/uber/h3/edit/master/website/docs/core-library/h3ToGeoBoundaryDesc.md",version:"3.x",sidebar_label:"Generate the cell boundary in latitude/longitude coordinates of an H3Index cell",frontMatter:{id:"h3ToGeoBoundaryDesc",title:"Generate the cell boundary in latitude/longitude coordinates of an H3Index cell",sidebar_label:"Generate the cell boundary in latitude/longitude coordinates of an H3Index cell",slug:"/core-library/h3ToGeoBoundaryDesc"},sidebar:"version-3.x/someSidebar",previous:{title:"Determine the latitude/longitude coordinates of the center point of an H3Index cell",permalink:"/docs/core-library/h3ToGeoDesc"}},s=[],d={toc:s};function u(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This operation is performed by function ",(0,a.kt)("inlineCode",{parentName:"p"},"h3ToGeoBoundary"),". See the comments in the function source code for more detail."),(0,a.kt)("p",null,"The conversion is performed as a series of coordinate system conversions described below. See the page ",(0,a.kt)("a",{parentName:"p",href:"/docs/core-library/coordsystems"},"Coordinate Systems used by the H3 Core Library")," for more information on each of these coordinate systems."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"We note that the cell vertices are the center points of cells in an aperture 3 grid one resolution finer than the cell resolution, which we term a ",(0,a.kt)("em",{parentName:"li"},"substrate")," grid. We precalculate the substrate ",(0,a.kt)("em",{parentName:"li"},"ijk")," coordinates of a cell with ",(0,a.kt)("em",{parentName:"li"},"ijk")," coordinates (0,0,0), adding additional aperture 3 and aperture 7 (if required, by Class III cell grid) substrate grid resolutions as required to transform the vertex coordinates into a Class II substrate grid.")),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{height:"300",src:"/images/substrate3.png"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The function ",(0,a.kt)("inlineCode",{parentName:"li"},"_faceIjkToGeoBoundary")," calculates the ",(0,a.kt)("em",{parentName:"li"},"ijk")," coordinates of the cell center point in the appropriate substrate grid (determined in the last step), and each of the substrate vertices is translated using the cell center point ",(0,a.kt)("em",{parentName:"li"},"ijk"),". Each vertex ",(0,a.kt)("em",{parentName:"li"},"ijk")," is then transformed onto the appropriate face and ",(0,a.kt)("em",{parentName:"li"},"Hex2d")," coordinate system using the approach taken in ",(0,a.kt)("a",{parentName:"li",href:"/docs/core-library/h3ToGeoDesc"},"finding a cell center point"),". If adjacent vertices lie on different icosahedron faces a point is introduced at the intersection of the cell edge and icosahedron face edge."),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("em",{parentName:"li"},"Hex2d")," coordinates are then converted to latitude/longitude using ",(0,a.kt)("inlineCode",{parentName:"li"},"_hex2dToGeo"),".")))}u.isMDXComponent=!0}}]);