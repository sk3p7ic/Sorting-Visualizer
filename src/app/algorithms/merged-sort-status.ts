export class MergedSortStatus {

  array: number[];
  normalArrayLength: number;
  public start: number;
  public end: number;

  operations: number[][];

  constructor(array: number[], start: number, end: number) {
    this.array = array.slice(start, end + 1);
    this.normalArrayLength = array.length;
    this.start = start;
    this.end = end;
    this.operations = [];
  }

  addOperation(a: number, b: number) {
    var indexA = a - this.start;
    var indexB = b - this.start;
  }

  repairArray(sourceArray: number[]) {
    for (let i = 0; i < this.array.length; i++) {
      sourceArray[i] = this.array[i];
    }
  }
}
