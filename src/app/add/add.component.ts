import { Component, OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SharedService } from '../shared.service';
@Component({
  selector: 'app-add',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
],  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})

export class AddComponent {

  hero = {
    name: '',
    power: 0,
    image: '',    
  }

  add() {
    this._shared.heros.push(this.hero);
    this.hero = {
      name: '',
      power: 0,
      image: '', 
  }
}

constructor(public _shared: SharedService) {

}



}
