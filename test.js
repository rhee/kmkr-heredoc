var heredoc = require('./heredoc.js');

var test1 = heredoc(function(){
    /*{{{
hello, world
}}}*/
	},null,null,true);

var test2 = heredoc(function(){
    /**
     * @preserve
{{{
hello, world
}}}
*/
	},null,null,true);

var test3 = heredoc(function(){
    /** @preserve {{{
Hello, world
}}}*/
	},null,null,true);

var test4 = heredoc(function(){
    /**
     * @preserve {{{
Hello, world
}}}
*/  },null,null,true);

console.log(test1.length, test1);
console.log(test2.length, test2);
console.log(test3.length, test3);
console.log(test4.length, test4);
