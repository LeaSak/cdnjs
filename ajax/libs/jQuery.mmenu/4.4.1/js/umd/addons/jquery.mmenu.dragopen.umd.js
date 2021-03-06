(function ( factory ) {
    if ( typeof define === 'function' && define.amd )
    {
        // AMD. Register as an anonymous module.
        define( [ 'jquery' ], factory );
    }
    else if ( typeof exports === 'object' )
    {
        // Node/CommonJS
        factory( require( 'jquery' ) );
    }
    else
    {
        // Browser globals
        factory( jQuery );
    }
}( function ( jQuery ) {


/*	
 * jQuery mmenu dragOpen addon
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
!function(e){function t(e,t,o){return t>e&&(e=t),e>o&&(e=o),e}function o(t){return"boolean"==typeof t&&(t={open:t}),"object"!=typeof t&&(t={}),t=e.extend(!0,{},e[s].defaults[i],t)}function n(e){return e}function a(){c=!0,r=e[s]._c,p=e[s]._d,d=e[s]._e,r.add("dragging"),f=e[s].glbl}var s="mmenu",i="dragOpen";e[s].prototype["_init_"+i]=function(){if("function"==typeof Hammer&&this.opts.offCanvas&&!this.vars[i+"_added"]){this.vars[i+"_added"]=!0,c||a(),this.opts[i]=o(this.opts[i]),this.conf[i]=n(this.conf[i]);var p=this,d=this.opts[i],h=this.conf[i];if(d.open){if(Hammer.VERSION<2)return e[s].deprecated("Older version of the Hammer library","version 2 or newer"),!1;var m={},l=0,u=!1,v=!1,g=0,_=0;switch(this.opts.offCanvas.position){case"left":case"right":m.events="panleft panright",m.typeLower="x",m.typeUpper="X",v="width";break;case"top":case"bottom":m.events="panup pandown",m.typeLower="y",m.typeUpper="Y",v="height"}switch(this.opts.offCanvas.position){case"left":case"top":m.negative=!1;break;case"right":case"bottom":m.negative=!0}switch(this.opts.offCanvas.position){case"left":m.open_dir="right",m.close_dir="left";break;case"right":m.open_dir="left",m.close_dir="right";break;case"top":m.open_dir="down",m.close_dir="up";break;case"bottom":m.open_dir="up",m.close_dir="down"}var w=this.__valueOrFn(d.pageNode,this.$menu,f.$page);"string"==typeof w&&(w=e(w));var b=f.$page.find("."+r.mm("fixed-top")+", ."+r.mm("fixed-bottom")),y=f.$page;switch(this.opts.offCanvas.zposition){case"back":y=y.add(b);break;case"front":y=this.$menu;break;case"next":y=y.add(this.$menu).add(b)}var C=new Hammer(w[0]);C.on("panstart",function(e){var t=e.center[m.typeLower];switch(p.opts.offCanvas.position){case"right":case"bottom":t>=f.$wndw[v]()-d.maxStartPos&&(l=1);break;default:t<=d.maxStartPos&&(l=1)}}).on(m.events+" panend",function(e){l>0&&e.preventDefault()}).on(m.events,function(e){var o=m.negative?-e["delta"+m.typeUpper]:e["delta"+m.typeUpper];if(u=o>=g?m.open_dir:m.close_dir,g=o,g>d.threshold&&1==l){if(f.$html.hasClass(r.opened))return;l=2,p._openSetup(),f.$html.addClass(r.dragging),_=t(f.$wndw[v]()*h[v].perc,h[v].min,h[v].max)}2==l&&y.css(p.opts.offCanvas.position,t(g,10,_)-("front"==p.opts.offCanvas.zposition?_:0))}).on("panend",function(){2==l&&(f.$html.removeClass(r.dragging),y.css(p.opts.offCanvas.position,""),p[u==m.open_dir?"_openFinish":"close"]()),l=0})}}},e[s].addons.push(i),e[s].defaults[i]={open:!1,maxStartPos:100,threshold:50},e[s].configuration[i]={width:{perc:.8,min:140,max:440},height:{perc:.8,min:140,max:880}};var r,p,d,f,c=!1}(jQuery);
}));