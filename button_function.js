const audio = new Audio();
document.getElementById('button').addEventListener('click', () => {
  const n = "nanase_voice_mp3".length;
  const i = Math.floor(Math.random() * n + 1);
  audio.src = `nanase_voice_mp3/voice${i}.mp3`;
  audio.play();
},false);
