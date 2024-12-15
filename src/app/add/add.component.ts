import { Component} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [FormsModule],  
  templateUrl: './add.component.html',
  styleUrl: './add.component.css',
})

export class AddComponent{
  
  add() {
    this._shared.heros.push(this._shared.hero),
    this._shared.hero = {
      name: '',
      power: 0,
      image: '', 
    },
    console.log(this._shared.heros)

  }

  constructor(public _shared: SharedService) {}

}
