import { SortingAlgorithm } from './sorting-algorithm';
import { SortStatus } from './sort-status';

export class QuickSort {

  array: number[];
  statuses: SortStatus[];

  constructor(array: number[]) {
    this.array = array;
    this.statuses = [];
  }

  divide(low: number, high: number) {
    var pivot = this.array[high];
    var smallIndex = (low - 1);
    for (let j = low; j <= high - 1; j++) {
      if (this.array[j] < pivot) {
        smallIndex++;
        SortingAlgorithm.swap(this.array, smallIndex, j);
        this.statuses.push(new SortStatus(smallIndex, j, true));
      }
    }
    SortingAlgorithm.swap(this.array, smallIndex + 1, high);
    this.statuses.push(new SortStatus(smallIndex + 1, high, true));
    return (smallIndex + 1);
  }

  sort(low: number, high: number) {
    this.statuses.push(new SortStatus(low, high, false));
    if (low < high) {
      var partIdx = this.divide(low, high);
      this.sort(low, partIdx - 1);
      this.sort(partIdx + 1, high);
    }
  }

  getArray() {
    return this.array;
  }

  getStatuses() {
    return this.statuses;
  }
}
