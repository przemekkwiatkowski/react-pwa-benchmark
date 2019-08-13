export const startCameraBenchmark = async video => {
  if ('mediaDevices' in navigator && 'getUserMedia' in navigator.mediaDevices) {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then(stream => (video.srcObject = stream))
      .catch(error => alert(`getUserMedia() error: ${error}`));
  }
};
