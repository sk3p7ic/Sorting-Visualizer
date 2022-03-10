import { SortingAlgorithm } from './sorting-algorithm';

export class QuickSort {

  array: number[];

  constructor(array: number[]) {
    this.array = array;
  }

  divide(low: number, high: number) {
    var pivot = this.array[high];
    var smallIndex = (low - 1);
    for (let j = low; j <= high - 1; j++) {
      if (this.array[j] < pivot) {
        smallIndex++;
        SortingAlgorithm.swap(this.array, smallIndex, j);
      }
    }
    SortingAlgorithm.swap(this.array, smallIndex + 1, high);
    return (smallIndex + 1);
  }

  sort(low: number, high: number) {
    if (low < high) {
      var partIdx = this.divide(low, high);
      this.sort(low, partIdx - 1);
      this.sort(partIdx + 1, high);
    }
  }

  getArray() {
    return this.array;
  }
}
