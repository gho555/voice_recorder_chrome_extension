let mediaRecorder;
let chunks = [];

navigator.mediaDevices
  .getUserMedia({
    video: false,
    audio: true,
  })
  .then(async (stream) => {
    mediaRecorder = new MediaRecorder(stream);

    mediaRecorder.ondataavailable = (event) => {
      chunks.push(event.data);
    };

    mediaRecorder.onstop = () => {
      const blob = new Blob(chunks, { type: "audio/wav" });
      const url = URL.createObjectURL(blob);
      // Do something with the captured audio URL, like playing it or saving it
      const a = document.createElement("a");
      a.href = url;
      a.download = "captured_audio.wav";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      chunks = [];
    };

    mediaRecorder.start();
  });

document.getElementById('stopRecord').addEventListener('click', async (e) => {
  mediaRecorder.stop();
  window.close();
});