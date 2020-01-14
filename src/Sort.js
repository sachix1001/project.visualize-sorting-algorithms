class HeapSort {
  constructor(array) {
    this.array = array;
    this.steps = [];
  }
  heapify(length, index) {
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
      this.heapify(length, biggest);
    }
    return this.array;
  }
  *sort() {
    let length = this.array.length;
    let index = Math.floor(length / 2 - 1);
    let last = length - 1;

    while (index >= 0) {
      yield this.heapify(length, index);
      index--;
    }

    while (last >= 0) {
      [this.array[last], this.array[0]] = [this.array[0], this.array[last]];
      yield this.array;
      yield this.heapify(last, 0);
      last--;
    }

    return this.array;
  }

  returnValue() {
    return this.step;
  }
}

const sort = new HeapSort([3, 5, 2, 1, 4, 6, 7]);
const sorting = sort.sort();
const steps = [];
steps.push(sorting.next().value);
steps.push(sorting.next().value);
steps.push(sorting.next().value);
steps.push(sorting.next().value);
steps.push(sorting.next().value);
steps.push(sorting.next().value);
steps.push(sorting.next().value);
steps.push(sorting.next().value);
steps.push(sorting.next().value);
steps.push(sorting.next().value);
steps.push(sorting.next().value);
steps.push(sorting.next().value);
steps.push(sorting.next().value);
steps.push(sorting.next().value);
steps.push(sorting.next().value);
steps.push(sorting.next().value);
steps.push(sorting.next().value);
steps.push(sorting.next().value);

console.log(steps);
module.exports = HeapSort;
