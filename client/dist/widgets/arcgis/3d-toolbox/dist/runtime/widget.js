System.register(["jimu-core","jimu-arcgis","jimu-ui","jimu-theme","esri/widgets/Daylight","esri/widgets/Daylight/DaylightViewModel","esri/widgets/Weather","esri/widgets/ShadowCast","esri/widgets/ShadowCast/ShadowCastViewModel","esri/widgets/LineOfSight","esri/widgets/LineOfSight/LineOfSightViewModel"],(function(e,t){var o={},a={},i={},n={},l={},s={},r={},c={},d={},u={},p={};return{setters:[function(e){o.Immutable=e.Immutable,o.React=e.React,o.appActions=e.appActions,o.classNames=e.classNames,o.css=e.css,o.jsx=e.jsx},function(e){a.JimuMapViewComponent=e.JimuMapViewComponent},function(e){i.Button=e.Button,i.Label=e.Label,i.Loading=e.Loading,i.LoadingType=e.LoadingType,i.Popper=e.Popper,i.SVG=e.SVG,i.Tooltip=e.Tooltip,i.WidgetPlaceholder=e.WidgetPlaceholder,i.defaultMessages=e.defaultMessages,i.hooks=e.hooks},function(e){n.useTheme=e.useTheme},function(e){l.default=e.default},function(e){s.default=e.default},function(e){r.default=e.default},function(e){c.default=e.default},function(e){d.default=e.default},function(e){u.default=e.default},function(e){p.default=e.default}],execute:function(){e((()=>{var e={82672:e=>{e.exports='<svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M18 6.733 8.462.374 1 6.77v8.709l7.473 4.076L18 15.513v-8.78ZM8 2.087 2 7.23v7.655l6 3.273V2.088Zm1 16.158 8-3.394V7.268L9 1.934v16.31Z" fill="#000"></path></svg>'},33869:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 7.5a.522.522 0 0 1-.516.527H2.976L6.473 11.6a.535.535 0 0 1 0 .746.508.508 0 0 1-.73 0L1 7.5l4.743-4.846a.508.508 0 0 1 .73 0 .535.535 0 0 1 0 .746L2.976 6.973h11.508c.285 0 .516.236.516.527Z" fill="#000"></path></svg>'},55339:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m8.745 8 6.1 6.1a.527.527 0 1 1-.745.746L8 8.746l-6.1 6.1a.527.527 0 1 1-.746-.746l6.1-6.1-6.1-6.1a.527.527 0 0 1 .746-.746l6.1 6.1 6.1-6.1a.527.527 0 0 1 .746.746L8.746 8Z" fill="#000"></path></svg>'},28081:e=>{e.exports='<svg viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#a)"><path d="m12.153 6.054-.707-.707 2.2-2.2.708.707-2.201 2.2Zm-9.507 8.092.707.707 2.2-2.2-.706-.707-2.201 2.2Zm8.8-1.493 2.2 2.2.707-.706-2.2-2.2-.707.706ZM5.554 5.347l-2.2-2.2-.707.706 2.2 2.2.707-.706ZM9 1.5H8v3h1v-3Zm-1 15h1v-3H8v3Zm8-7v-1h-3v1h3Zm-15 0h3v-1H1v1ZM5 9a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0Zm1 0a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0Z" fill="#000"></path></g><defs><clipPath id="a"><path fill="#fff" transform="translate(0 .5)" d="M0 0h16v16H0z"></path></clipPath></defs></svg>'},67847:e=>{e.exports='<svg viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#a)"><path d="M8 6.5h1v1H8v-1Zm0 3h1v-1H8v1Zm0 2h1v-1H8v1Zm0 2h1v-1H8v1Zm8 2v1H0v-1h6v-7H5v-1h1V5.072l5-3.57V15.5h5Zm-6 0V3.444L7 5.587V15.5h3Zm-6-4.605v-.842A3.372 3.372 0 0 1 .84 8.265a3.37 3.37 0 0 1 1.804-1.234c-.205.32-.317.692-.323 1.073a1.467 1.467 0 0 0 1.6 1.46c.027 0 .053-.005.08-.006v-3.45c-.04 0-.08-.008-.12-.008A5.27 5.27 0 0 0 .066 7.9a.374.374 0 0 0-.032.365A3.893 3.893 0 0 0 4 10.895ZM13 7.5h-1v1h1v-1Zm.354-2.288-.707.707 1.58 1.581H14v1h.27l-1.623 1.623.707.707L16 8.184v-.325l-2.646-2.647Z" fill="#000"></path></g><defs><clipPath id="a"><path fill="#fff" transform="translate(0 .5)" d="M0 0h16v16H0z"></path></clipPath></defs></svg>'},68665:e=>{e.exports='<svg viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M15 8.5a7 7 0 1 1-14 0 7 7 0 0 1 14 0Zm1 0a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-6-4H8v1h2v-1Zm2 7v-1H8v1h4Zm-4 1h2v1H8v-1Zm4-6H8v1h4v-1Zm-4 2h5v1H8v-1Z" fill="#000"></path></svg>'},32275:e=>{e.exports='<svg viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#a)"><path d="M4.482 3.02 3.856.835l.96-.275.627 2.183a3.797 3.797 0 0 0-.961.275v.002ZM2.347 7.546a3.808 3.808 0 0 1-.09-.493l-2.196.63.275.96 2.196-.63a3.815 3.815 0 0 1-.185-.467Zm.33-2.89c.081-.146.172-.286.272-.42l-1.79-.992-.484.875 1.802.999c.056-.158.123-.312.2-.461v-.001Zm5.166-1.48c.144.086.282.181.413.285l.999-1.803-.875-.483-.992 1.789c.156.06.308.132.455.213v-.001ZM16 10a3.5 3.5 0 0 1-3.5 3.5h-9a2.492 2.492 0 0 1-.648-4.9c.065-.018.127-.042.194-.054.065-.338.199-.658.394-.941a2.765 2.765 0 0 1 4.23-3.337 3.97 3.97 0 0 1 6.26 2.544A3.495 3.495 0 0 1 16 10Zm-1 0a2.503 2.503 0 0 0-1.48-2.276l-.483-.218-.092-.522a2.99 2.99 0 0 0-5.857-.17l-.233.992-.987-.252A1.462 1.462 0 0 0 4.03 8.727l-.124.678-.678.124A1.498 1.498 0 0 0 3.5 12.5h9A2.503 2.503 0 0 0 15 10ZM4.241 6.84a2.416 2.416 0 0 1 1.874-.255c.143-.595.421-1.15.813-1.621-.02-.012-.035-.027-.055-.038a1.799 1.799 0 0 0-2.447.701c-.204.37-.27.8-.185 1.214V6.84Z" fill="#000"></path></g><defs><clipPath id="a"><path fill="#fff" transform="translate(0 .5)" d="M0 0h16v16H0z"></path></clipPath></defs></svg>'},50362:e=>{"use strict";e.exports=l},51393:e=>{"use strict";e.exports=s},27232:e=>{"use strict";e.exports=u},65808:e=>{"use strict";e.exports=p},91932:e=>{"use strict";e.exports=c},67774:e=>{"use strict";e.exports=d},69787:e=>{"use strict";e.exports=r},26826:e=>{"use strict";e.exports=a},48891:e=>{"use strict";e.exports=o},34796:e=>{"use strict";e.exports=n},30726:e=>{"use strict";e.exports=i}},t={};function g(o){var a=t[o];if(void 0!==a)return a.exports;var i=t[o]={exports:{}};return e[o](i,i.exports,g),i.exports}g.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return g.d(t,{a:t}),t},g.d=(e,t)=>{for(var o in t)g.o(t,o)&&!g.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},g.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),g.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},g.p="";var f={};return g.p=window.jimuConfig.baseUrl,(()=>{"use strict";g.r(f),g.d(f,{default:()=>K});var e,t,o,a,i,n,l,s=g(48891),r=g(26826),c=g(30726),d=g(34796);!function(e){e.Daylight="daylight",e.Weather="weather",e.ShadowCast="shadowcast",e.LineOfSight="lineofsight"}(e||(e={})),function(e){e.Date="date",e.Season="season"}(t||(t={})),function(e){e.SyncedWithMap="syncedWithMap",e.Spring="spring",e.Summer="summer",e.Fall="fall",e.Winter="winter"}(o||(o={})),function(e){e.Sunny="sunny",e.Cloudy="cloudy",e.Rainy="rainy",e.Snowy="snowy",e.Foggy="foggy"}(a||(a={})),function(e){e.Threshold="threshold",e.Duration="duration",e.Discrete="discrete"}(i||(i={})),function(e){e.List="list",e.Icon="icon"}(n||(n={})),function(e){e.Horizontal="horizontal",e.Vertical="vertical"}(l||(l={}));const u={_widgetLabel:"3D Toolbox",select3DScene:"Please select a 3D scene to active this widget",clearEffect:"Clear effect",clearAnalysis:"Clear analysis",showDevelopmentLayer:"Show development layer"};function p(e){const t=e.colors.white;return s.css`
    /*min-width: 300px;*/
    background-color: ${t};

    .tool-header {

      .label {
        font-weight: 600;
        font-size: 16px;
      }
    }

    .api-loader {
      position: relative;
      height: 32px;
    }

    .tool-content {
      min-width: 270px;
      overflow: auto;
      height: calc(100% - 32px);

      .esri-widget__heading {
        display: none;
      }

      .tool-footer {

        button {
          border: 1px solid ${e.colors.palette.primary[500]};
        }
      }
    }
  `}var m=g(50362),h=g(51393);const v=()=>{const e=s.React.useRef(null),t=s.React.useCallback((t=>{if(!e.current){const o=t.environment.lighting.clone();e.current=o}}),[]),o=s.React.useCallback((t=>{t&&e.current&&(t.environment.lighting=e.current),e.current=null}),[]),a=s.React.useRef(null);return{cacheDefaultLighting:t,restoreDefaultLighting:o,cacheDefaultWeather:s.React.useCallback((e=>{if(!a.current){const t=e.environment.weather.clone();a.current=t}}),[]),restoreDefaultWeather:s.React.useCallback((e=>{e&&a.current&&(e.environment.weather=a.current),a.current=null}),[])}};var w=g(69787),y=g(91932),j=g(67774),C=g(27232),x=g(65808),b=g(33869),M=g.n(b);const S=e=>{const{className:t}=e,o=function(e,t){var o={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(o[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(a=Object.getOwnPropertySymbols(e);i<a.length;i++)t.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(e,a[i])&&(o[a[i]]=e[a[i]])}return o}(e,["className"]),a=(0,s.classNames)("jimu-icon jimu-icon-component",t);return s.React.createElement(c.SVG,Object.assign({className:a,src:M()},o))},k=s.React.memo((i=>{var n,l,r;const g=(0,d.useTheme)(),f=c.hooks.useTranslate(u,c.defaultMessages),b=s.React.useRef(null),M=s.React.useRef(null),k=s.React.useRef(i.toolConfig.activedOnLoad);s.React.useEffect((()=>{k.current=i.toolConfig.activedOnLoad}),[i.toolConfig]);const[O,R]=s.React.useState(!0),V=s.React.useCallback((()=>{R(!1)}),[]),{updateDaylightWidget:W,destoryDaylightWidget:I}=(e=>{const{cacheDefaultLighting:a,restoreDefaultLighting:i}=v(),{onUpdated:n}=e,l=s.React.useRef(null),r=s.React.useCallback((i=>{var s,r;const c=null===(s=e.jimuMapView)||void 0===s?void 0:s.view;a(c);const d={view:c};return new h.default(d),l.current=new m.default({container:i,view:c,visibleElements:{timezone:e.daylightConfig.timezone,playButtons:e.daylightConfig.playButtons,datePicker:e.daylightConfig.datePicker,sunLightingToggle:e.daylightConfig.dateTimeToggle,shadowsToggle:e.daylightConfig.isShowShadows},timeSliderSteps:e.daylightConfig.timeSliderSteps,playSpeedMultiplier:e.daylightConfig.playSpeedMultiplier,dateOrSeason:null!==(r=e.daylightConfig.dateOrSeason)&&void 0!==r?r:t.Date}),l.current.when((()=>{n(),e.daylightConfig.dateOrSeason===t.Season&&e.daylightConfig.currentSeason!==o.SyncedWithMap&&l.current.viewModel.set("currentSeason",e.daylightConfig.currentSeason);const a=e.daylightConfig.dateTimeAutoPlay;e.daylightConfig.dateOrSeason===t.Season||l.current.viewModel.set("dayPlaying",a)})),l.current}),[e.jimuMapView,e.daylightConfig,a,n]),c=s.React.useCallback((()=>{i(e.jimuMapView.view)}),[e.jimuMapView,i]);return{daylightRef:l.current,updateDaylightWidget:r,destoryDaylightWidget:c}})({jimuMapView:i.jimuMapView,daylightConfig:i.toolConfig.config,onUpdated:V}),{updateWeatherWidget:L,destoryWeatherWidget:B}=(e=>{const{cacheDefaultWeather:t,restoreDefaultWeather:o}=v(),{onUpdated:i}=e,n=s.React.useRef(null),l=s.React.useMemo((()=>({cloudCover:.5,precipitation:.5,fogStrength:.5})),[]),r=s.React.useRef(null),c=s.React.useCallback(((t,o)=>{var i,n,s,r,c,d,u;switch(t){case a.Sunny:{const a=e.weatherConfig.sunnyConfig;o.environment.weather={type:t,cloudCover:null!==(i=null==a?void 0:a.cloudCover)&&void 0!==i?i:l.cloudCover};break}case a.Cloudy:{const a=e.weatherConfig.cloudyConfig;o.environment.weather={type:t,cloudCover:null!==(n=null==a?void 0:a.cloudCover)&&void 0!==n?n:l.cloudCover};break}case a.Rainy:{const a=e.weatherConfig.rainyConfig;o.environment.weather={type:t,cloudCover:null!==(s=null==a?void 0:a.cloudCover)&&void 0!==s?s:l.cloudCover,precipitation:null!==(r=null==a?void 0:a.precipitation)&&void 0!==r?r:l.precipitation};break}case a.Snowy:{const a=e.weatherConfig.snowyConfig;o.environment.weather={type:t,cloudCover:null!==(c=null==a?void 0:a.cloudCover)&&void 0!==c?c:l.cloudCover,precipitation:null!==(d=null==a?void 0:a.precipitation)&&void 0!==d?d:l.precipitation};break}case a.Foggy:{const a=e.weatherConfig.foggyConfig;o.environment.weather={type:t,fogStrength:null!==(u=null==a?void 0:a.fogStrength)&&void 0!==u?u:l.fogStrength};break}}}),[e.weatherConfig,l]),d=s.React.useCallback((o=>{var a;const l=null===(a=e.jimuMapView)||void 0===a?void 0:a.view;return t(l),c(e.weatherConfig.weatherType,l),n.current=new w.default({container:o,view:l}),n.current.when((()=>{i(),r.current=l.watch("environment.weather.type",(()=>{c(l.environment.weather.type,l)}))})),n.current}),[e.jimuMapView,e.weatherConfig.weatherType,c,t,i]),u=s.React.useCallback((()=>{var t;null===(t=null==r?void 0:r.current)||void 0===t||t.remove(),o(e.jimuMapView.view)}),[e.jimuMapView,o]);return{weatherRef:n.current,updateWeatherWidget:d,destoryWeatherWidget:u}})({jimuMapView:i.jimuMapView,weatherConfig:i.toolConfig.config,onUpdated:V}),{updateShadowCastWidget:N,destoryShadowCastWidget:T}=(e=>{const{onUpdated:t}=e,o=s.React.useRef(null),a=s.React.useCallback((a=>{var i,n;return o.current=new y.default({container:a,view:null===(i=e.jimuMapView)||void 0===i?void 0:i.view,visibleElements:{timezone:e.shadowCastConfig.timezone,datePicker:e.shadowCastConfig.datePicker},viewModel:new j.default({view:null===(n=e.jimuMapView)||void 0===n?void 0:n.view,visualizationType:e.shadowCastConfig.visType})}),o.current.when((()=>{t()})),o.current}),[e.jimuMapView,e.shadowCastConfig,t]),i=s.React.useCallback((()=>{}),[]);return{shadowCastRef:o.current,updateShadowCastWidget:a,destoryShadowCastWidget:i}})({jimuMapView:i.jimuMapView,shadowCastConfig:i.toolConfig.config,onUpdated:V}),{updateLineOfSightWidget:P,destoryLineOfSightWidget:Z}=(e=>{const{onUpdated:t}=e,o=s.React.useRef(null),a=s.React.useCallback((a=>{var i,n;return o.current=new C.default({container:a,view:null===(i=e.jimuMapView)||void 0===i?void 0:i.view,viewModel:new x.default({view:null===(n=e.jimuMapView)||void 0===n?void 0:n.view})}),o.current.when((()=>{t()})),o.current}),[e.jimuMapView,t]),i=s.React.useCallback((()=>{}),[]);return{lineOfSightRef:o.current,updateLineOfSightWidget:a,destoryLineOfSightWidget:i}})({jimuMapView:i.jimuMapView,lineOfSightConfig:i.toolConfig.config,onUpdated:V});function D(e){const t=document.createElement("div");return t.className=e+"-container w-100",b.current.innerHTML="",b.current.appendChild(t),t}const H=s.React.useCallback((()=>{var t,o,a;if(null===(o=null===(t=M.current)||void 0===t?void 0:t.view)||void 0===o?void 0:o.map)switch(i.mode){case e.Daylight:I();break;case e.Weather:B();break;case e.ShadowCast:T();break;case e.LineOfSight:Z()}null===(a=null==M?void 0:M.current)||void 0===a||a.destroy(),M.current=null,(null==b?void 0:b.current)&&(b.current.innerHTML="")}),[i.mode,I,B,T,Z]),E=s.React.useCallback((()=>{if(H(),i.toolConfig.enable)switch(i.mode){case e.Daylight:M.current=W(D(i.mode));break;case e.Weather:M.current=L(D(i.mode));break;case e.ShadowCast:M.current=N(D(i.mode));break;case e.LineOfSight:M.current=P(D(i.mode))}}),[i.mode,i.toolConfig,H,W,L,N,P]);s.React.useEffect((()=>(i.useMapWidgetId||H(),()=>{H()})),[null===(n=i.jimuMapView)||void 0===n?void 0:n.view,i.useMapWidgetId,i.toolConfig,H,E]);const{onBackBtnClick:z}=i;s.React.useEffect((()=>{var e,t;(null===(e=i.shownModeState)||void 0===e?void 0:e.id)===i.mode&&(k.current=!0),(null==k?void 0:k.current)?!M.current&&i.useMapWidgetId&&(null===(t=i.jimuMapView)||void 0===t?void 0:t.view)&&E():M.current&&H()}),[i.mode,i.useMapWidgetId,null===(l=i.jimuMapView)||void 0===l?void 0:l.view,i.shownModeState,i.toolConfig,H,E]);const A=(null===(r=i.shownModeState)||void 0===r?void 0:r.id)===i.mode,F=i.mode===e.Daylight||i.mode===e.Weather?f("clearEffect"):f("clearAnalysis");return(0,s.jsx)("div",{className:"p-2 w-100 "+(A?"d-block":"d-none"),css:p(g)},i.isShowBackBtn&&"function"==typeof z&&(0,s.jsx)("div",{className:"tool-header d-flex align-items-center"},(0,s.jsx)(c.Button,{className:"pr-1",type:"tertiary",onClick:z},(0,s.jsx)(S,{size:16,autoFlip:!0})),(0,s.jsx)(c.Label,{className:"label m-0"},f(i.mode))),(0,s.jsx)("div",{className:"tool-content"},O&&(0,s.jsx)("div",{className:"api-loader m-2"},(0,s.jsx)(c.Loading,{type:c.LoadingType.Secondary})),(0,s.jsx)("div",{ref:b}),(0,s.jsx)("div",{className:"tool-footer w-100 px-3 mb-2"},(0,s.jsx)(c.Button,{type:"secondary",className:"w-100",onClick:()=>{k.current=!1,z()}},F))))}));var O=g(28081),R=g.n(O);const V=e=>{const{className:t}=e,o=function(e,t){var o={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(o[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(a=Object.getOwnPropertySymbols(e);i<a.length;i++)t.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(e,a[i])&&(o[a[i]]=e[a[i]])}return o}(e,["className"]),a=(0,s.classNames)("jimu-icon jimu-icon-component",t);return s.React.createElement(c.SVG,Object.assign({className:a,src:R()},o))};var W=g(32275),I=g.n(W);const L=e=>{const{className:t}=e,o=function(e,t){var o={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(o[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(a=Object.getOwnPropertySymbols(e);i<a.length;i++)t.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(e,a[i])&&(o[a[i]]=e[a[i]])}return o}(e,["className"]),a=(0,s.classNames)("jimu-icon jimu-icon-component",t);return s.React.createElement(c.SVG,Object.assign({className:a,src:I()},o))};var B=g(68665),N=g.n(B);const T=e=>{const{className:t}=e,o=function(e,t){var o={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(o[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(a=Object.getOwnPropertySymbols(e);i<a.length;i++)t.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(e,a[i])&&(o[a[i]]=e[a[i]])}return o}(e,["className"]),a=(0,s.classNames)("jimu-icon jimu-icon-component",t);return s.React.createElement(c.SVG,Object.assign({className:a,src:N()},o))};var P=g(67847),Z=g.n(P);const D=e=>{const{className:t}=e,o=function(e,t){var o={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(o[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(a=Object.getOwnPropertySymbols(e);i<a.length;i++)t.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(e,a[i])&&(o[a[i]]=e[a[i]])}return o}(e,["className"]),a=(0,s.classNames)("jimu-icon jimu-icon-component",t);return s.React.createElement(c.SVG,Object.assign({className:a,src:Z()},o))},H=s.React.memo((t=>{const o=c.hooks.useTranslate(u,c.defaultMessages),[a,i]=s.React.useState(null),n=s.React.useCallback((e=>{i(e)}),[]),l=s.React.useCallback((t=>{if(!t.enable)return null;const a=o(""+t.id);let i=null;switch(t.id){case e.Daylight:i=(0,s.jsx)(V,null);break;case e.Weather:i=(0,s.jsx)(L,null);break;case e.ShadowCast:i=(0,s.jsx)(T,null);break;case e.LineOfSight:i=(0,s.jsx)(D,null)}return(0,s.jsx)("div",{className:"list-item d-flex align-items-center pl-2 py-1 my-3",title:a,key:t.id,onClick:()=>n(t)},(0,s.jsx)("div",{className:"d-flex list-item-icon mx-2"},i),(0,s.jsx)("div",{className:"d-flex list-item-name"},a))}),[o,n]);return(0,s.jsx)(s.React.Fragment,null,(0,s.jsx)("div",{className:"list-item-container d-flex h-100"},null==a&&(0,s.jsx)("div",{className:"main-list w-100"},t.toolsConfig.map((e=>l(e)))),(0,s.jsx)(k,{mode:e.Daylight,toolConfig:t.findToolConfigById(e.Daylight),useMapWidgetId:t.useMapWidgetId,jimuMapView:t.jimuMapView,shownModeState:a,isShowBackBtn:!0,onBackBtnClick:()=>i(null)}),(0,s.jsx)(k,{mode:e.Weather,toolConfig:t.findToolConfigById(e.Weather),useMapWidgetId:t.useMapWidgetId,jimuMapView:t.jimuMapView,shownModeState:a,isShowBackBtn:!0,onBackBtnClick:()=>i(null)}),(0,s.jsx)(k,{mode:e.ShadowCast,toolConfig:t.findToolConfigById(e.ShadowCast),useMapWidgetId:t.useMapWidgetId,jimuMapView:t.jimuMapView,shownModeState:a,isShowBackBtn:!0,onBackBtnClick:()=>i(null)}),(0,s.jsx)(k,{mode:e.LineOfSight,toolConfig:t.findToolConfigById(e.LineOfSight),useMapWidgetId:t.useMapWidgetId,jimuMapView:t.jimuMapView,shownModeState:a,isShowBackBtn:!0,onBackBtnClick:()=>i(null)})))}));function E(e){const t=e.colors.palette.light[400];return s.css`
    /* List mode */
    .list-item-container {
      background-color: ${e.colors.white};
      border: 1px solid ${t};

      .main-list {

      }

      .list-item {
        height: 38px;
        min-width: 240px;

        &:hover {
          background-color: ${e.colors.palette.light[100]};
        }

        .list-item-icon {

        }
        .list-item-name {

        }
      }
    }

    /* Icon mode */
    .icon-item-container {
      background-color: ${e.colors.white};
      border: 1px solid ${t};

      .icon-item {
        width: 32px;
        height: 32px;
      }
    }
  `}function z(e){return s.css`
    .popper-header {
      background-color: ${e.colors.white};

      .popper-title {
        margin-bottom: 0;
        font-weight: 600;
        font-size: 16px;
      }
    }
    .popper-content {
      width: 290px;
    }
  `}var A=g(55339),F=g.n(A);const U=e=>{const{className:t}=e,o=function(e,t){var o={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(o[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(a=Object.getOwnPropertySymbols(e);i<a.length;i++)t.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(e,a[i])&&(o[a[i]]=e[a[i]])}return o}(e,["className"]),a=(0,s.classNames)("jimu-icon jimu-icon-component",t);return s.React.createElement(c.SVG,Object.assign({className:a,src:F()},o))},G=s.React.memo((t=>{const o=(0,d.useTheme)(),a=c.hooks.useTranslate(u,c.defaultMessages),i=s.React.useRef(null),[n,r]=s.React.useState(null),[p,g]=s.React.useState(!1),f=s.React.useCallback((()=>{r(null),g(!1)}),[]);s.React.useEffect((()=>()=>{f()}),[t.toolsConfig,f]);const m=s.React.useCallback((e=>{let t=!1;(void 0===e||e&&e.key&&"Escape"===(null==e?void 0:e.key))&&(t=!0),t&&f()}),[f]),h=t.findToolConfigById,v=s.React.useCallback((t=>{if(!t.enable)return null;const o=a(""+t.id);let l=null;switch(t.id){case e.Daylight:l=(0,s.jsx)(V,null);break;case e.Weather:l=(0,s.jsx)(L,null);break;case e.ShadowCast:l=(0,s.jsx)(T,null);break;case e.LineOfSight:l=(0,s.jsx)(D,null)}return(0,s.jsx)("div",{className:"icon-item d-flex",key:t.id},(0,s.jsx)(c.Button,{type:"tertiary",className:"w-100",size:"sm",icon:!0,active:(null==n?void 0:n.id)===t.id,title:o,"data-id":t.id,onClick:e=>{const t=e.target;i.current=t.dataset.id?t:t.parentElement;const o=i.current.dataset.id;r(h(o)),g(!!o)}},l))}),[n,a,h]),w=t.direction===l.Horizontal?"flex-row":"flex-column";return(0,s.jsx)(s.React.Fragment,null,(0,s.jsx)("div",{className:"icon-item-container d-flex p-1 "+w},t.toolsConfig.map((e=>v(e)))),(0,s.jsx)(c.Popper,{reference:i.current,placement:t.direction===l.Vertical?"right":"bottom",offset:[0,12],showArrow:!0,open:p,keepMount:!0,toggle:m,forceLatestFocusElements:!0},(0,s.jsx)("div",{className:"content-container",css:z(o)},(0,s.jsx)("div",{className:"popper-header d-flex px-3 pt-2 align-items-center justify-content-between"},(0,s.jsx)(c.Label,{className:"popper-title mt-0"},a((null==n?void 0:n.id)?n.id:"_widgetLabel")),(0,s.jsx)(c.Button,{className:"print-button pr-0",type:"tertiary",size:"sm",onClick:f},(0,s.jsx)(U,null))),(0,s.jsx)("div",{className:"popper-content"},(0,s.jsx)(k,{mode:e.Daylight,toolConfig:t.findToolConfigById(e.Daylight),useMapWidgetId:t.useMapWidgetId,jimuMapView:t.jimuMapView,shownModeState:n,onBackBtnClick:f}),(0,s.jsx)(k,{mode:e.Weather,toolConfig:t.findToolConfigById(e.Weather),useMapWidgetId:t.useMapWidgetId,jimuMapView:t.jimuMapView,shownModeState:n,onBackBtnClick:f}),(0,s.jsx)(k,{mode:e.ShadowCast,toolConfig:t.findToolConfigById(e.ShadowCast),useMapWidgetId:t.useMapWidgetId,jimuMapView:t.jimuMapView,shownModeState:n,onBackBtnClick:f}),(0,s.jsx)(k,{mode:e.LineOfSight,toolConfig:t.findToolConfigById(e.LineOfSight),useMapWidgetId:t.useMapWidgetId,jimuMapView:t.jimuMapView,shownModeState:n,onBackBtnClick:f})))))})),$=s.React.memo((e=>{const t=(0,d.useTheme)();function o(t){return(0,s.Immutable)(e.config.tools.find((e=>e.id===t)))}return(0,s.jsx)("div",{className:"h-100",css:E(t)},e.config.arrangement.style===n.List&&(0,s.jsx)(H,{toolsConfig:e.config.tools,findToolConfigById:o,useMapWidgetId:e.useMapWidgetId,jimuMapView:e.jimuMapView}),e.config.arrangement.style===n.Icon&&(0,s.jsx)(G,{direction:e.config.arrangement.direction,toolsConfig:e.config.tools,findToolConfigById:o,useMapWidgetId:e.useMapWidgetId,jimuMapView:e.jimuMapView}))}));var _=g(82672),J=g.n(_);const q=s.React.memo((e=>{const t=c.hooks.useTranslate(u,c.defaultMessages),o=((0,d.useTheme)(),t("select3DMapHint")),a=e.arrangement.style===n.List,i=e.arrangement.direction===l.Horizontal?"bottom":"right";return(0,s.jsx)(s.React.Fragment,null,(0,s.jsx)(c.Tooltip,{disableHoverListener:a,disableTouchListener:a,disableFocusListener:a,placement:i,showArrow:!0,title:(0,s.jsx)("div",{className:"p-2",style:{background:"var(--light-200)",border:"1px solid var(--light-800)"}},o),arrowStyle:{background:"var(--light-200)",border:{color:"var(--light-800)",width:"1px"}}},(0,s.jsx)("div",{className:(0,s.classNames)("h-100",{"hide-msg":!a}),css:s.css`
    &.hide-msg {
      .message-wrapper {
        display: none;
      }
    }
  `},(0,s.jsx)(c.WidgetPlaceholder,{widgetId:e.widgetId,icon:J(),title:o,message:a?o:null}))))})),K=e=>{var t,o;const a=null===(t=e.useMapWidgetIds)||void 0===t?void 0:t[0];c.hooks.useEffectOnce((()=>{const{layoutId:t,layoutItemId:o,id:a,dispatch:i}=e;i(s.appActions.widgetStatePropChange(a,"layoutInfo",{layoutId:t,layoutItemId:o}))}));const[i,n]=s.React.useState(null),l=s.React.useCallback((e=>{var t;"3d"===(null===(t=null==e?void 0:e.view)||void 0===t?void 0:t.type)?n(e):n(null)}),[]),d=!(a&&"3d"===(null===(o=null==i?void 0:i.view)||void 0===o?void 0:o.type));return(0,s.jsx)("div",{className:"widget-3d-toolbox jimu-widget h-100"},d&&(0,s.jsx)(q,{widgetId:e.id,arrangement:e.config.arrangement}),!d&&i&&(0,s.jsx)($,{config:e.config,useMapWidgetId:a,jimuMapView:i}),a&&(0,s.jsx)(r.JimuMapViewComponent,{useMapWidgetId:a,onActiveViewChange:l}))}})(),f})())}}}));