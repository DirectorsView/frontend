"use strict";(self.webpackChunkdirectorsview=self.webpackChunkdirectorsview||[]).push([[837],{837:(Ze,Z,l)=>{l.r(Z),l.d(Z,{SignupModule:()=>Ee});var _=l(9808),p=l(3075),e=l(5e3),K=l(7556),M=l(4259),b=l(9776),d=l(508),y=l(7322),N=l(5494),F=l(8255),w=l(3191),W=l(449),u=l(1159),L=l(7579),j=l(9770),I=l(6451),Y=l(8675),G=l(3900),A=l(5698),H=l(9300),B=l(4004),X=l(1884),v=l(2722),m=l(1777),$=l(226);const ee=["trigger"],te=["panel"];function ie(a,o){if(1&a&&(e.TgZ(0,"span",8),e._uU(1),e.qZA()),2&a){const t=e.oxw();e.xp6(1),e.Oqu(t.placeholder)}}function ne(a,o){if(1&a&&(e.TgZ(0,"span",12),e._uU(1),e.qZA()),2&a){const t=e.oxw(2);e.xp6(1),e.Oqu(t.triggerValue)}}function ae(a,o){1&a&&e.Hsn(0,0,["*ngSwitchCase","true"])}function se(a,o){if(1&a&&(e.TgZ(0,"span",9),e.YNc(1,ne,2,1,"span",10),e.YNc(2,ae,1,0,"ng-content",11),e.qZA()),2&a){const t=e.oxw();e.Q6J("ngSwitch",!!t.customTrigger),e.xp6(2),e.Q6J("ngSwitchCase",!0)}}function oe(a,o){if(1&a){const t=e.EpF();e.TgZ(0,"div",13),e.TgZ(1,"div",14,15),e.NdJ("@transformPanel.done",function(n){return e.CHM(t),e.oxw()._panelDoneAnimatingStream.next(n.toState)})("keydown",function(n){return e.CHM(t),e.oxw()._handleKeydown(n)}),e.Hsn(3,1),e.qZA(),e.qZA()}if(2&a){const t=e.oxw();e.Q6J("@transformPanelWrap",void 0),e.xp6(1),e.Gre("mat-select-panel ",t._getPanelTheme(),""),e.Udp("transform-origin",t._transformOrigin)("font-size",t._triggerFontSize,"px"),e.Q6J("ngClass",t.panelClass)("@transformPanel",t.multiple?"showing-multiple":"showing"),e.uIk("id",t.id+"-panel")("aria-multiselectable",t.multiple)("aria-label",t.ariaLabel||null)("aria-labelledby",t._getPanelAriaLabelledby())}}const re=[[["mat-select-trigger"]],"*"],le=["mat-select-trigger","*"],U={transformPanelWrap:(0,m.X$)("transformPanelWrap",[(0,m.eR)("* => void",(0,m.IO)("@transformPanel",[(0,m.pV)()],{optional:!0}))]),transformPanel:(0,m.X$)("transformPanel",[(0,m.SB)("void",(0,m.oB)({transform:"scaleY(0.8)",minWidth:"100%",opacity:0})),(0,m.SB)("showing",(0,m.oB)({opacity:1,minWidth:"calc(100% + 32px)",transform:"scaleY(1)"})),(0,m.SB)("showing-multiple",(0,m.oB)({opacity:1,minWidth:"calc(100% + 64px)",transform:"scaleY(1)"})),(0,m.eR)("void => *",(0,m.jt)("120ms cubic-bezier(0, 0, 0.2, 1)")),(0,m.eR)("* => void",(0,m.jt)("100ms 25ms linear",(0,m.oB)({opacity:0})))])};let V=0;const O=256,J=new e.OlP("mat-select-scroll-strategy"),de=new e.OlP("MAT_SELECT_CONFIG"),me={provide:J,deps:[b.aV],useFactory:function pe(a){return()=>a.scrollStrategies.reposition()}};class ue{constructor(o,t){this.source=o,this.value=t}}const ge=(0,d.Kr)((0,d.sb)((0,d.Id)((0,d.FD)(class{constructor(a,o,t,i,n){this._elementRef=a,this._defaultErrorStateMatcher=o,this._parentForm=t,this._parentFormGroup=i,this.ngControl=n}})))),fe=new e.OlP("MatSelectTrigger");let _e=(()=>{class a extends ge{constructor(t,i,n,s,r,c,h,f,x,D,ke,Pe,Re,S){var E,k,P;super(r,s,h,f,D),this._viewportRuler=t,this._changeDetectorRef=i,this._ngZone=n,this._dir=c,this._parentFormField=x,this._liveAnnouncer=Re,this._defaultOptions=S,this._panelOpen=!1,this._compareWith=(g,R)=>g===R,this._uid="mat-select-"+V++,this._triggerAriaLabelledBy=null,this._destroy=new L.x,this._onChange=()=>{},this._onTouched=()=>{},this._valueId="mat-select-value-"+V++,this._panelDoneAnimatingStream=new L.x,this._overlayPanelClass=(null===(E=this._defaultOptions)||void 0===E?void 0:E.overlayPanelClass)||"",this._focused=!1,this.controlType="mat-select",this._multiple=!1,this._disableOptionCentering=null!==(P=null===(k=this._defaultOptions)||void 0===k?void 0:k.disableOptionCentering)&&void 0!==P&&P,this.ariaLabel="",this.optionSelectionChanges=(0,j.P)(()=>{const g=this.options;return g?g.changes.pipe((0,Y.O)(g),(0,G.w)(()=>(0,I.T)(...g.map(R=>R.onSelectionChange)))):this._ngZone.onStable.pipe((0,A.q)(1),(0,G.w)(()=>this.optionSelectionChanges))}),this.openedChange=new e.vpe,this._openedStream=this.openedChange.pipe((0,H.h)(g=>g),(0,B.U)(()=>{})),this._closedStream=this.openedChange.pipe((0,H.h)(g=>!g),(0,B.U)(()=>{})),this.selectionChange=new e.vpe,this.valueChange=new e.vpe,this.ngControl&&(this.ngControl.valueAccessor=this),null!=(null==S?void 0:S.typeaheadDebounceInterval)&&(this._typeaheadDebounceInterval=S.typeaheadDebounceInterval),this._scrollStrategyFactory=Pe,this._scrollStrategy=this._scrollStrategyFactory(),this.tabIndex=parseInt(ke)||0,this.id=this.id}get focused(){return this._focused||this._panelOpen}get placeholder(){return this._placeholder}set placeholder(t){this._placeholder=t,this.stateChanges.next()}get required(){var t,i,n,s;return null!==(s=null!==(t=this._required)&&void 0!==t?t:null===(n=null===(i=this.ngControl)||void 0===i?void 0:i.control)||void 0===n?void 0:n.hasValidator(p.kI.required))&&void 0!==s&&s}set required(t){this._required=(0,w.Ig)(t),this.stateChanges.next()}get multiple(){return this._multiple}set multiple(t){this._multiple=(0,w.Ig)(t)}get disableOptionCentering(){return this._disableOptionCentering}set disableOptionCentering(t){this._disableOptionCentering=(0,w.Ig)(t)}get compareWith(){return this._compareWith}set compareWith(t){this._compareWith=t,this._selectionModel&&this._initializeSelection()}get value(){return this._value}set value(t){(t!==this._value||this._multiple&&Array.isArray(t))&&(this.options&&this._setSelectionByValue(t),this._value=t)}get typeaheadDebounceInterval(){return this._typeaheadDebounceInterval}set typeaheadDebounceInterval(t){this._typeaheadDebounceInterval=(0,w.su)(t)}get id(){return this._id}set id(t){this._id=t||this._uid,this.stateChanges.next()}ngOnInit(){this._selectionModel=new W.Ov(this.multiple),this.stateChanges.next(),this._panelDoneAnimatingStream.pipe((0,X.x)(),(0,v.R)(this._destroy)).subscribe(()=>this._panelDoneAnimating(this.panelOpen))}ngAfterContentInit(){this._initKeyManager(),this._selectionModel.changed.pipe((0,v.R)(this._destroy)).subscribe(t=>{t.added.forEach(i=>i.select()),t.removed.forEach(i=>i.deselect())}),this.options.changes.pipe((0,Y.O)(null),(0,v.R)(this._destroy)).subscribe(()=>{this._resetOptions(),this._initializeSelection()})}ngDoCheck(){const t=this._getTriggerAriaLabelledby();if(t!==this._triggerAriaLabelledBy){const i=this._elementRef.nativeElement;this._triggerAriaLabelledBy=t,t?i.setAttribute("aria-labelledby",t):i.removeAttribute("aria-labelledby")}this.ngControl&&this.updateErrorState()}ngOnChanges(t){t.disabled&&this.stateChanges.next(),t.typeaheadDebounceInterval&&this._keyManager&&this._keyManager.withTypeAhead(this._typeaheadDebounceInterval)}ngOnDestroy(){this._destroy.next(),this._destroy.complete(),this.stateChanges.complete()}toggle(){this.panelOpen?this.close():this.open()}open(){this._canOpen()&&(this._panelOpen=!0,this._keyManager.withHorizontalOrientation(null),this._highlightCorrectOption(),this._changeDetectorRef.markForCheck())}close(){this._panelOpen&&(this._panelOpen=!1,this._keyManager.withHorizontalOrientation(this._isRtl()?"rtl":"ltr"),this._changeDetectorRef.markForCheck(),this._onTouched())}writeValue(t){this.value=t}registerOnChange(t){this._onChange=t}registerOnTouched(t){this._onTouched=t}setDisabledState(t){this.disabled=t,this._changeDetectorRef.markForCheck(),this.stateChanges.next()}get panelOpen(){return this._panelOpen}get selected(){var t,i;return this.multiple?(null===(t=this._selectionModel)||void 0===t?void 0:t.selected)||[]:null===(i=this._selectionModel)||void 0===i?void 0:i.selected[0]}get triggerValue(){if(this.empty)return"";if(this._multiple){const t=this._selectionModel.selected.map(i=>i.viewValue);return this._isRtl()&&t.reverse(),t.join(", ")}return this._selectionModel.selected[0].viewValue}_isRtl(){return!!this._dir&&"rtl"===this._dir.value}_handleKeydown(t){this.disabled||(this.panelOpen?this._handleOpenKeydown(t):this._handleClosedKeydown(t))}_handleClosedKeydown(t){const i=t.keyCode,n=i===u.JH||i===u.LH||i===u.oh||i===u.SV,s=i===u.K5||i===u.L_,r=this._keyManager;if(!r.isTyping()&&s&&!(0,u.Vb)(t)||(this.multiple||t.altKey)&&n)t.preventDefault(),this.open();else if(!this.multiple){const c=this.selected;r.onKeydown(t);const h=this.selected;h&&c!==h&&this._liveAnnouncer.announce(h.viewValue,1e4)}}_handleOpenKeydown(t){const i=this._keyManager,n=t.keyCode,s=n===u.JH||n===u.LH,r=i.isTyping();if(s&&t.altKey)t.preventDefault(),this.close();else if(r||n!==u.K5&&n!==u.L_||!i.activeItem||(0,u.Vb)(t))if(!r&&this._multiple&&n===u.A&&t.ctrlKey){t.preventDefault();const c=this.options.some(h=>!h.disabled&&!h.selected);this.options.forEach(h=>{h.disabled||(c?h.select():h.deselect())})}else{const c=i.activeItemIndex;i.onKeydown(t),this._multiple&&s&&t.shiftKey&&i.activeItem&&i.activeItemIndex!==c&&i.activeItem._selectViaInteraction()}else t.preventDefault(),i.activeItem._selectViaInteraction()}_onFocus(){this.disabled||(this._focused=!0,this.stateChanges.next())}_onBlur(){this._focused=!1,!this.disabled&&!this.panelOpen&&(this._onTouched(),this._changeDetectorRef.markForCheck(),this.stateChanges.next())}_onAttached(){this._overlayDir.positionChange.pipe((0,A.q)(1)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this._positioningSettled()})}_getPanelTheme(){return this._parentFormField?`mat-${this._parentFormField.color}`:""}get empty(){return!this._selectionModel||this._selectionModel.isEmpty()}_initializeSelection(){Promise.resolve().then(()=>{this.ngControl&&(this._value=this.ngControl.value),this._setSelectionByValue(this._value),this.stateChanges.next()})}_setSelectionByValue(t){if(this._selectionModel.selected.forEach(i=>i.setInactiveStyles()),this._selectionModel.clear(),this.multiple&&t)Array.isArray(t),t.forEach(i=>this._selectValue(i)),this._sortValues();else{const i=this._selectValue(t);i?this._keyManager.updateActiveItem(i):this.panelOpen||this._keyManager.updateActiveItem(-1)}this._changeDetectorRef.markForCheck()}_selectValue(t){const i=this.options.find(n=>{if(this._selectionModel.isSelected(n))return!1;try{return null!=n.value&&this._compareWith(n.value,t)}catch(s){return!1}});return i&&this._selectionModel.select(i),i}_initKeyManager(){this._keyManager=new F.s1(this.options).withTypeAhead(this._typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl()?"rtl":"ltr").withHomeAndEnd().withAllowedModifierKeys(["shiftKey"]),this._keyManager.tabOut.pipe((0,v.R)(this._destroy)).subscribe(()=>{this.panelOpen&&(!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction(),this.focus(),this.close())}),this._keyManager.change.pipe((0,v.R)(this._destroy)).subscribe(()=>{this._panelOpen&&this.panel?this._scrollOptionIntoView(this._keyManager.activeItemIndex||0):!this._panelOpen&&!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction()})}_resetOptions(){const t=(0,I.T)(this.options.changes,this._destroy);this.optionSelectionChanges.pipe((0,v.R)(t)).subscribe(i=>{this._onSelect(i.source,i.isUserInput),i.isUserInput&&!this.multiple&&this._panelOpen&&(this.close(),this.focus())}),(0,I.T)(...this.options.map(i=>i._stateChanges)).pipe((0,v.R)(t)).subscribe(()=>{this._changeDetectorRef.markForCheck(),this.stateChanges.next()})}_onSelect(t,i){const n=this._selectionModel.isSelected(t);null!=t.value||this._multiple?(n!==t.selected&&(t.selected?this._selectionModel.select(t):this._selectionModel.deselect(t)),i&&this._keyManager.setActiveItem(t),this.multiple&&(this._sortValues(),i&&this.focus())):(t.deselect(),this._selectionModel.clear(),null!=this.value&&this._propagateChanges(t.value)),n!==this._selectionModel.isSelected(t)&&this._propagateChanges(),this.stateChanges.next()}_sortValues(){if(this.multiple){const t=this.options.toArray();this._selectionModel.sort((i,n)=>this.sortComparator?this.sortComparator(i,n,t):t.indexOf(i)-t.indexOf(n)),this.stateChanges.next()}}_propagateChanges(t){let i=null;i=this.multiple?this.selected.map(n=>n.value):this.selected?this.selected.value:t,this._value=i,this.valueChange.emit(i),this._onChange(i),this.selectionChange.emit(this._getChangeEvent(i)),this._changeDetectorRef.markForCheck()}_highlightCorrectOption(){this._keyManager&&(this.empty?this._keyManager.setFirstItemActive():this._keyManager.setActiveItem(this._selectionModel.selected[0]))}_canOpen(){var t;return!this._panelOpen&&!this.disabled&&(null===(t=this.options)||void 0===t?void 0:t.length)>0}focus(t){this._elementRef.nativeElement.focus(t)}_getPanelAriaLabelledby(){var t;if(this.ariaLabel)return null;const i=null===(t=this._parentFormField)||void 0===t?void 0:t.getLabelId();return this.ariaLabelledby?(i?i+" ":"")+this.ariaLabelledby:i}_getAriaActiveDescendant(){return this.panelOpen&&this._keyManager&&this._keyManager.activeItem?this._keyManager.activeItem.id:null}_getTriggerAriaLabelledby(){var t;if(this.ariaLabel)return null;const i=null===(t=this._parentFormField)||void 0===t?void 0:t.getLabelId();let n=(i?i+" ":"")+this._valueId;return this.ariaLabelledby&&(n+=" "+this.ariaLabelledby),n}_panelDoneAnimating(t){this.openedChange.emit(t)}setDescribedByIds(t){this._ariaDescribedby=t.join(" ")}onContainerClick(){this.focus(),this.open()}get shouldLabelFloat(){return this._panelOpen||!this.empty||this._focused&&!!this._placeholder}}return a.\u0275fac=function(t){return new(t||a)(e.Y36(N.rL),e.Y36(e.sBO),e.Y36(e.R0b),e.Y36(d.rD),e.Y36(e.SBq),e.Y36($.Is,8),e.Y36(p.F,8),e.Y36(p.sg,8),e.Y36(y.G_,8),e.Y36(p.a5,10),e.$8M("tabindex"),e.Y36(J),e.Y36(F.Kd),e.Y36(de,8))},a.\u0275dir=e.lG2({type:a,viewQuery:function(t,i){if(1&t&&(e.Gf(ee,5),e.Gf(te,5),e.Gf(b.pI,5)),2&t){let n;e.iGM(n=e.CRH())&&(i.trigger=n.first),e.iGM(n=e.CRH())&&(i.panel=n.first),e.iGM(n=e.CRH())&&(i._overlayDir=n.first)}},inputs:{panelClass:"panelClass",placeholder:"placeholder",required:"required",multiple:"multiple",disableOptionCentering:"disableOptionCentering",compareWith:"compareWith",value:"value",ariaLabel:["aria-label","ariaLabel"],ariaLabelledby:["aria-labelledby","ariaLabelledby"],errorStateMatcher:"errorStateMatcher",typeaheadDebounceInterval:"typeaheadDebounceInterval",sortComparator:"sortComparator",id:"id"},outputs:{openedChange:"openedChange",_openedStream:"opened",_closedStream:"closed",selectionChange:"selectionChange",valueChange:"valueChange"},features:[e.qOj,e.TTD]}),a})(),ve=(()=>{class a extends _e{constructor(){super(...arguments),this._scrollTop=0,this._triggerFontSize=0,this._transformOrigin="top",this._offsetY=0,this._positions=[{originX:"start",originY:"top",overlayX:"start",overlayY:"top"},{originX:"start",originY:"bottom",overlayX:"start",overlayY:"bottom"}]}_calculateOverlayScroll(t,i,n){const s=this._getItemHeight();return Math.min(Math.max(0,s*t-i+s/2),n)}ngOnInit(){super.ngOnInit(),this._viewportRuler.change().pipe((0,v.R)(this._destroy)).subscribe(()=>{this.panelOpen&&(this._triggerRect=this.trigger.nativeElement.getBoundingClientRect(),this._changeDetectorRef.markForCheck())})}open(){super._canOpen()&&(super.open(),this._triggerRect=this.trigger.nativeElement.getBoundingClientRect(),this._triggerFontSize=parseInt(getComputedStyle(this.trigger.nativeElement).fontSize||"0"),this._calculateOverlayPosition(),this._ngZone.onStable.pipe((0,A.q)(1)).subscribe(()=>{this._triggerFontSize&&this._overlayDir.overlayRef&&this._overlayDir.overlayRef.overlayElement&&(this._overlayDir.overlayRef.overlayElement.style.fontSize=`${this._triggerFontSize}px`)}))}_scrollOptionIntoView(t){const i=(0,d.CB)(t,this.options,this.optionGroups),n=this._getItemHeight();this.panel.nativeElement.scrollTop=0===t&&1===i?0:(0,d.jH)((t+i)*n,n,this.panel.nativeElement.scrollTop,O)}_positioningSettled(){this._calculateOverlayOffsetX(),this.panel.nativeElement.scrollTop=this._scrollTop}_panelDoneAnimating(t){this.panelOpen?this._scrollTop=0:(this._overlayDir.offsetX=0,this._changeDetectorRef.markForCheck()),super._panelDoneAnimating(t)}_getChangeEvent(t){return new ue(this,t)}_calculateOverlayOffsetX(){const t=this._overlayDir.overlayRef.overlayElement.getBoundingClientRect(),i=this._viewportRuler.getViewportSize(),n=this._isRtl(),s=this.multiple?56:32;let r;if(this.multiple)r=40;else if(this.disableOptionCentering)r=16;else{let f=this._selectionModel.selected[0]||this.options.first;r=f&&f.group?32:16}n||(r*=-1);const c=0-(t.left+r-(n?s:0)),h=t.right+r-i.width+(n?0:s);c>0?r+=c+8:h>0&&(r-=h+8),this._overlayDir.offsetX=Math.round(r),this._overlayDir.overlayRef.updatePosition()}_calculateOverlayOffsetY(t,i,n){const s=this._getItemHeight(),r=(s-this._triggerRect.height)/2,c=Math.floor(O/s);let h;return this.disableOptionCentering?0:(h=0===this._scrollTop?t*s:this._scrollTop===n?(t-(this._getItemCount()-c))*s+(s-(this._getItemCount()*s-O)%s):i-s/2,Math.round(-1*h-r))}_checkOverlayWithinViewport(t){const i=this._getItemHeight(),n=this._viewportRuler.getViewportSize(),s=this._triggerRect.top-8,r=n.height-this._triggerRect.bottom-8,c=Math.abs(this._offsetY),f=Math.min(this._getItemCount()*i,O)-c-this._triggerRect.height;f>r?this._adjustPanelUp(f,r):c>s?this._adjustPanelDown(c,s,t):this._transformOrigin=this._getOriginBasedOnOption()}_adjustPanelUp(t,i){const n=Math.round(t-i);this._scrollTop-=n,this._offsetY-=n,this._transformOrigin=this._getOriginBasedOnOption(),this._scrollTop<=0&&(this._scrollTop=0,this._offsetY=0,this._transformOrigin="50% bottom 0px")}_adjustPanelDown(t,i,n){const s=Math.round(t-i);if(this._scrollTop+=s,this._offsetY+=s,this._transformOrigin=this._getOriginBasedOnOption(),this._scrollTop>=n)return this._scrollTop=n,this._offsetY=0,void(this._transformOrigin="50% top 0px")}_calculateOverlayPosition(){const t=this._getItemHeight(),i=this._getItemCount(),n=Math.min(i*t,O),r=i*t-n;let c;c=this.empty?0:Math.max(this.options.toArray().indexOf(this._selectionModel.selected[0]),0),c+=(0,d.CB)(c,this.options,this.optionGroups);const h=n/2;this._scrollTop=this._calculateOverlayScroll(c,h,r),this._offsetY=this._calculateOverlayOffsetY(c,h,r),this._checkOverlayWithinViewport(r)}_getOriginBasedOnOption(){const t=this._getItemHeight(),i=(t-this._triggerRect.height)/2;return`50% ${Math.abs(this._offsetY)-i+t/2}px 0px`}_getItemHeight(){return 3*this._triggerFontSize}_getItemCount(){return this.options.length+this.optionGroups.length}}return a.\u0275fac=function(){let o;return function(i){return(o||(o=e.n5z(a)))(i||a)}}(),a.\u0275cmp=e.Xpm({type:a,selectors:[["mat-select"]],contentQueries:function(t,i,n){if(1&t&&(e.Suo(n,fe,5),e.Suo(n,d.ey,5),e.Suo(n,d.K7,5)),2&t){let s;e.iGM(s=e.CRH())&&(i.customTrigger=s.first),e.iGM(s=e.CRH())&&(i.options=s),e.iGM(s=e.CRH())&&(i.optionGroups=s)}},hostAttrs:["role","combobox","aria-autocomplete","none","aria-haspopup","true",1,"mat-select"],hostVars:20,hostBindings:function(t,i){1&t&&e.NdJ("keydown",function(s){return i._handleKeydown(s)})("focus",function(){return i._onFocus()})("blur",function(){return i._onBlur()}),2&t&&(e.uIk("id",i.id)("tabindex",i.tabIndex)("aria-controls",i.panelOpen?i.id+"-panel":null)("aria-expanded",i.panelOpen)("aria-label",i.ariaLabel||null)("aria-required",i.required.toString())("aria-disabled",i.disabled.toString())("aria-invalid",i.errorState)("aria-describedby",i._ariaDescribedby||null)("aria-activedescendant",i._getAriaActiveDescendant()),e.ekj("mat-select-disabled",i.disabled)("mat-select-invalid",i.errorState)("mat-select-required",i.required)("mat-select-empty",i.empty)("mat-select-multiple",i.multiple))},inputs:{disabled:"disabled",disableRipple:"disableRipple",tabIndex:"tabIndex"},exportAs:["matSelect"],features:[e._Bn([{provide:y.Eo,useExisting:a},{provide:d.HF,useExisting:a}]),e.qOj],ngContentSelectors:le,decls:9,vars:12,consts:[["cdk-overlay-origin","",1,"mat-select-trigger",3,"click"],["origin","cdkOverlayOrigin","trigger",""],[1,"mat-select-value",3,"ngSwitch"],["class","mat-select-placeholder mat-select-min-line",4,"ngSwitchCase"],["class","mat-select-value-text",3,"ngSwitch",4,"ngSwitchCase"],[1,"mat-select-arrow-wrapper"],[1,"mat-select-arrow"],["cdk-connected-overlay","","cdkConnectedOverlayLockPosition","","cdkConnectedOverlayHasBackdrop","","cdkConnectedOverlayBackdropClass","cdk-overlay-transparent-backdrop",3,"cdkConnectedOverlayPanelClass","cdkConnectedOverlayScrollStrategy","cdkConnectedOverlayOrigin","cdkConnectedOverlayOpen","cdkConnectedOverlayPositions","cdkConnectedOverlayMinWidth","cdkConnectedOverlayOffsetY","backdropClick","attach","detach"],[1,"mat-select-placeholder","mat-select-min-line"],[1,"mat-select-value-text",3,"ngSwitch"],["class","mat-select-min-line",4,"ngSwitchDefault"],[4,"ngSwitchCase"],[1,"mat-select-min-line"],[1,"mat-select-panel-wrap"],["role","listbox","tabindex","-1",3,"ngClass","keydown"],["panel",""]],template:function(t,i){if(1&t&&(e.F$t(re),e.TgZ(0,"div",0,1),e.NdJ("click",function(){return i.toggle()}),e.TgZ(3,"div",2),e.YNc(4,ie,2,1,"span",3),e.YNc(5,se,3,2,"span",4),e.qZA(),e.TgZ(6,"div",5),e._UZ(7,"div",6),e.qZA(),e.qZA(),e.YNc(8,oe,4,14,"ng-template",7),e.NdJ("backdropClick",function(){return i.close()})("attach",function(){return i._onAttached()})("detach",function(){return i.close()})),2&t){const n=e.MAs(1);e.uIk("aria-owns",i.panelOpen?i.id+"-panel":null),e.xp6(3),e.Q6J("ngSwitch",i.empty),e.uIk("id",i._valueId),e.xp6(1),e.Q6J("ngSwitchCase",!0),e.xp6(1),e.Q6J("ngSwitchCase",!1),e.xp6(3),e.Q6J("cdkConnectedOverlayPanelClass",i._overlayPanelClass)("cdkConnectedOverlayScrollStrategy",i._scrollStrategy)("cdkConnectedOverlayOrigin",n)("cdkConnectedOverlayOpen",i.panelOpen)("cdkConnectedOverlayPositions",i._positions)("cdkConnectedOverlayMinWidth",null==i._triggerRect?null:i._triggerRect.width)("cdkConnectedOverlayOffsetY",i._offsetY)}},directives:[b.xu,_.RF,_.n9,_.ED,b.pI,_.mk],styles:['.mat-select{display:inline-block;width:100%;outline:none}.mat-select-trigger{display:inline-table;cursor:pointer;position:relative;box-sizing:border-box}.mat-select-disabled .mat-select-trigger{-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:default}.mat-select-value{display:table-cell;max-width:0;width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.mat-select-value-text{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.mat-select-arrow-wrapper{display:table-cell;vertical-align:middle}.mat-form-field-appearance-fill .mat-select-arrow-wrapper{transform:translateY(-50%)}.mat-form-field-appearance-outline .mat-select-arrow-wrapper{transform:translateY(-25%)}.mat-form-field-appearance-standard.mat-form-field-has-label .mat-select:not(.mat-select-empty) .mat-select-arrow-wrapper{transform:translateY(-50%)}.mat-form-field-appearance-standard .mat-select.mat-select-empty .mat-select-arrow-wrapper{transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}._mat-animation-noopable.mat-form-field-appearance-standard .mat-select.mat-select-empty .mat-select-arrow-wrapper{transition:none}.mat-select-arrow{width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top:5px solid;margin:0 4px}.mat-select-panel-wrap{flex-basis:100%}.mat-select-panel{min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;padding-top:0;padding-bottom:0;max-height:256px;min-width:100%;border-radius:4px;outline:0}.cdk-high-contrast-active .mat-select-panel{outline:solid 1px}.mat-select-panel .mat-optgroup-label,.mat-select-panel .mat-option{font-size:inherit;line-height:3em;height:3em}.mat-form-field-type-mat-select:not(.mat-form-field-disabled) .mat-form-field-flex{cursor:pointer}.mat-form-field-type-mat-select .mat-form-field-label{width:calc(100% - 18px)}.mat-select-placeholder{transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}._mat-animation-noopable .mat-select-placeholder{transition:none}.mat-form-field-hide-placeholder .mat-select-placeholder{color:transparent;-webkit-text-fill-color:transparent;transition:none;display:block}.mat-select-min-line:empty::before{content:" ";white-space:pre;width:1px;display:inline-block;opacity:0}\n'],encapsulation:2,data:{animation:[U.transformPanelWrap,U.transformPanel]},changeDetection:0}),a})(),ye=(()=>{class a{}return a.\u0275fac=function(t){return new(t||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({providers:[me],imports:[[_.ez,b.U8,d.Ng,d.BQ],N.ZD,y.lN,d.Ng,d.BQ]}),a})();var z=l(7531),Q=l(7423);function Ce(a,o){if(1&a&&(e.TgZ(0,"mat-option",10),e._uU(1),e.qZA()),2&a){const t=o.$implicit;e.Q6J("value",t),e.xp6(1),e.hij(" ",t," ")}}function be(a,o){1&a&&(e.TgZ(0,"mat-error"),e._uU(1,"Firstname must not be empty"),e.qZA())}function Oe(a,o){if(1&a&&(e.TgZ(0,"mat-form-field"),e.TgZ(1,"mat-label"),e._uU(2,"Firstname"),e.qZA(),e._UZ(3,"input",11),e.YNc(4,be,2,0,"mat-error",4),e.qZA()),2&a){const t=e.oxw();let i;e.xp6(4),e.Q6J("ngIf",null==(i=t.formGroup.get("firstName"))?null:i.hasError("required"))}}function Se(a,o){1&a&&(e.TgZ(0,"mat-error"),e._uU(1,"Lastname must not be empty"),e.qZA())}function Me(a,o){if(1&a&&(e.TgZ(0,"mat-form-field"),e.TgZ(1,"mat-label"),e._uU(2,"Lastname"),e.qZA(),e._UZ(3,"input",12),e.YNc(4,Se,2,0,"mat-error",4),e.qZA()),2&a){const t=e.oxw();let i;e.xp6(4),e.Q6J("ngIf",null==(i=t.formGroup.get("lastName"))?null:i.hasError("required"))}}function we(a,o){1&a&&(e.TgZ(0,"mat-error"),e._uU(1,"Company name must not be empty"),e.qZA())}function Te(a,o){if(1&a&&(e.TgZ(0,"mat-form-field"),e.TgZ(1,"mat-label"),e._uU(2,"Company Name"),e.qZA(),e._UZ(3,"input",13),e.YNc(4,we,2,0,"mat-error",4),e.qZA()),2&a){const t=e.oxw();let i;e.xp6(4),e.Q6J("ngIf",null==(i=t.formGroup.get("companyName"))?null:i.hasError("required"))}}function Ie(a,o){1&a&&(e.TgZ(0,"mat-error"),e._uU(1,"E-Mail must not be empty"),e.qZA())}function Ae(a,o){1&a&&(e.TgZ(0,"mat-error"),e._uU(1,"Password must not be empty"),e.qZA())}function xe(a,o){if(1&a&&(e.TgZ(0,"mat-error"),e._uU(1),e.qZA()),2&a){const t=e.oxw();e.xp6(1),e.Oqu(t.responseMessage)}}const De=[{path:"",component:(()=>{class a{constructor(t,i,n){this.auth=t,this.router=i,this.route=n,this.formGroup=a.createFormGroup(),this.responseMessage=null,this.selectOptions=["Personal","Company"],this.selectedOption=this.selectOptions[0],this.onSelectionMessage()}ngOnInit(){this.auth.isLoggedIn&&this.redirect(),this.auth.isLoggedInAsObservable.subscribe(t=>{t&&this.redirect()})}submit(){let t;if(this.formGroup.valid){if("Personal"===this.selectedOption)t=this.auth.signUpAsPerson(this.formGroup.value.email,this.formGroup.value.password,this.formGroup.value.firstName,this.formGroup.value.lastName);else{if("Company"!==this.selectedOption)throw new Error("Invalid option");t=this.auth.signUpAsCompany(this.formGroup.value.email,this.formGroup.value.password,this.formGroup.value.companyName)}t.then(()=>{this.router.navigateByUrl("/")}).catch(i=>{this.responseMessage=i.message})}}static createFormGroup(){return new p.cw({firstName:new p.NI("",[p.kI.required]),lastName:new p.NI("",[p.kI.required]),companyName:new p.NI("",[p.kI.required]),email:new p.NI("",[p.kI.required]),password:new p.NI("",[p.kI.required])})}onSelectionMessage(){var t,i,n,s,r,c;this.formGroup.markAsUntouched(),"Personal"===this.selectedOption?(null===(t=this.formGroup.get("companyName"))||void 0===t||t.disable(),null===(i=this.formGroup.get("firstName"))||void 0===i||i.enable(),null===(n=this.formGroup.get("lastName"))||void 0===n||n.enable()):"Company"===this.selectedOption&&(null===(s=this.formGroup.get("firstName"))||void 0===s||s.disable(),null===(r=this.formGroup.get("lastName"))||void 0===r||r.disable(),null===(c=this.formGroup.get("companyName"))||void 0===c||c.enable())}redirect(){this.route.queryParams.subscribe(t=>{this.router.navigateByUrl(t.redirectUrl,{replaceUrl:!0}).catch(i=>{console.error(i)})})}}return a.\u0275fac=function(t){return new(t||a)(e.Y36(K.e),e.Y36(M.F0),e.Y36(M.gz))},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-signup"]],decls:28,vars:10,consts:[["src","/assets/images/logo.svg","alt","Logo"],[3,"formGroup","ngSubmit"],[3,"value","valueChange","selectionChange"],[3,"value",4,"ngFor","ngForOf"],[4,"ngIf"],["matInput","","placeholder","Email","type","email","name","email","formControlName","email"],["matInput","","placeholder","Password","type","password","name","password","formControlName","password"],[1,"button-wrapper"],["mat-raised-button","","color","primary","type","submit",3,"disabled"],["routerLink","/signin",1,"link"],[3,"value"],["matInput","","placeholder","Firstname","type","text","name","firstName","formControlName","firstName"],["matInput","","placeholder","Lastname","type","text","name","lastName","formControlName","lastName"],["matInput","","placeholder","Company Name","type","text","name","companyName","formControlName","companyName"]],template:function(t,i){if(1&t&&(e.TgZ(0,"header"),e._UZ(1,"img",0),e.TgZ(2,"h1"),e._uU(3,"DirectorsView"),e.qZA(),e.qZA(),e.TgZ(4,"form",1),e.NdJ("ngSubmit",function(){return i.submit()}),e.TgZ(5,"mat-select",2),e.NdJ("valueChange",function(s){return i.selectedOption=s})("selectionChange",function(){return i.onSelectionMessage()}),e.YNc(6,Ce,2,2,"mat-option",3),e.qZA(),e.YNc(7,Oe,5,1,"mat-form-field",4),e.YNc(8,Me,5,1,"mat-form-field",4),e.YNc(9,Te,5,1,"mat-form-field",4),e.TgZ(10,"mat-form-field"),e.TgZ(11,"mat-label"),e._uU(12,"E-Mail Address"),e.qZA(),e._UZ(13,"input",5),e.YNc(14,Ie,2,0,"mat-error",4),e.qZA(),e.TgZ(15,"mat-form-field"),e.TgZ(16,"mat-label"),e._uU(17,"Password"),e.qZA(),e._UZ(18,"input",6),e.YNc(19,Ae,2,0,"mat-error",4),e.qZA(),e.TgZ(20,"div",7),e.TgZ(21,"button",8),e._uU(22," Sign up "),e.qZA(),e.qZA(),e.qZA(),e.YNc(23,xe,2,1,"mat-error",4),e.TgZ(24,"p"),e._uU(25,"Already have an account? "),e.TgZ(26,"a",9),e._uU(27,"Sign in now!"),e.qZA(),e.qZA()),2&t){let n,s;e.xp6(4),e.Q6J("formGroup",i.formGroup),e.xp6(1),e.Q6J("value",i.selectedOption),e.xp6(1),e.Q6J("ngForOf",i.selectOptions),e.xp6(1),e.Q6J("ngIf","Personal"===i.selectedOption),e.xp6(1),e.Q6J("ngIf","Personal"===i.selectedOption),e.xp6(1),e.Q6J("ngIf","Company"===i.selectedOption),e.xp6(5),e.Q6J("ngIf",null==(n=i.formGroup.get("email"))?null:n.hasError("required")),e.xp6(5),e.Q6J("ngIf",null==(s=i.formGroup.get("password"))?null:s.hasError("required")),e.xp6(2),e.Q6J("disabled",!i.formGroup.valid),e.xp6(2),e.Q6J("ngIf",i.responseMessage)}},directives:[p._Y,p.JL,p.sg,ve,_.sg,d.ey,_.O5,y.KE,y.hX,z.Nt,p.Fj,p.JJ,p.u,y.TO,Q.lW,M.yS],styles:["[_nghost-%COMP%]{display:flex;align-items:center;justify-content:flex-start;flex-direction:column;padding-top:10vh}header[_ngcontent-%COMP%]{width:80%;margin-bottom:7vh;display:flex;justify-content:center;align-items:center;flex-direction:column;-webkit-user-select:none;user-select:none}header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:10%}header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin-top:0;font-size:2em}form[_ngcontent-%COMP%]{width:100%;display:flex;align-items:center;justify-content:center;flex-direction:column}form[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%], form[_ngcontent-%COMP%]   .button-wrapper[_ngcontent-%COMP%], form[_ngcontent-%COMP%]   mat-select[_ngcontent-%COMP%]{width:20%}form[_ngcontent-%COMP%]   .button-wrapper[_ngcontent-%COMP%]{display:flex;justify-content:flex-end}.link[_ngcontent-%COMP%]{color:var(--primary-color);text-decoration:underline}"]}),a})()}];let Ee=(()=>{class a{}return a.\u0275fac=function(t){return new(t||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({imports:[[_.ez,M.Bz.forChild(De),y.lN,p.UX,Q.ot,z.c,ye]]}),a})()}}]);