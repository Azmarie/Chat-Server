var socket = io();

$('form').submit(function () {
  var name = $('#initials').val();
  $('#initials').val('');

  var message = $('#message').val();
  // string interpolation:
  var text = `${name} says: ${message}`
  // var text = name + " says: " + message;
  socket.emit('message', text);
  $('#message').val('');
  return false;
});

socket.on('message', function (msg) {
  $('<li>').text(msg).appendTo('#history');
});
