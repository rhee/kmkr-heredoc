(function(_window){
  'use strict';

  function heredoc(f,begintag,endtag){
    begintag = begintag || "{{{";
    endtag = endtag || "}}}";
    //var reobj = new RegExp("/\\*"+begintag+"\\n[\\s\\S]*?\\n"+endtag+"\\*/", "m");
    var reobj = new RegExp("/\\*"+begintag+"\\n[\\s\\S]*?"+endtag+"\\*/", "m");
    str = reobj.exec(f).toString();
    str = str.replace(new RegExp("/\\*"+begintag+"\\n",'m'),'').toString();
    //return str.replace(new RegExp("\\n"+endtag+"\\*/",'m'),'').toString();
    return str.replace(new RegExp(""+endtag+"\\*/",'m'),'').toString();
  }

  if (('undefined' !== typeof module) && module.exports) {
    // Publish as node.js module
    module.exports = uuid;
  } else if (typeof define === 'function' && define.amd) {
    // Publish as AMD module
    define(function() {return uuid;});
  } else {
    // Publish as global (in browsers)
    _previousRoot = _window.uuid;
    // **`noConflict()` - (browser only) to reset global 'uuid' var**
    uuid.noConflict = function() {
      _window.uuid = _previousRoot;
      return uuid;
    };
    _window.uuid = uuid;
  }

})('undefined' !== typeof window ? window : null);
