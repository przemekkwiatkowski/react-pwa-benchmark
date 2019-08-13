export const startCameraBenchmark = async () => {
  if ('mediaDevices' in navigator && 'getUserMedia' in navigator.mediaDevices) {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then(response => alert(response))
      .catch(error => alert(`getUserMedia() error: ${error}`));
  }
};
