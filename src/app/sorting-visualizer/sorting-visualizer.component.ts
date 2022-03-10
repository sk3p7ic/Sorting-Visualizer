import { Component, HostListener, OnInit } from '@angular/core';


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

}
