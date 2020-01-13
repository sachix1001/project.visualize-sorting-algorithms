class SomeKindOfSort {
  constructor(array) {
    this.array = array;
  }
  sort() {
    function heapify(arr, length, index) {
      let biggest = index;
      let left = 2 * index + 1;
      let right = left + 1;

      if (arr[biggest] < arr[left]) {
        biggest = left;
        let temp = arr[biggest];
        arr[biggest] = arr[left];
        arr[left] = temp;
      }
      if (arr[biggest] < arr[right]) {
        biggest = right;
        let temp = arr[biggest];
        arr[biggest] = arr[right];
        arr[right] = temp;
      }
    }
  }

  returnValue(value) {
    return value;
  }
}

module.exports = SomeKindOfSort;
