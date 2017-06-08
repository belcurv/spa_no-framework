/* jshint esversion:6, devel:true, browser:true */
/* globals app, jQuery */

app.router = (function($) {
    
    'use strict';
    
    var el = null,
        routes = {};
    
    /* ============================= UTILITIES ============================= */
    
    // route registering function
    function route(path, templateId, controller) {
        routes[path] = {
            templateId : templateId,
            controller : controller
        };
    }
    
    
    /* ============================== ROUTES =============================== */
    
    route('/',          'home',      app.templates.home);    
    route('/blog',      'blog',      app.templates.blog);
    route('/portfolio', 'portfolio', app.templates.portfolio);
    
    
    /* ============================== ROUTER =============================== */
    
    function router(url) {
        el  = el || $('.app-shell-main-content');
        url = url || '/';
        
        let route = routes[url];
        
        if (el && route.controller) {
            el.html(route.controller);
        }
    }
    
    
    /* ============================ EXPORT API ============================= */
    return {
        router : router
    };
    
}(jQuery));
