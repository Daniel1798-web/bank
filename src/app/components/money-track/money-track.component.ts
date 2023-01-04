import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-money-track',
  templateUrl: './money-track.component.html',
  styleUrls: ['./money-track.component.scss']
})
export class MoneyTrackComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() historyMovements:any = "";

  trackActive:boolean = false;

  showTrack(){
    this.trackActive = !this.trackActive
  }

}
