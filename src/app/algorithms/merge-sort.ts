import { SortingAlgorithm } from './sorting-algorithm';
import { MergedSortStatus } from './merged-sort-status';


export class MergeSort {
  array: number[];
  statuses: MergedSortStatus[];

  constructor(array: number[]) {
    this.array = array;
    this.statuses = []
  }

  merge(left: number, middle: number, right: number, mainArray: number[], auxArray: number[]) {
    this.statuses.push(new MergedSortStatus(auxArray.slice(), left, right));
    this.statuses.push(new MergedSortStatus(mainArray.slice(), left, right));
    let leftIndex = left;
    let mainIndex = left;
    let rightIndex = middle + 1;
    // Sort some values
    while (leftIndex <= middle && rightIndex <= right) {
      if (auxArray[leftIndex] < auxArray[rightIndex]) {
        mainArray[mainIndex++] = auxArray[leftIndex++];
      } else {
        mainArray[mainIndex++] = auxArray[rightIndex++];
      }
    }
    this.statuses.push(new MergedSortStatus(auxArray.slice(), left, right));
    this.statuses.push(new MergedSortStatus(mainArray.slice(), left, right));
    // Insert extra unsorted values
    while (leftIndex <= middle) {
      mainArray[mainIndex++] = auxArray[leftIndex++];
    }
    while (rightIndex <= right) {
      mainArray[mainIndex++] = auxArray[rightIndex++];
    }
    this.statuses.push(new MergedSortStatus(mainArray.slice(), left, right));
  }

  sortHelper(left: number, right: number, mainArray: number[], auxArray: number[]) {
    if (left === right) return; // End condition
    var middle = Math.floor((left + right) / 2);
    this.sortHelper(left, middle, auxArray, mainArray);
    this.sortHelper(middle + 1, right, auxArray, mainArray);
    this.merge(left, middle, right, mainArray, auxArray);
  }

  sort() {
    if (this.array.length <= 1) return;
    this.sortHelper(0, this.array.length - 1, this.array, this.array.slice());
  }

  getArray() {
    return this.array;
  }

  getStatuses() {
    console.log(this.statuses);
    return this.statuses;
  }
}
