export class SortStatus {
  public a: number;
  public b: number;
  public swapped: boolean;

  constructor(a: number, b: number, swapped: boolean) {
    this.a = a;
    this.b = b;
    this.swapped = swapped;
  }

  setSwapped(value: boolean) {
    this.swapped = value;
  }
}
