function shuffleArray(array) {
  for (let n = array.length - 1; n > 0; n--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[n], array[j]] = [array[j], array[n]];
  }
}
