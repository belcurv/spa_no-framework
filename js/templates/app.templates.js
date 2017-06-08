/* jshint esversion:6 */
/* globals app */

app.templates = (function() {
    
    
    function homeTemplate() {
        let template = `
            <h1>Hello from the home page!</h1>
            <p>Some text content for the home page</p>`;
        
        return template;
    }
    
    
    function blogTemplate() {
        let template = `
            <h1>BLOG!</h1>
            <p>Blog content goes here...</p>`;
        
        return template;
    }
    
    
    function portfolioTemplate() {
        let template = `
            <h1>PORTFOLIO!</h2>
            <p>Portfolio goes here...</p>`;
        
        return template;
    }
    
    /* ============================ EXPORT API ============================= */
    
    return {
        home      : homeTemplate,
        blog      : blogTemplate,
        portfolio : portfolioTemplate
    };
    
}());