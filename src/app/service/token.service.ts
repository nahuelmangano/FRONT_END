import { Injectable } from '@angular/core';



const TOKEN_KEY = 'AuthToken'
const USERNAME_KEY = 'AuthUsername';
const AUTHORITIES_KEY = 'AuthAuthorities';

@Injectable({
  providedIn: 'root'
})

export class TokenService {
  roles: Array<string> = [];

  constructor() { }

  public setToken(token: string): void  {
    window.sessionStorage.removeItem('TOKEN_KEY');//lo borra por si hay algo
    window.sessionStorage.setItem('TOKEN_KEY',token); 
  
  }

  public getToken(): string {
    return window.sessionStorage.getItem('TOKEN_KEY')!;
}

public setUserName(userName:string):void{
  window.sessionStorage.removeItem('USERNAME_KEY');//lo borra por si hay algo
  window.sessionStorage.setItem('USERNAME_KEY',userName); 

}
public getUserName(): string {
  return sessionStorage.getItem('USERNAME_KEY')!;
}

public setAuthorities(authorities:string[]):void{
  window.sessionStorage.removeItem('AUTHORITIES_KEY');//lo borra por si hay algo
  window.sessionStorage.setItem('AUTHORITIES_KEY',JSON.stringify(authorities));

}

public getAuthorities():string[]{
  this.roles=[];
  if(sessionStorage.getItem(AUTHORITIES_KEY)){
    JSON.parse(sessionStorage.getItem(AUTHORITIES_KEY)!).forEach((authority:any) => {
      this.roles.push(authority.authority);
      
    });
  }
  return this.roles;


}



//logout
public logout():void{
  window.sessionStorage.clear();


}


}
