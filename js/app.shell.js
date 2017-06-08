/* app.shell.js
   Shell module for app
*/

/* jshint esversion:6, browser:true */
/* globals jQuery, app */

app.shell = (function ($) {
    
    'use strict';
    
    /* =============================== SETUP =============================== */
    
    var DOM = {};
    
//            // html template
//            main_html: `
//                <div class="app-shell-head">
//                    <div class="app-shell-head-logo">
//                        <h1>app</h1>
//                        <p>JavaScript end to end</p>
//                    </div>
//                    <div class="app-shell-head-acct"></div>
//                </div>
//
//                <div class="app-shell-main">
//                    <div class="app-shell-main-nav"></div>
//                    <div class="app-shell-main-content"></div>
//                </div>
//
//                <div class="app-shell-foot"></div>
//                <div class="app-shell-modal"></div>`,
//            
//            // interval in ms between resize event consideration
//            resize_interval: 200
//        },
        
        
    /* ============================ DOM METHODS ============================ */
    
    // cache DOM elements
    function cacheDom($container) {
        DOM.template = `
            <div class="app-shell-head">
                <div class="app-shell-head-logo">
                    <h1>Single Page Application, No Framework</h1>
                </div>
                <div class="app-shell-head-nav"></div>
            </div>

            <div class="app-shell-main">
                <div class="app-shell-main-content"></div>
            </div>

            <div class="app-shell-foot"></div>`;
        
        DOM.$p = $(document.createElement('p'));
    }
    
    
    
    /* ========================== EVENT HANDLERS =========================== */
    
    // handle URI hashchange events
    function onHashChange(event) {
        
        app.router.route(location.hash.slice(1));
    }
    
    /* ============================= CALLBACKS ============================= */
    
        
    
    /* ========================== PUBLIC METHODS =========================== */
    
    // initialize module 
    function init($container) {
        
        cacheDom($container);
        $container.html( DOM.template );
        
        /* bind & trigger 'hashchange' event AFTER all feature modules are
           configured and initialized. Otherwise they will not be ready to
           handle the trigger event, which is used to ensure the anchor is
           considered on-load
        */
        $(window)
            .bind('hashchange', onHashChange)
            .trigger('hashchange');
        
    }
    
    
    /* ====================== EXPORT PUBLIC METHODS ======================== */
    
    return {
        init: init
    };
    
}(jQuery));
