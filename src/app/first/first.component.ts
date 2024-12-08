import { Component, OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-first',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './first.component.html',
  styleUrl: './first.component.css'
})
export class FirstComponent implements OnInit{

  
  

  
  constructor() { }

  ngOnInit(): void {
  }

}
