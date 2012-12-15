/*
 Both of the block below execute tests, but it seems the 2nd is preferred.
*/

/*
OPTION 1:

GreeterTest = TestCase("GreeterTest");

GreeterTest.prototype.testGreet = function() { 
   var greeter = new myapp.Greeter();
   assertEquals("Hello World!", greeter.greet("World"));
};
*/

/* 
OPTION 2:
*/
TestCase("greeter.greet", {
   "test greet adds name correctly" : function() {
      var greeter = new myApp.Greeter();
      assertEquals("Hello World!", greeter.greet("World"));
   }
});