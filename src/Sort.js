class SomeKindOfSort {
  constructor(array) {
    this.array = array;
  }
  sort() {
    let length = this.array.length;
    let index = Math.floor(length / 2 - 1);
    let last = length - 1;

    const heapify = (length, index) => {
      let biggest = index;
      let left = 2 * index + 1;
      let right = left + 1;
      if (left < length && this.array[biggest] < this.array[left]) {
        biggest = left;
      }
      if (right < length && this.array[biggest] < this.array[right]) {
        biggest = right;
      }

      if (biggest != index) {
        [this.array[biggest], this.array[index]] = [
          this.array[index],
          this.array[biggest],
        ];
        heapify(length, biggest);
      }
      return this.array;
    };

    while (index >= 0) {
      heapify(length, index);
      index--;
    }

    while (last >= 0) {
      [this.array[0], this.array[last]] = [this.array[last], this.array[0]];
      heapify(last, 0);
      last--;
    }
    return this.array;
  }

  returnValue(value) {
    return value;
  }
}

module.exports = SomeKindOfSort;
// [ 8, 6, 7, 4, 5, 3, 2, 1 ]
