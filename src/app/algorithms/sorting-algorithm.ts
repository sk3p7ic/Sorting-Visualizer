export class SortingAlgorithm {
  static swap(array: number[], a: number, b: number) {
    var temp = array[a];
    array[a] = array[b];
    array[b] = temp;
  }
}
