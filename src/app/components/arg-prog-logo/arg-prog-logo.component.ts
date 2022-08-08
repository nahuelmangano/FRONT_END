import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-arg-prog-logo',
  templateUrl: './arg-prog-logo.component.html',
  styleUrls: ['./arg-prog-logo.component.css']
})
export class ArgProgLogoComponent implements OnInit {
  isLogged=false;

  constructor(private router:Router, private tokenService:TokenService) { }

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged=true;
      
    }else{
      this.isLogged=false;
    }
  }

  onLogOut():void{
    this.tokenService.logout();
    window.location.reload();

  }
  //direccion a login
  login(){
    this.router.navigate(['/login'])

  }

}
