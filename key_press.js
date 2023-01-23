document.addEventListener('keydown', (event) => {
    var name = event.key;
    var code = event.code;
    let key_pressed = name;
    key_pressed = key_pressed.toLowerCase();
    console.log(key_pressed);
    if(key_pressed == ';')
      key_pressed = 'semi';
    if(key_pressed == '-')
      key_pressed = 'dash';
    if(key_pressed == '=')
      key_pressed = 'equals';
    if(key_pressed == '[')
      key_pressed = 'sqLeft';
    if(key_pressed == ']')
      key_pressed = 'sqRight';
    if(key_pressed == '\\')
      key_pressed = 'backSlash';
    if(key_pressed == "'")
      key_pressed = 'colon';
    if(key_pressed == 'enter')
      key_pressed = 'enter';
    if(key_pressed == ',')
      key_pressed = 'comma';
    if(key_pressed == '.')
      key_pressed = 'period';  
    if(key_pressed == '/')
      key_pressed = 'slash'; 
    if(key_pressed == '1')
      key_pressed = 'one';
    if(key_pressed == '2')
      key_pressed = 'two';
    if(key_pressed == '3')
      key_pressed = 'three';
    if(key_pressed == '4')
      key_pressed = 'four';
    if(key_pressed == '5')
      key_pressed = 'five';
    if(key_pressed == '6')
      key_pressed = 'six';
    if(key_pressed == "7")
      key_pressed = 'seven';
    if(key_pressed == '8')
      key_pressed = 'eight';
    if(key_pressed == '9')
      key_pressed = 'nine';
    if(key_pressed == '0')
      key_pressed = 'zero';             
    if(key_pressed == '`')
      key_pressed = 'tilde';
    if(key_pressed == 'backspace')
      key_pressed = 'back';
    if(key_pressed == 'tab')
      key_pressed = 'tab';
    if(key_pressed == 'shift')
      key_pressed = 'shift';
    if(key_pressed == 'control')
      key_pressed = 'ctrl'; 
    if(key_pressed == 'alt')
      key_pressed = 'alt';
    if(key_pressed == ' ')
      key_pressed = 'space';
    if(key_pressed == 'capslock' )
      key_pressed = 'caps';              
    let key = document.querySelector("."+key_pressed);
    key.style.backgroundColor = '#e4d4d4';
  }, false);
  document.addEventListener('keyup', (event) => {
    var name = event.key;
    var code = event.code;
    let key_pressed = name;
    key_pressed = key_pressed.toLowerCase();
    console.log(key_pressed);
    if(key_pressed == ';')
      key_pressed = 'semi';
    if(key_pressed == '-')
      key_pressed = 'dash';
    if(key_pressed == '=')
      key_pressed = 'equals';
    if(key_pressed == '[')
      key_pressed = 'sqLeft';
    if(key_pressed == ']')
      key_pressed = 'sqRight';
    if(key_pressed == '\\')
      key_pressed = 'backSlash';
    if(key_pressed == "'")
      key_pressed = 'colon';
    if(key_pressed == 'enter')
      key_pressed = 'enter';
    if(key_pressed == ',')
      key_pressed = 'comma';
    if(key_pressed == '.')
      key_pressed = 'period';  
    if(key_pressed == '/')
      key_pressed = 'slash';
    if(key_pressed == '1')
      key_pressed = 'one';
    if(key_pressed == '2')
      key_pressed = 'two';
    if(key_pressed == '3')
      key_pressed = 'three';
    if(key_pressed == '4')
      key_pressed = 'four';
    if(key_pressed == '5')
      key_pressed = 'five';
    if(key_pressed == '6')
      key_pressed = 'six';
    if(key_pressed == "7")
      key_pressed = 'seven';
    if(key_pressed == '8')
      key_pressed = 'eight';
    if(key_pressed == '9')
      key_pressed = 'nine';
    if(key_pressed == '0')
      key_pressed = 'zero';  
    if(key_pressed == '`')
      key_pressed = 'tilde'; 
    if(key_pressed == 'backspace')
      key_pressed = 'back';
    if(key_pressed == 'tab')
      key_pressed = 'tab';
    if(key_pressed == 'shift')
      key_pressed = 'shift';
    if(key_pressed == 'control')
      key_pressed = 'ctrl'; 
    if(key_pressed == 'alt')
      key_pressed = 'alt';
    if(key_pressed == ' ')
      key_pressed = 'space';
    if(key_pressed == 'capslock' )
      key_pressed = 'caps';                 
  
    let key = document.querySelector("."+key_pressed);
    key.style.backgroundColor = '#ffffff';
  }, false);