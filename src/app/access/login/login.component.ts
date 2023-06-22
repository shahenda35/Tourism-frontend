import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl, Validators, FormBuilder} from '@angular/forms';

import { LogService } from '../../services/log.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  
})
export class LoginComponent implements OnInit{
   
 hide: boolean = false;
  constructor(public LogS: LogService,private f : FormBuilder){

  }
  
  ngOnInit(): void {
    
  }

  loginForm : FormGroup = this.f.group({
    email : ['' , [Validators.required , Validators.email]],
    password: ['' , [Validators.required , Validators.minLength(8)]]
  });

  onLogin(){
    if(!this.loginForm?.valid){
      return;
    }
  }

 
}
