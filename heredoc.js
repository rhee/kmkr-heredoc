(function(_window){
  'use strict';

  function heredoc(f,begintag,endtag,debug){
    // begintag = begintag || "{{{";
    // endtag = endtag || "}}}";
    // var reobj = new RegExp("/\\*"+begintag+"\\n[\\s\\S]*?"+endtag+"\\*/", "m");
    // str = reobj.exec(f).toString();
    // str = str.replace(new RegExp("/\\*"+begintag+"\\n",'m'),'').toString();
    // return str.replace(new RegExp(""+endtag+"\\*/",'m'),'').toString();
    begintag = begintag || '/\\*\\**(?:[\\s\\*]*\\s@preserve\\s*)?{{{\\n';
    endtag = endtag || '\\n\\s*}}}\\s*\\*/';
    var expr = begintag+'([\\s\\S]*?)'+endtag,
        m = new RegExp(expr, 'm').exec(f);
    if (debug) {
	console.info('heredoc trace:');
	console.info('    expr:',expr);
	console.info('    input:',JSON.stringify(f.toString()));
	console.info('    match:',m);
    }
    return m ? m[1] : '';
  }

  if (('undefined' !== typeof module) && module.exports) {
    // Publish as node.js module
    module.exports = heredoc;
  } else if (typeof define === 'function' && define.amd) {
    // Publish as AMD module
    define(function() {return heredoc;});
  } else {
    // Publish as global (in browsers)
    _previousRoot = _window.heredoc;
    // **`noConflict()` - (browser only) to reset global 'heredoc' var**
    heredoc.noConflict = function() {
      _window.heredoc = _previousRoot;
      return heredoc;
    };
    _window.heredoc = heredoc;
  }

})('undefined' !== typeof window ? window : null);
