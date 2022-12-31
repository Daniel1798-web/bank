import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-info-user',
  templateUrl: './info-user.component.html',
  styleUrls: ['./info-user.component.scss']
})
export class InfoUserComponent implements OnInit {

  constructor() { }


  ngOnInit(): void {
   
  }


  @Input() nameImage:Array<any> = [];
  @Output() exitSesion = new EventEmitter<boolean>;

  exit(){
    this.exitSesion.emit(true)
  }

}
