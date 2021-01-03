import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { LoginService } from '../service/LoginService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;

  constructor(private router: Router,
    private loginService:LoginService) { }

  ngOnInit() {
  }

  /**
   * Login with the given username and password
   */
  login() : void {
    if(this.loginService.login(this.username,this.password)){
     this.router.navigate(["home"],{state: {user:this.username} });
    }else {
      alert("Invalid credentials");
    }
  }
  }
