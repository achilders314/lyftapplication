function myFunction(){

    var input = document.querySelector("#input").value;
    
        
        var stringLength = input.length;
        
        let x = 2;
        let interval = 3;
        let response = [];
        while (x < stringLength) {
          response.push(input[x]);
          x += interval
        }

    var return_string = "return_string";
    
    var modifiedString = JSON.stringify({
            return_string: response.join("")
        });
    
        document.getElementById("modifiedString").innerText = "Modified String: " + modifiedString;
      
      }