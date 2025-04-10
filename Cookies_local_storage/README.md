# Cookies / Local Storage
## How to create cookies using JavaScript?
* document.cookie = "name=value; expires=date; path=path";
## How to set specific settings for the cookie?
* You set specific settings for cookies in JavaScript by including optional attributes within the document.cookie string when you create or modify a cookie.
## How to read cookies with Javascript?
* By using the document.cookie property. 
* When you access document.cookie, it returns a string containing all the cookies for the current document, separated by semicolons.
## How to use js-cookie for easy cookie manipulation?
* Cookies.set('name', 'value), Cookies.get('name', 'value), Cookies.remove('name', 'value), etc.
## How to use the browser web storage?
* The browser provides two main mechanisms for web storage: Local Storage and Session Storage. 
* Local Storage will remain there even after the browser window is closed.
* Session Storage is tied to a specific browser tab or window.
* Both allow you to store key-value pairs directly in the user’s browser, but they differ in their scope and lifetime.
## The differences between local storage and session storage?
* Use Local Storage for data you need to keep around for a while, even after the use closes their browser. 
* Use Session Storage for data that is only relevant during the user’s current visit to a specific tab or window.