var postcss = require("postcss");
var open = require("open");

module.exports = postcss.plugin("postcss-not-important", function (opts) {
    return function (css) {
    
        var importantz = 0;
        
        css.eachDecl(function (decl) {
            
            if(decl.important) {
                importantz = 1;
                decl.important = false; //NOPE
            }

      });
          
      if (importantz) {
          
        console.log('Srsly? Important? I haz catz');
        open("http://thecatapi.com/api/images/get");
          
      };          

    }
});