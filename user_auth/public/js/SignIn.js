(function () {
    var myInput = document.getElementById("psw");
  	var submit = document.getElementById("LoginSubmit");
  	var username = document.getElementById("usrname");

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


    submit.addEventListener("click", (e) => {
      e.preventDefault();
      var data = {
        'username': username.value,
        'password': myInput.value
      };

      ajax('http://localhost:4000/finduser', 'POST', JSON.stringify(data)).then(function(result) {
        var res = JSON.parse(result);
        if(res.status != false) {
         alert("You are present");
        }
        else {
         alert("You ain't present"); 
        }
        
      })
      .catch(function() {
        alert("You ain't present");
        console.log("You ain't present");
      });

    });

})();
