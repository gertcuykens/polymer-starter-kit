!function(e){"use strict";var o=e.querySelector("#app"),r=location.hash.substring(1);r?o.route=r:o.route="About",window.history.pushState({route:o.route},"My app","/#"+o.route),window.onpopstate=function(e){o.route=e.state.route},o.displayInstalledToast=function(){Polymer.dom(e).querySelector("platinum-sw-cache").disabled||Polymer.dom(e).querySelector("#caching-complete").show()},o.addEventListener("dom-change",function(){console.log("Surf Town is ready to rock!")}),window.addEventListener("WebComponentsReady",function(){}),window.addEventListener("paper-header-transform",function(o){var r=Polymer.dom(e).querySelector("#mainToolbar .app-name"),t=Polymer.dom(e).querySelector("#mainToolbar .middle-container"),a=Polymer.dom(e).querySelector("#mainToolbar .bottom-container"),n=o.detail,l=n.height-n.condensedHeight,s=Math.min(1,n.y/l),i=.5,c=l-n.y,d=l/(1-i),m=Math.max(i,c/d+i),u=1-s;Polymer.Base.transform("translate3d(0,"+100*s+"%,0)",t),Polymer.Base.transform("scale("+u+") translateZ(0)",a),Polymer.Base.transform("scale("+m+") translateZ(0)",r)}),o.scrollPageToTop=function(){o.$.headerPanelMain.scrollToTop(!0)},o.closeDrawer=function(){o.$.paperDrawerPanel.closeDrawer()}}(document);