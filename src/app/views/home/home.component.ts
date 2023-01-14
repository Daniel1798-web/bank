import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { CharactersService} from '../../service/rickMorty/characters.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor( private character: CharactersService,private cookieService: CookieService,){}
  time:string = "";
  time2:number = 0;
  timeLogOut:number = 0;
  ngOnInit(): void {
    this.time = this.cookieService.get("time")!;
    this.time2 = JSON.parse(this.time) 
    this.timeLogOut = this.time2
    this.getCharacters()
  }

  closeSesion:boolean = false;

  activeSmooth:boolean = false;

  activeSesion:boolean = false;

  datosUser:object = {};
  verificador:string = "";

  //Rick and morty appi clients

  getCharacters(){
    this.character.getAllCharacters().subscribe({
        next:(data)=>{
          console.log(data)
        },
        error:(error)=>{
          console.log(error)
        } 

    })
  }


  showCart(data:object){

    if(data){
      this.verificador = "succes"
      this.datosUser = data
      setTimeout(()=>{
        this.exit()
      },this.timeLogOut)
   return  this.activeSesion = true
    }else{
      return null
    }
  }

  exit(){
    this.verificador = ''
    this.activeSesion = false;
    this.closeSesion = false;
  }
}
