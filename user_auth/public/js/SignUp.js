(function () {
    var myInput = document.getElementById("psw");
    var letter = document.getElementById("letter");
    var capital = document.getElementById("capital");
    var number = document.getElementById("number");
    var length = document.getElementById("length");
    var message = document.getElementById("message");
	var submit = document.getElementById("submitForm");
	var username = document.getElementById("usrname");
    var generic;

    var validators = {
      lowerCaseLetters: /[a-z]/g,
      upperCaseLetters: /[A-Z]/g,
      numbers:  /[0-9]/g,
      length: 8
    }

    class Generic {
      addClass(el, className) {
        el.classList.add(className);
      }
      removeClass(el, className) {
        el.classList.remove(className)
      }
      addEvent(el, event, callback) {
        el.addEventListener(event, callback);
      }
    }

    function ajax(url, method, data) {
      return new Promise(function(resolve, reject) {
        var request = new XMLHttpRequest();
        request.open(method, url, true);
        request.responseType = 'text';
        request.setRequestHeader("Content-Type", "application/json");
        request.onreadystatechange = function() {
          if (request.readyState === XMLHttpRequest.DONE) {
            if (request.status === 200) {
              resolve(request.responseText);
            } else {
              reject(Error(request.statusText));
            }
          }
        };
        request.onerror = function() {
          reject(Error("Network Error"));
        };
        request.send(data);
        
      });
    }


    var submitC = function(e) {
      e.preventDefault();
      var data = {
        'username': username.value,
        'password': myInput.value
      };

      ajax('http://localhost:4000/addname', 'POST', JSON.stringify(data)).then(function(result) {
        console.log((result));
      });

    }

    function eventListeners () {
      generic.addEvent(myInput, 'keyup', keyupC);
      generic.addEvent(myInput, 'focus', focusC);
      generic.addEvent(myInput, 'blur', blurC);
			generic.addEvent(submit, 'click', submitC);
    }

    // When the user clicks on the password field, show the message box
    var focusC = function() {
      message.style.display = "block";
    }

    // When the user clicks outside of the password field, hide the message box
    var blurC = function() {
      message.style.display = "none";
    }

    // When the user starts to type something inside the password field
    var keyupC = function() {
      var validate = new Validate();
      validate.check();
    }

    class Validate {

      check() {
        if(myInput.value.match(validators.lowerCaseLetters)) {
          generic.removeClass(letter, "invalid");
          generic.addClass(letter, "valid");
        } else {
          generic.removeClass(letter, "valid");
          generic.addClass(letter, "invalid");
        }

        // Validate capital letters
        if(myInput.value.match(validators.upperCaseLetters)) {
          generic.removeClass(capital, "invalid");
          generic.addClass(capital, "valid");
        } else {
          generic.removeClass(capital, "valid");
          generic.addClass(capital, "invalid");
        }

        // Validate numbers
        if(myInput.value.match(validators.numbers)) {
          generic.removeClass(number, "invalid");
          generic.addClass(number, "valid");
        } else {
          generic.removeClass(number, "valid");
          generic.addClass(number, "invalid");
        }

        // Validate length
        if(myInput.value.length >= validators.length) {
          generic.removeClass(length, "invalid");
          generic.addClass(length, "valid");
        } else {
          generic.removeClass(length, "valid");
          generic.addClass(length, "invalid");
        }
      }
    }

    function init() {
      generic = new Generic();
      eventListeners();
    }

    init();
})();
