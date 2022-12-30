import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, FacebookAuthProvider, signInWithPopup,TwitterAuthProvider, GithubAuthProvider  } from "firebase/auth";


@Component({
  selector: 'app-loggin',
  templateUrl: './loggin.component.html',
  styleUrls: ['./loggin.component.scss']
})
export class LogginComponent implements OnInit {

  formuDatos: FormGroup;
  formuDatosSing: FormGroup;

  constructor(public fb:FormBuilder) { 

    //Validador Form
    this.formuDatos = this.fb.group({
      email: ['', [Validators.required,Validators.email] ],
      password: ['', Validators.required ],

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
  auth = getAuth();


  log:boolean = false;
  createAcount:boolean = false;


  ngOnInit(): void {
  }

  //Datos formulario
  email:string = "";
  password:string = "";

  //sing
  emailSing:string = "";
  passwordSing:string = "";
  passwordVerify:string = "";


  spinerActive:boolean = false;
  textInfo:string ="";


  showLog(){
    this.createAcount = false;
    this.log = !this.log;
   this.formuDatosSing.reset()

  }
  
  showSing(){
    this.createAcount = !this.createAcount;
    this.log = false;
    this.formuDatos.reset()

  }

  back(){
    this.log = false;
    this.createAcount = false;
  }



  //crear cuenta
  singIn(){
    this.spinerActive = true;
    createUserWithEmailAndPassword(this.auth, this.emailSing, this.passwordSing)
    .then((userCredential) => {
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
      this.spinerActive = false;
      this.textInfo = error.message
      
      setTimeout(()=>{
        this.textInfo = "";
  
      },7000)

    });
  }



  //Iniciar Sesión 
  logIn(){
    this.spinerActive = true;
    signInWithEmailAndPassword(this.auth, this.email, this.password)
  .then((userCredential) => {
    this.spinerActive = false;
    // Signed in 
    const user = userCredential.user;
    this.textInfo = "Succes"
    setTimeout(()=>{
      this.textInfo = "";

    },7000)
  })
  .catch((error) => {
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

signInWithPopup(this.auth, provider)
  .then((result) => {
    // The signed-in user info.
    const user = result.user;
    console.log(user)

    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    const credential = FacebookAuthProvider.credentialFromResult(result);
    const accessToken  = credential?.accessToken;

    // ...
  })
  .catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = FacebookAuthProvider.credentialFromError(error);
    console.log(error)

    // ...
  });
 }


 //Loggin con twiter 

 LogInTwiter(){
  const provider = new TwitterAuthProvider();

  signInWithPopup(this.auth, provider)
  .then((result) => {
    // This gives you a the Twitter OAuth 1.0 Access Token and Secret.
    // You can use these server side with your app's credentials to access the Twitter API.
    const credential = TwitterAuthProvider.credentialFromResult(result);
    console.log(result)
    const token = credential?.accessToken;
    const secret = credential?.secret;

    // The signed-in user info.
    const user = result.user;
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = TwitterAuthProvider.credentialFromError(error);
    console.log(error)
    // ...
  });
 }


 //Loggin con Github 


 logInGithub(){

  const provider = new GithubAuthProvider();

signInWithPopup(this.auth, provider)
  .then((result) => {
    // This gives you a GitHub Access Token. You can use it to access the GitHub API.
    const credential = GithubAuthProvider.credentialFromResult(result);
    const token = credential?.accessToken;
    console.log(result)
    console.log(result.user)
    // The signed-in user info.
    const user = result.user;
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GithubAuthProvider.credentialFromError(error);
    console.log(error)

    // ...
  });
 }


  }




