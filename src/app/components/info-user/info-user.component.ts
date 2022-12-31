import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-info-user',
  templateUrl: './info-user.component.html',
  styleUrls: ['./info-user.component.scss']
})
export class InfoUserComponent implements OnInit {

  constructor(private cookieService: CookieService) { }

  dataMoney:string = this.cookieService.get("money");
  money:number = JSON.parse(this.dataMoney)
  ngOnInit(): void {
  }


  @Input() nameImage:Array<any> = [];
  @Output() exitSesion = new EventEmitter<boolean>;

  exit(){
    this.exitSesion.emit(true)
  }

}
