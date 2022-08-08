"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const index=require("./index-6d3ccf1c.js"),arcgisReports=require("./arcgis-reports-069ae67a.js"),reportListAccordionCss=":host{display:block;border:none !important}ul{display:block !important;list-style-type:disc !important;margin-block-start:0px !important;margin-block-end:0px !important;margin-inline-start:0px  !important;margin-inline-end:0px  !important;padding-inline-start:0px !important}.notReadyOuter{position:absolute;top:0;left:0;width:100%;height:100%}.notReadyDiv{position:absolute;top:calc(50% - 50px);left:calc(50% - 50px);width:100px;height:100px}.notReadySvg{position:absolute;top:calc(50% - 29px);left:calc(50% - 33px)}";let ReportListAccordion=class{constructor(e){index.registerInstance(this,e),this.reportSelected=index.createEvent(this,"reportSelected",7)}static _bumpCounter(){return ReportListAccordion._counter+=1,ReportListAccordion._counter}queryElementById(e){return this.el.shadowRoot.querySelector(arcgisReports.ACLUtils.fixId(e))}onEnvChanged(){this.stEnv=this.env,this.componentDidLoad()}onTokenChanged(){this.stToken=this.token,this.componentDidLoad()}onUsernameChanged(){this.stUsername=this.username,this.componentDidLoad()}onListInstanceIdChanged(){this.stListInstanceId=this.listInstanceId,this.componentDidLoad()}onThemeChanged(){this.stTheme=this.theme,this.componentDidLoad()}onLangCodeChanged(){this.stLangCode=this.langCode,this.componentDidLoad()}onSelectedReportIdChanged(){this.stSelectedReportId=this.selectedReportId,this.componentDidLoad()}setReportId(e){this.selectedReportId=e,this.stSelectedReportId=e,this.reportSelected.emit({id:this.listInstanceId,value:this.selectedReportId})}componentWillLoad(){this.stEnv=this.env,this.stToken=this.token,this.stUsername=this.username,this.stListInstanceId=this.listInstanceId,this.stTheme=this.theme,this.stLangCode=this.langCode,this.stSelectedReportId=this.selectedReportId,this._counter||(this._counter=ReportListAccordion._bumpCounter(),this._containerId="componentOuter"+this._counter)}static i18n(e){return e}static validateData(e){let t,i=0;if(e&&e.length>0)for(t=0;t<e.length;t++)null!=e[t].id&&null!=e[t].title&&i++;return i}generateUI(e){var t,i,s,r=this,o="";function n(e,t){let i=t===r.stSelectedReportId?"selected":"";o+='<calcite-tree lines="" aria-multiselectable="false"role="tree" tabindex="0" scale="m" selection-mode="single">           <calcite-tree-item class="arcgisReportsListItem '+i+'"  '+i+' report-id="'+t+'" aria-hidden="true" role="treeitem" tabindex="-1" depth="2" lines="" scale="m">'+e+" </calcite-tree-item>        </calcite-tree>"}function a(e,r){if(e){if(t=ReportListAccordion.validateData(e),a=ReportListAccordion.i18n(r)+" ["+t+"]",o+='<calcite-accordion-item icon="graphBar" item-title="'+a+'" aria-expanded="false" tabindex="0"><ul>',t>0)for(i=0;i<e.length;i++)(s=e[i])&&s.id&&s.title&&n(s.title,s.id);o+="</ul></calcite-accordion-item>"}var a}if(e)try{o+='<div class="arcgisReportsListOuter"> ',o+='<calcite-accordion id="'+r.listInstanceId+'" class="arcgisReportsTreeDiv" onAccordionChange={onAccordionChange} selection-mode="single" scale="m" apearance="default" icon-position="end" icon-type="chevron" selection-mode="single">',e.public?(a(e.public,ReportListAccordion.i18n("Esri Infographics")),a(e.shared,ReportListAccordion.i18n("Shared Infographics")),a(e.user,ReportListAccordion.i18n("My Infographics"))):e.ge&&(a(e.ge,ReportListAccordion.i18n("Esri Reports")),a(e.shared,ReportListAccordion.i18n("Shared Reports")),a(e.user,ReportListAccordion.i18n("Previously Run Reports"))),o+="</calcite-accordion>",o+="</div>"}catch(e){return console.log(ReportListAccordion.i18n("Failed to generate infographics list"),e),""}return o}_validateSetup(){if(!arcgisReports.ACLUtils.hasText(this.stEnv)){if(!arcgisReports.ACLUtils.hasText(this.env))return console.log("report-accordian: invalid environment"),!1;this.stToken=this.env}if(!arcgisReports.ACLUtils.hasText(this.stToken)){if(!arcgisReports.ACLUtils.hasText(this.token))return console.log("report-accordian: invalid token"),!1;this.stToken=this.token}if(arcgisReports.ACLUtils.hasText(this.stSelectedReportId)||(arcgisReports.ACLUtils.hasText(this.selectedReportId)?this.stSelectedReportId=this.selectedReportId:this.stSelectedReportId=this.selectedReportId="19cdb404e60843799844d1f229a3ef75"),!arcgisReports.ACLUtils.hasText(this.stUsername)){if(!arcgisReports.ACLUtils.hasText(this.username))return console.log("report-list-accordian: invalid username"),!1;this.stUsername=this.username}return arcgisReports.ACLUtils.hasText(this.stLangCode)||(this.stLangCode=arcgisReports.ACLUtils.hasText(this.langCode)?this.langCode:"US"),arcgisReports.ACLUtils.hasText(this.listInstanceId)||(this.listInstanceId="arcgis-report-tree"+this._counter),arcgisReports.ACLUtils.hasText(this.theme)?(this.stTheme=arcgisReports.ACLUtils.parseThemeString(this.theme),!0):(console.log("report-accordian: invalid theme"),!1)}componentDidLoad(){var e=this,t=this.queryElementById(this._containerId);function i(){let i="notReadyDiv"+e._counter;t.innerHTML='<div id="'+i+'" class="notReadyOuter" >         <svg class="notReadySvg" preserveAspectRatio="xMidYMid meet" width="66" height="58">           <g transform="matrix(0.65909094 0 0 0.65909094 0.09090962 -0)">             <g>               <path                 d="M48.445312 0.15625C 48.125 0.234375 47.5625 0.445312 47.195312 0.632812C 46.648438 0.90625 46.375 1.117188 45.734375 1.757812C 45.257812 2.226562 44.765625 2.804688 44.507812 3.203125C 43.84375 4.234375 39.1875 12.441406 21.367188 43.960938C 15.171875 54.91797 7.976562 67.65625 5.375 72.25391C 2.773438 76.85547 0.554688 80.83203 0.445312 81.08984C -0.171875 82.55469 -0.117188 84.171875 0.59375 85.46094C 0.710938 85.67969 1.09375 86.13281 1.4375 86.47656C 2.148438 87.17969 2.820312 87.5625 3.828125 87.84375L3.828125 87.84375L4.421875 88L50.351562 87.984375L96.28906 87.96094L96.921875 87.75C 99.75781 86.78125 100.78125 83.85156 99.296875 80.88672C 99.13281 80.55078 92.27344 68.53906 84.05469 54.183594C 75.83594 39.835938 66.02344 22.695312 62.25 16.097656C 58.46875 9.503906 55.148438 3.75 54.859375 3.320312C 53.9375 1.9375 52.765625 0.890625 51.585938 0.40625C 50.609375 0 49.460938 -0.09375 48.445312 0.15625zM61 26.804688C 67.19531 37.61328 76.77344 54.339844 82.28125 63.96875L82.28125 63.96875L92.30469 81.47266L71.11719 81.49609C 59.460938 81.50391 40.382812 81.50391 28.71875 81.49609L28.71875 81.49609L7.507812 81.47266L20.523438 58.45703C 45.429688 14.402344 49.625 7.011719 49.695312 7.097656C 49.726562 7.128906 54.8125 15.996094 61 26.804688z"                 stroke="none"                 fill="#D4D7DD"                 fill-rule="nonzero"               />               <path                 d="M49.140625 26.460938C 49.03125 26.484375 48.664062 26.570312 48.328125 26.65625C 45.28125 27.421875 42.8125 30.363281 42.8125 33.19922C 42.8125 33.558594 42.984375 35.183594 43.203125 36.80078C 43.414062 38.41797 44.085938 43.5 44.6875 48.101562C 46.257812 60.097656 46.242188 59.95703 46.375 60.45703C 46.703125 61.75 47.476562 62.78125 48.492188 63.28125C 49.015625 63.539062 49.164062 63.578125 49.804688 63.601562C 50.992188 63.65625 51.726562 63.367188 52.523438 62.539062C 53.296875 61.71875 53.648438 60.789062 53.898438 58.910156C 53.984375 58.253906 54.375 55.30078 54.765625 52.339844C 55.148438 49.382812 55.789062 44.554688 56.171875 41.59375C 56.5625 38.640625 56.953125 35.683594 57.039062 35.027344C 57.226562 33.60547 57.234375 32.64453 57.070312 32.003906C 56.429688 29.480469 54.257812 27.320312 51.65625 26.640625C 51.070312 26.484375 49.578125 26.382812 49.140625 26.460938z"                 stroke="none"                 fill="#D4D7DD"                 fill-rule="nonzero"               />               <path                 d="M49.390625 66.59375C 46.695312 66.9375 44.75 69.49219 45.078125 72.26953C 45.234375 73.56641 45.75 74.62109 46.671875 75.47266C 47.5625 76.30859 48.523438 76.72266 49.726562 76.80078C 51.1875 76.88672 52.351562 76.43359 53.4375 75.33984C 54.484375 74.29297 54.9375 73.20703 54.945312 71.70703C 54.953125 70.796875 54.84375 70.27344 54.492188 69.515625C 53.554688 67.47656 51.53125 66.32031 49.390625 66.59375z"                 stroke="none"                 fill="#D4D7DD"                 fill-rule="nonzero"               />             </g>           </g>         </svg>       </div>'}this._validateSetup()?(t.innerHTML="<calcite-loader active></calcite-loader>",arcgisReports.setEnvironment(e.stEnv),arcgisReports.setToken(e.stUsername,e.stToken),e.stTheme&&(e.el.style.setProperty("--calcite-ui-brand",e.stTheme.brand),e.el.style.setProperty("--calcite-ui-foreground-1",e.stTheme.foreground),e.el.style.setProperty("--calcite-ui-text-1",e.stTheme.text1),e.el.style.setProperty("--calcite-ui-text-2",e.stTheme.text2),e.el.style.setProperty("--calcite-ui-text-3",e.stTheme.text3),e.el.style.setProperty("--calcite-ui-border-2",e.stTheme.border)),async function(){return{infographics:await arcgisReports.getInfographicTemplatesList(e.stLangCode),reports:await arcgisReports.getClassicReportsTemplatesList(e.stLangCode)}}().then((function(i){let s=!1;(i.infographics.public.find((t=>t.id===e.stSelectedReportId))||i.infographics.shared.find((t=>t.id===e.stSelectedReportId))||i.infographics.user.find((t=>t.id===e.stSelectedReportId)))&&(s=!0),s||(i.infographics.public.length?e.setReportId(i.infographics.public[0].id):i.infographics.shared.length?e.setReportId(i.infographics.shared[0].id):i.infographics.user.length&&e.setReportId(i.infographics.user[0].id)),t.innerHTML=e.generateUI(i.infographics);let r=e.queryElementById(e.listInstanceId).querySelectorAll(".arcgisReportsListItem");if(r)for(let t=0;t<r.length;t++){let i=r[t].getAttribute("report-id");i&&r[t].addEventListener("click",(function(s){s.preventDefault();for(let e=0;e<r.length;e++)r[e].classList.remove("selected"),r[e].removeAttribute("selected");return r[t].classList.add("selected"),e.setReportId(i),!1}))}}),(function(e){console.log("Fetching reports failed: ",e),i()}))):i()}render(){return index.h("div",{id:this._containerId,class:"componentOuter"})}get el(){return index.getElement(this)}static get watchers(){return{env:["onEnvChanged"],token:["onTokenChanged"],username:["onUsernameChanged"],listInstanceId:["onListInstanceIdChanged"],theme:["onThemeChanged"],langCode:["onLangCodeChanged"],selectedReportId:["onSelectedReportIdChanged"]}}};ReportListAccordion._counter=10,ReportListAccordion.style=reportListAccordionCss,exports.report_list_accordion=ReportListAccordion;