var cards = [];
var startTime;
var timer;
var elapsedTime = 0;
var backTimer;
var flgFirst = true;
var cardFirst;
var countUnit = 0;
var audio = new Audio();
var voice_length = "nanase_voice_mp3".length;
var voice_list = [];
var str = 1;

window.onload = function(){

  for (var i = 0; i < voice_length; i++){
    voice_list.push(str);
    str = str + 1;
  };

  var arr = [];
    
  for (var i = 0; i < 10; i++){
    arr.push(i);
    arr.push(i);
  };

  shuffle(voice_list);
  shuffle(arr);
    
  var panel = document.getElementById('panel');
    
  for (i = 0; i < 20; i++){
    var div = document.createElement('div');
    div.className = 'card back';
    div.index = i;
    div.number = arr[i];
    div.id = "";
    div.onclick = turn;
    panel.appendChild(div);
    cards.push(div);
  };

  startTime = new Date();
  startTimer();
};

function shuffle(voice_list) {
  var voice_length = "nanase_voice_mp3".length;
  var temp, i;

  while (voice_length) {
    i = Math.floor(Math.random() * voice_length--);
    temp = voice_list[voice_length];
    voice_list[voice_length] = voice_list[i];
    voice_list[i] = temp;
  };
  return voice_list;
};

function shuffle(arr) {
  var n = arr.length;
  var temp, i;

  while (n) {
    i = Math.floor(Math.random() * n--);
    temp = arr[n];
    arr[n] = arr[i];
    arr[i] = temp;
  };
  return arr;
};

function turn(e){
    
  var div = e.target;
    
  if (backTimer) return;

  if (div.id == ''){
    div.className = 'card';
    div.id = 'card_front';
    var voice_number = voice_list[div.number];
    audio.src = `nanase_voice_mp3/voice${voice_number}.mp3`;
    audio.play();
  }else{
    return;
  };
    
  if (flgFirst){
    cardFirst = div;
    flgFirst = false;     
  }else{
    if (cardFirst.number == div.number){
      countUnit++;
      backTimer = setTimeout(function(){
        div.className = 'card finish';
        cardFirst.className = 'card finish';
        backTimer = NaN;

        if (countUnit == 10){
          clearInterval(timer);
          var result = confirm('CLEAR!\nTime:'+ elapsedTime + '秒\nもう一度やる？');
          if (result == true){
          location.reload();
          }else{
            window.location.href = "index.html";
          }
        };
      }, 500)
    }else{  
      backTimer = setTimeout(function(){
        div.className = 'card back';
        div.id = '';
        cardFirst.className = 'card back';
        cardFirst.id = '';
        cardFirst = null;
        backTimer = NaN;
      }, 500);
    };    
    flgFirst = true;
  };
};

function startTimer(){
  timer = setInterval(showSecond, 1000);
};

function showSecond(){
  var nowTime = new Date();
  elapsedTime = Math.floor((nowTime - startTime) / 1000);
};