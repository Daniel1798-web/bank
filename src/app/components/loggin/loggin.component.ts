import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, 
        FacebookAuthProvider, signInWithPopup,TwitterAuthProvider, GithubAuthProvider  } from "firebase/auth";
  import { CookieService } from 'ngx-cookie-service';
  import {WarningService} from '../../service/notifications/warning.service'


@Component({
  selector: 'app-loggin',
  templateUrl: './loggin.component.html',
  styleUrls: ['./loggin.component.scss']
})
export class LogginComponent implements OnInit {

  formuDatos: FormGroup;
  formuDatosSing: FormGroup;

  constructor(public fb:FormBuilder,private cookieService: CookieService, public warning: WarningService ) { 

    //Validador Form
    this.formuDatos = this.fb.group({
      email: ['', [Validators.required,Validators.email] ],
      password: ['', Validators.required ],
      name: ['', Validators.required ],

    }),

    this.formuDatosSing = this.fb.group({
      email: ['', [Validators.required,Validators.email] ],
      password: ['', [Validators.required,  Validators.minLength(7)] ],
      passwordVerify: ['', [Validators.required , Validators.minLength(7)]],
    })
  }

  get formuControlLog():FormControl{
    return this.formuDatos.get('email') as FormControl
  }

  get formuControlLog2():FormControl{
    return this.formuDatos.get('password') as FormControl
  }

  get formuControl():FormControl{
    return this.formuDatosSing.get('email') as FormControl
  }

  get formuControl2():FormControl{
    return this.formuDatosSing.get('password') as FormControl
  }

  

  //fireBase


  log:boolean = false;
  createAcount:boolean = false;


  ngOnInit(): void {
  }

  //Datos formulario
  email:string = "";
  password:string = "";
  name:string = "";

  //sing
  emailSing:string = "";
  passwordSing:string = "";
  passwordVerify:string = "";

  blokFunction:boolean = false;
  spinerActive:boolean = false;
  textInfo:string ="";

  @Output() smooth = new EventEmitter<boolean>;


  //constructores
  @Output() dataUser = new EventEmitter<object>;


  dataObject:any ={}


  showLog(){
    if(this.blokFunction === true){
      return null
    }else{
    this.createAcount = false;
    this.log = !this.log;
    return this.formuDatosSing.reset()
    }
  }
  
  showSing(){
    if(this.blokFunction === true){
      return null
    }else{
      this.createAcount = !this.createAcount;
      this.log = false;
     return this.formuDatos.reset()
    }
  }

  back(){
    this.log = false;
    this.createAcount = false;
    this.formuDatos.reset()
    this.formuDatosSing.reset()
  }



  //crear cuenta
  singIn(){
    const auth = getAuth();
    this.blokFunction = true;
    this.spinerActive = true;
    createUserWithEmailAndPassword(auth, this.emailSing, this.passwordSing)
    .then((userCredential) => {
      this.blokFunction = false;
      this.spinerActive = false;

      // Signed in 
      const user = userCredential.user;
      console.log(userCredential)
      console.log(user)
      this.textInfo = "Succes"
      setTimeout(()=>{
        this.textInfo = "";
  
      },7000)
    })
    .catch((error) => {
      this.blokFunction = false;
      this.spinerActive = false;
      this.textInfo = error.message
      
      setTimeout(()=>{
        this.textInfo = "";
  
      },7000)

    });
  }


  notificationLoggin(){
    let object = {email:this.email}
    this.warning.sendMessage(object).subscribe({
      next:(data)=>{
        console.log(data)
      },
      error:(error)=>{
        console.log(error)
      }
    })
    
  }

  

  //Iniciar Sesión 
  logIn(){
    const auth = getAuth();
    this.blokFunction = true;
    this.spinerActive = true;
    this.smooth.emit(true)

    signInWithEmailAndPassword(auth, this.email, this.password)
      .then((userCredential) => 
      {
        this.smooth.emit(false)
        this.notificationLoggin()
    this.dataObject.name = this.name;
    this.dataObject.email = userCredential.user.email;
    this.dataObject.photo = "assets/photo.jpg"
    this.dataUser.emit(this.dataObject)
    this.blokFunction = false;
    this.spinerActive = false;
    this.cookieService.set("name", this.name)
    this.cookieService.set("money", "15000")
    const userString = JSON.stringify( userCredential.user)
    this.cookieService.set('user', userString)

    // Signed in 
    this.textInfo = "Succes"
    setTimeout(()=>{
      this.textInfo = "";

    },7000)
  })
  .catch((error) => {
    this.smooth.emit(false)
    this.blokFunction = false;
    this.spinerActive = false;
    this.textInfo = error.message

    setTimeout(()=>{
      this.textInfo = "";

    },7000)

  });
}


//Loggin con Facebook


 logInFacebook(){
 const provider = new FacebookAuthProvider();
 const auth = getAuth();
 this.smooth.emit(true)

signInWithPopup(auth, provider)
  .then((result) => {
    this.notificationLoggin()
    this.smooth.emit(false)
    const user = result.user;
    console.log(user)
    this.dataObject.name = user.displayName;
    this.dataObject.email = user.email;
    this.dataObject.photo = user.photoURL;

    this.dataUser.emit(this.dataObject)

    const userString = JSON.stringify(user)
    this.cookieService.set('user', userString)
    this.cookieService.set("money", "15000")

    const credential = FacebookAuthProvider.credentialFromResult(result);
    const accessToken  = credential?.accessToken;
  })
  .catch((error) => {
    this.smooth.emit(false)
    const credential = FacebookAuthProvider.credentialFromError(error);
  });
 }


 //Loggin con twiter  (error)

 LogInTwiter(){
  const provider = new TwitterAuthProvider();
  const auth = getAuth();
  this.smooth.emit(true)

  signInWithPopup(auth, provider)
  .then((result) => {
    this.notificationLoggin()
    this.smooth.emit(false)

    const credential = TwitterAuthProvider.credentialFromResult(result);
    const token = credential?.accessToken;
    const secret = credential?.secret;
    console.log(result.user)

  }).catch((error) => {
    this.smooth.emit(false)
    const errorMessage = error.message;
    console.log(errorMessage)
  });
 }


 //Loggin con Github 


 logInGithub(){
  this.smooth.emit(true)

  const provider = new GithubAuthProvider();
  const auth = getAuth();

signInWithPopup(auth, provider)
  .then((result) => {
    this.notificationLoggin()
    this.smooth.emit(false)

    const credential = GithubAuthProvider.credentialFromResult(result);
    const token = credential?.accessToken;
    const user = result.user;

    this.dataObject.name = user.displayName;
    this.dataObject.email = user.email;
    this.dataObject.photo = user.photoURL;

    this.dataUser.emit(this.dataObject)
    this.cookieService.set("money", "15000")


  }).catch((error) => {
    this.smooth.emit(false)
    const credential = GithubAuthProvider.credentialFromError(error);
    console.log(error)

    // ...
  });
 }


  }




