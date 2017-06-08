/* app.router.js
   Routing module for app
   
   example.com/#post?building-a-spa
   example.com/#blog?post=building-a-spa
   
*/

/* jshint esversion:6, devel:true, browser:true */
/* globals jQuery, app */

app.router = (function ($) {
    
    /* =============================== SETUP =============================== */
    
    var config = {
            query_params: ''
        },
        
        routes = {
        
            home : {
                api_stub : 'home',
                success_callback : 'home_page',
                error_callback : 'home_page_error'
            },

            all_posts : {
                api_stub : 'blog',
                success_callback : 'show_all_posts',
                error_callback : 'show_all_posts_error'
            },

            post : {
                api_stub : 'blog/posts/' + config.query_params + '.md',
                success_callback : 'show_post',
                error_callback : 'show_post_error'
            }
        
    };
    
    /* ========================== PRIVATE METHODS ========================== */
    
    // build query param map from raw URI param string
    function _makeParamsMap(p_str) {
        
        if (!p_str) { return false; }
        
        let params  = {},
            p_array = p_str.split('&');
        
        p_array.forEach( (p) => {
            let temp = p.split('=');
            
            if (!params.hasOwnProperty(temp[0])) {
                params[temp[0]] = temp[1];
            }
            
        });
        
        return params;
        
    }
    
    
    // execute routes
    function _doRoute(api_stub, success_callback, error_callback, callback_params) {
        
        callback_params = callback_params || {};
        
        let url = 'http://127.0.0.1:33695/index.html' + api_stub;
        
        $.get(url)
            .then( (data) => {
                app.controlers[success_callback](
                    data,
                    callback_params
                );
            })
            .catch( (err) => {
                app.controllers[error_callback](
                    err,
                    callback_params
                );
            });
        
    }
    
    /* ========================== PUBLIC METHODS =========================== */
    
    
    function route(hash, data) {
        
        hash = hash || 'home';
        
        let route      = hash.split('?')[0],
            params_str = hash.split('?')[1],
            hasParams  = Boolean(params_str),
            params_map = hasParams ? _makeParamsMap(params_str) : null;
        
        // diag
        console.clear();
        console.log('Route: ' + route);
        console.log('Param: ' + params_str);
        console.log('MakeParamsMap: ', params_map);
        
        if (hasParams) {
            config.query_params = params_map;
        }
        
        // execute route
        
        
    }
    
    
    /* ============================ EXPORT API ============================= */
    
    return {
        route : route
    };
    
}(jQuery));
