/* app.shell.js
   Shell module for app
*/

/* jshint esversion:6, browser:true */
/* globals jQuery, app */

app.shell = (function ($) {
    
    'use strict';
    
    /* =============================== SETUP =============================== */
    
    var DOM = {};
    
        
    /* ============================ DOM METHODS ============================ */
    
    // cache DOM elements
    function cacheDom($container) {
        DOM.template = `
            <div class="app-shell-head">
                <div class="app-shell-head-logo">
                    <h1>No Framework</h1>
                </div>
                <div class="app-shell-head-nav">
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#/blog">Blog</a></li>
                        <li><a href="#/portfolio">Portfolio</a></li>
                    </ul>
                </div>
            </div>

            <div class="app-shell-main">
                <div class="app-shell-main-content"></div>
            </div>

            <div class="app-shell-foot"></div>`;
        
    }
    
    
    
    /* ========================== EVENT HANDLERS =========================== */
    
    // handle URI hashchange events
    function onHashChange(event) {
        
        app.router.router(location.hash.slice(1));
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
