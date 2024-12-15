import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {


  constructor() { }

  public heros:any[] = [];
  public hero = {
    name: '',
    power: 0,
    image: '',    
  }

  addHero(value: Object) {

    this.heros.push(value)
    
  }


}
