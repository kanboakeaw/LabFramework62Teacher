import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor (private router:Router) {}

  ngOnInit() {
  }

  onSubmit(){
    this.router.navigate(["/home"]);
    
    }
    

}
