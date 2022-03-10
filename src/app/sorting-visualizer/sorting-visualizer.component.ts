import { Component, HostListener, OnInit } from '@angular/core';
import { BubbleSort } from '../algorithms/bubble-sort';
import { QuickSort } from '../algorithms/quick-sort';
import { MergeSort } from '../algorithms/merge-sort';
import { HeapSort } from '../algorithms/heap-sort';
import { SortStatus } from '../algorithms/sort-status';
import { MergedSortStatus } from '../algorithms/merged-sort-status';


const ELEMENT_WIDTH = 6;
const VALUE_MIN = 10;


@Component({
  selector: 'app-sorting-visualizer',
  templateUrl: './sorting-visualizer.component.html',
  styleUrls: ['./sorting-visualizer.component.sass']
})
export class SortingVisualizerComponent implements OnInit {


  width: any;
  height: any;
  array: number[];
  curr_comps: number[];
  canReset: boolean;
  hasCorrectPlacement: boolean[];

  constructor() {
    this.array = []
    this.curr_comps = [];
    this.canReset = true;
    this.hasCorrectPlacement = [];
  }

  ngOnInit(): void {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.resetArray();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
  }

  resetArray() {
    var maxValue = this.height * 0.85; // The max height of an element
    this.array = [] // Reset (clear) the array
    this.hasCorrectPlacement = [];
    this.curr_comps = [-1, -1];
    for (let i = 0; i < this.calculateNumElements(); i++) {
      this.array.push(
        // Generate a psedo-random value on an interval
        Math.floor(Math.random() * (maxValue - VALUE_MIN + 1) + VALUE_MIN)
      );
      this.hasCorrectPlacement.push(false);
    }
  }

  calculateNumElements() {
    return Math.floor((this.width * 0.9) / ELEMENT_WIDTH);
  }

  renderStatuses(arr: number[], stat: SortStatus) {
    this.curr_comps = [stat.a, stat.b];
    if (stat.swapped) {
      var temp = arr[stat.a];
      arr[stat.a] = arr[stat.b];
      arr[stat.b] = temp
    }
  }

  checkIfFinalPlacement(arr: number[]) {
    for (let i = 0; i < this.array.length; i++) {
      setTimeout(() => {
        this.hasCorrectPlacement[i] = (this.array[i] === arr[i]);
      }, i * 1.25);
    }
  }

  doBubbleSort() {
    this.canReset = false;
    const bubbleSort = new BubbleSort(this.array.slice());
    bubbleSort.sort();
    const statuses = bubbleSort.getStatuses();
    for (let i = 0; i < statuses.length; i++) {
      setTimeout(() => {
        this.curr_comps = [-1, -1];
        this.renderStatuses(this.array, statuses[i]);
        if (i == (statuses.length - 1)) {
          this.curr_comps = [-1, -1];
          this.checkIfFinalPlacement(bubbleSort.getArray());
          this.canReset = true;
        }
      }, i * 1.25);
    }
  }

  doQuickSort() {
    this.canReset = false;
    const quickSort = new QuickSort(this.array.slice());
    quickSort.sort(0, this.array.length - 1);
    const statuses = quickSort.getStatuses();
    console.log(statuses);
    for (let i = 0; i < statuses.length; i++) {
      setTimeout(() => {
        this.curr_comps = [-1, -1];
        this.renderStatuses(this.array, statuses[i]);
        if (i == (statuses.length - 1)) {
          this.curr_comps = [-1, -1];
          this.checkIfFinalPlacement(quickSort.getArray());
          this.canReset = true;
        }
      }, i * 1.25);
    }
  }

  doMergeSort() {
    this.canReset = false;
    const mergeSort = new MergeSort(this.array.slice());
    mergeSort.sort();
    //this.array = mergeSort.getArray();
    const statuses = mergeSort.getStatuses();
    for (let i = 0; i < statuses.length; i++) {
      setTimeout(() => {
        this.curr_comps = [statuses[i].start, statuses[i].end];
        statuses[i].repairArray(this.array);
        if (i == (statuses.length - 1)) {
          this.curr_comps = [-1, -1];
          this.checkIfFinalPlacement(mergeSort.getArray());
          this.canReset = true;
        }
      }, i * 1.25);
    }
  }

  doHeapSort() {
    this.canReset = false;
    const heapSort = new HeapSort(this.array.slice());
    heapSort.sort();
    const statuses = heapSort.getStatuses();
    for (let i = 0; i < statuses.length; i++) {
      setTimeout(() => {
        this.curr_comps = [-1, -1];
        this.renderStatuses(this.array, statuses[i]);
        if (i == (statuses.length - 1)) {
          this.curr_comps = [-1, -1];
          this.checkIfFinalPlacement(heapSort.getArray());
          this.canReset = true;
        }
      }, i * 1.25);
    }
  }

}
