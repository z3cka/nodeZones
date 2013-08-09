var gpio = require("pi-gpio");
var keypress = require('keypress');

keypress(process.stdin);
process.stdin.resume(); 
process.stdin.setEncoding('utf8'); 
process.stdin.setRawMode(true); 

process.stdin.on('keypress', function (ch, key) {
   
  if ( !key ) return;

  if ( key.name == 'q' ) {
    console.log('Quitting');
    process.exit();

  } else if ( key.name == 'g' ) {
    lightSwitch(7, 1);
    console.log('Green On');

  } else if ( key.name == 'h' ) {
    lightSwitch(7, 0);
    console.log('Green Off');

  } else if ( key.name == 'b' ) {
    lightSwitch(11, 1);
    console.log('Blue On');

  } else if ( key.name == 'n' ) {
    lightSwitch(11, 0);
    console.log('Blue Off');

  } else if ( key.name == 'r' ) {
    lightSwitch(12, 1);
    console.log('Red On');

  } else if ( key.name == 't' ) {
    lightSwitch(12, 0);
    console.log('Red Off');

  }
});

// turn LED on and off  
function lightSwitch(pin, state) {
  gpio.open(pin, "output", function(err) {
    gpio.write(pin, state, function() { 
      gpio.close(pin);
    });
  });
}
