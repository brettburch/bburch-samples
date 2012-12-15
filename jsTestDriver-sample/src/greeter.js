
/* 
jQuery and undefined are passed in here for the following reasons:
 - the named parameter is referenced as $, which allows us to refer to jQuery as $ within the Anonymous Function without having to worry that it will conflict with the $ declared in other JavaScript libraries.
 - you can unfortunately redefine what undefined means. Imagine that some code somewhere deep in one of your 3rd party libraries redefines undefined to something strange like true. If anywhere in your code you test against undefined, then you code will most likely not behave like you intended. In JavaScript, if you have a parameter that doesn’t have a matching argument, then it’s value is set as undefined. By using this trick, it can save us from the bad code someone wrote to redefine undefined.

seealso: http://enterprisejquery.com/2010/10/how-good-c-habits-can-encourage-bad-javascript-habits-part-1/
*/

(function( myObj, $, undefined ) {

   //console.log('begin');

   var greeter = function() { };

   greeter.prototype.greet = function(name) { 
      return "Hello " + name + "!"; 
   };

   myObj.Greeter = greeter;

   //console.log('end');

}( window.myApp = window.myApp || {}, jQuery ));