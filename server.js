function Client (id)
{
    this.id = id;
}

let clients = [];

const express = require('express');


const app = express();

const server = app.listen(process.env.PORT || 3000, listen);

function listen() {
  const host = server.address().address;
  const port = server.address().port;
  console.log('Example app listening at http://' + host + ':' + port);
}

app.use(express.static('public'));

const io = require('socket.io')(server);



// Register a callback function to run when we have an individual connection
// This is run for each individual user that connects
io.sockets.on('connection',
  // We are given a websocket object in our function
  function (socket) {
    
    let client = new Client(socket.id);
    clients.push(client);
    

    socket.on('message', function(inputVal) {
      
        for (i=0; i < clients.length; i++)
            if (socket.id !== clients[i].id)
                io.to(clients[i].id).emit('sendMessage', inputVal); 
         
        
        
        
      });

      socket.on('typing', function() {
        
        for (i=0; i < clients.length; i++)
            if (socket.id !== clients[i].id)
              io.to(clients[i].id).emit('typing'); 
        
        
        
      });
    
    
    socket.on('disconnect', function() {
      
        for (i=0; i < clients.length; i++)
            if (socket.id === clients[i].id)
                clients.splice(i, 1);  
      
      
      
      
    });
    
  }
  
);



  
 
