import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-bank-cart',
  templateUrl: './bank-cart.component.html',
  styleUrls: ['./bank-cart.component.scss']
})
export class BankCartComponent implements OnInit {

  constructor() { }

  @Output() activeBoxExit = new EventEmitter<boolean>;

  @Input() datoUser:any = "";
  

  ngOnInit(): void {
    

  }


  activeBox(e:any){
    this.activeBoxExit.emit(true)
  }



}
