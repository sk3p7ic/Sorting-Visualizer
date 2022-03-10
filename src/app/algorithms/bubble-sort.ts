import { SortStatus } from './sort-status';

export class BubbleSort {

  array: number[];
  statuses: SortStatus[];

  constructor(array: number[]) {
    this.array = array;
    this.statuses = [];
  }

  swap(array: number[], a: number, b: number) {
    var temp = this.array[a];
    this.array[a] = this.array[b];
    this.array[b] = temp;
  }

  sort() {
    for (let i = 0; i < this.array.length; i++) {
      for (let j = 0; j < (this.array.length - i - 1); j++) {
        var currentStatus = new SortStatus(j, j + 1, false);
        if (this.array[j] > this.array[j + 1]) {
          this.swap(this.array, j, j + 1);
          currentStatus.setSwapped(true);
        }
        this.statuses.push(currentStatus);
      }
    }
    console.log(this.statuses);
    return this.array;
  }

  getStatuses() {
    return this.statuses;
  }
}
