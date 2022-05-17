const img = document.getElementById('main');
const audio = new Audio();
document.getElementById('button').addEventListener('click', () => {
  const n = "nanase_voice_mp3".length;
  const i = Math.floor(Math.random() * n + 1);
  audio.src = `nanase_voice_mp3/voice${i}.mp3`;
  imgChange();
  audio.play();
},false);

function imgChange(){
  const p = Math.floor(Math.random() * 2) + 1;
  img.src = `img/main_img${p}.png`;
};
