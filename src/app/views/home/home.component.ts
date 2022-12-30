import { Component, OnInit } from '@angular/core';
import { CharactersService} from '../../service/rickMorty/characters.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor( private character: CharactersService){}

  ngOnInit(): void {
    this.getCharacters()
  }


  activeSesion:boolean = false;

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
}
