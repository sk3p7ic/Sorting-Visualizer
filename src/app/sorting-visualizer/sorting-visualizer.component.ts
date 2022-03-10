import { Component, HostListener, OnInit } from '@angular/core';
import { BubbleSort } from '../algorithms/bubble-sort';
import { SortStatus } from '../algorithms/sort-status';


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

  constructor() {
    this.array = []
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
    for (let i = 0; i < this.calculateNumElements(); i++) {
      this.array.push(
        // Generate a psedo-random value on an interval
        Math.floor(Math.random() * (maxValue - VALUE_MIN + 1) + VALUE_MIN)
      );
    }
  }

  calculateNumElements() {
    return Math.floor((this.width * 0.9) / ELEMENT_WIDTH);
  }

  renderStatuses(arr: number[], stat: SortStatus) {
    console.log(stat);
    if (stat.swapped) {
      var temp = arr[stat.a];
      arr[stat.a] = arr[stat.b];
      arr[stat.b] = temp
    }
  }

  doBubbleSort() {
    var bubbleSort = new BubbleSort(this.array.slice());
    var newArray = bubbleSort.sort();
    var statuses = bubbleSort.getStatuses();
    for (let i = 0; i < statuses.length; i++) {
      setTimeout(() => { this.renderStatuses(this.array, statuses[i]); }, 50);
    }
    console.log(this.array);
  }

}
