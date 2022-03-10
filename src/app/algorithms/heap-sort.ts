import { SortingAlgorithm } from './sorting-algorithm';
import { SortStatus } from './sort-status';

export class HeapSort {
  array: number[];
  statuses: SortStatus[];

  constructor(array: number[]) {
    this.array = array;
    this.statuses = [];
  }

  sort() {
    this.buildMaxHeap();
    for (let ending = this.array.length - 1; ending > 0; ending--) {
      SortingAlgorithm.swap(this.array, 0, ending);
      this.statuses.push(new SortStatus(0, ending, true));
      this.sift(0, ending - 1, this.array);
    }
  }

  buildMaxHeap() {
    const parentIndex = Math.floor((this.array.length - 2) / 2);
    for (let current = parentIndex; current >= 0; current--) {
      this.sift(current, this.array.length - 1, this.array);
    }
  }

  sift(current: number, ending: number, heap: number[]) {
    let leftIndex = current * 2 + 1;
    while (leftIndex <= ending) {
      var rightIndex = ((current * 2 + 2) <= ending) ? (current * 2 + 2) : (-1);
      let swapIndex = (rightIndex !== -1 && heap[rightIndex] > heap[leftIndex]) ? rightIndex : leftIndex;
      if (heap[swapIndex] > heap[current]) {
        SortingAlgorithm.swap(heap, current, swapIndex);
        this.statuses.push(new SortStatus(current, swapIndex, true));
        current = swapIndex;
        leftIndex = current * 2 + 1;
      } else {
        return;
      }
    }
  }

  getArray() {
    return this.array;
  }

  getStatuses() {
    return this.statuses;
  }
}
