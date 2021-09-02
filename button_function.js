n = "nanase_voice_mp3".length;
let str = 1;
audioArr = [];

var button = document.getElementById('button');
  for (let i = 0; i < n; i++){
    audioArr.push("nanase_voice_mp3/voice"+str+".mp3")
    str = str + 1;
  }

var audio = new Audio();
var get_random_voice = function(){
    num = Math.floor(Math.random() * audioArr.length);
  
  if (num == audioArr.length) {
    num = audioArr.length - 1;
  }
  audio.src = audioArr[num]
  audio.currentTime = 0;
  audio.play();
};
  
button.addEventListener('click', function() {
  get_random_voice();
}, false);