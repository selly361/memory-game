export function shuffle(array: number[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const random = Math.floor(Math.random() * (i + 1));
      let original = array[i];
      array[i] = array[random];
      array[random] = original;
    }
    return array;
  }
  