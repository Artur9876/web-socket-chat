var socket;

var typing = false;

let outputVal;


socket = io.connect('https://5902-178-42-193-57.eu.ngrok.io');



function getInputValue(){
    // Selecting the input element and get its value 
    
    let inputVal = document.getElementById("text").value;
    if (inputVal !== null && inputVal.trim() !== ''){
        // Displaying the value
        
        socket.emit('message', inputVal);
            const tbodyEl = document.querySelector("tbody");
        
        
            
            tbodyEl.innerHTML += `
                
            
                <tr>
                    <th bgcolor="yellow" style="margin-left:20px";>${inputVal}</th>
                    
                </tr>
            
            
            `;
            document.getElementById("text").value="";
    }
}

socket.on('sendMessage', function(inputVal) {
  
  let outputVal = inputVal;

  const tbodyEl = document.querySelector("tbody");
     
      
        
        tbodyEl.innerHTML += `
            <tr>
                <td bgcolor="green">${outputVal}</td>
                
            </tr>

            
            
        `;
        document.querySelector("#a").scrollTop = document.querySelector("#a").scrollHeight; 
});

socket.on('typing', function() {
  
    typing = true;
});

function setup(){
    var canvas = createCanvas(20, 20);
    canvas.parent('canvasForHTML');
    
}

function draw(){
    background(255);
    if (typing) fill(255,0,0);
    else fill(255);
    noStroke();
    ellipse(10,10,20);
    typing = false;
}



 

      
      

      

     




