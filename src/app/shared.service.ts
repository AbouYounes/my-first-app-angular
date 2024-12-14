import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

  heros : any[] = [];
  hero = {
    name: '',
    power: 0,
    image: '',
  };

}
