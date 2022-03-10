import { Component, HostListener, OnInit } from '@angular/core';


const ELEMENT_WIDTH = 6;
const VALUE_MAX = 1000;
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
    for (let i = 0; i < this.calculateNumElements(); i++) {
      this.array.push(
        Math.floor(Math.random() * ((VALUE_MAX * 0.75) - VALUE_MIN + 1) + VALUE_MIN)
      );
    }
    console.log(this.array);
  }

  calculateNumElements() {
    return Math.floor((this.width * 0.9) / ELEMENT_WIDTH);
  }

}
