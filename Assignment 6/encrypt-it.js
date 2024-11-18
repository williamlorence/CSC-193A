/*
 * Starter file 
 */
(function() {
  "use strict";

  /**
   * The starting point in our program, setting up a listener
   * for the "load" event on the window, signalling the HTML DOM has been constructed
   * on the page. When this event occurs, the attached function (init) will be called.
   */
  window.addEventListener("load", init);

  /**
   * TODO: Write a function comment using JSDoc.
   */
  function init() {
    // Note: In this function, we usually want to set up our event handlers
    // for UI elements on the page.
    
    encrypt.addEventListener("click", handleEncrypt)
    reset.addEventListener("click", handleReset)
    
  }

  // Add any other functions in this area (you should not implement your
  // entire program in the init function, for similar reasons that
  // you shouldn't write an entire Java program in the main method).

  function handleEncrypt() {
    const textArea = document.getElementById("input-text");
    const resultArea = document.getElementById("result");
  
    const input = textArea.value;
    let output = "";
    
    for (let i=0; i<input.length; i++){
      let c = 0;
      let cval = input.charCodeAt(i);

      if ((cval > 64 && cval < 91) || (cval > 96 && cval < 123)) {
        if (cval == 90 || cval == 122) {
          c = cval - 25;
        } else {
          c = cval + 1;
        }
      } else {
        c = cval;
      }

      output += String.fromCharCode(c);
    }

    resultArea.textContent = output;

  }

  function handleReset() {
    const textArea = document.getElementById("input-text");
    textArea.value = "";
  }

})();
