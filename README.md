# jsMan
Oldschool, lightweight native JavaScript library for basic operations: DOMContentLoaded, Ajax GET &amp; POST, DOM manipulation.
Recommendation is to include the jsMan.min.js script before the end of the <body> tag.

**Usage**
  - If *DOMContentLoaded event* is needed one will have to declare a new function before the inclusion of the jsMan.min.js script tag.
  
      Example: 
      ```javascript
          var domLoad = function() { console.log('Dom content is loaded');  }
      ```
      
  - *Basic DOM manipulation* for element by ID and elements by class name.
    The jsMan library acts like a wrapper for document.getElementByID() and document.getElementsByClassName(). The jsMan library provides the getElement() method as a wrapper for both retrievals, by ID or by class names.
    
    Method signature:
    ```javascript
    jsMan.getElement(boolean isIDTrueOrisClassFalse, string IdOrClassName);
    ```
    
    
    Example:
    ```javascript
    var myDivById = jsMan.getElement(true, 'a');
    var mySpanByClassName = jsMan.getElement(flase, 'b');
    ```

  - *Ajax pattern* wrapper for HTTP GET and POST uses the XMLHttpRequest object and a callback function for treating success or error.
  
    Asynchronous HTTP GET method signature:
    ```javascript
    jsMan.asyncGet(string url, function callback);
    ```
    
    Asynchronous HTTP POST method signature:
    ```javascript
     jsMan.asyncPost(string url, Array data, function callback);
    ```
    ***************************************************
    **Author: Alex Manolescu**
    
    **E-mail: alex.manolescu@yahoo.com**
    
    **Linkedin: https://www.linkedin.com/in/alexmano/**
