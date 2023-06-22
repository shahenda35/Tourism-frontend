import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
 
import { ActivatedRoute } from '@angular/router';
import { LogService } from '../../services/log.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit{
  constructor(public LogS: LogService, private ac:ActivatedRoute,private f : FormBuilder){}

  hide: boolean = false;

  ngOnInit(): void {
    
  }
  
  signupForm : FormGroup = this.f.group({
    username : ['' , [Validators.required]],
    email : ['' , [Validators.required , Validators.email]],
    password: ['' , [Validators.required , Validators.minLength(8)]],
    confirmPassword : ['',[Validators.required]]
  });

  onSignup(){
    if(!this.signupForm?.valid){
      return;
    }
  }
}
