/* app.js
   Root namespace module
*/

/* jshint esversion:6 */
/* globals jQuery */

var app = (function ($) {
    
    'use strict';
    
    function init($container) {
        
        app.shell.init( $container );
        
    }
    
    return {
        init: init
    };
    
}(jQuery));
