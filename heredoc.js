(function(_window){
  'use strict';

  function heredoc(f,begintag,endtag){
    // begintag = begintag || "{{{";
    // endtag = endtag || "}}}";
    // var reobj = new RegExp("/\\*"+begintag+"\\n[\\s\\S]*?"+endtag+"\\*/", "m");
    // str = reobj.exec(f).toString();
    // str = str.replace(new RegExp("/\\*"+begintag+"\\n",'m'),'').toString();
    // return str.replace(new RegExp(""+endtag+"\\*/",'m'),'').toString();
    begintag = begintag || '/\\*{{{\\n';
    endtag = endtag || '\\n\\s*}}}\\*/';
    var m = new RegExp(begintag+'([\\s\\S]*?)'+endtag, 'm').exec(f);
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
