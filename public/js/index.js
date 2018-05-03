  var socket = io();

  socket.on('connect', function ()  {
    console.log('Connected to server');

    // socket.emit('createEmail', {
    //   to: 'kyle@example.com',
    //   text: 'Yo'
    // });

    socket.emit('createMessage', {
      from: "fucktard",
      text: "fuck you"
    });
  });

  socket.on('disconnect', function ()  {
    console.log('Disconnected from server');
  });

  // socket.on('newEmail', function (email) {
  //   console.log('New email', email);
  // });

  socket.on('newMessage', function (message) {
    console.log('new Message', message);
  });
