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

  students = [
    {
      name:'Ahmed',
      age: 22,
    },
    {
      name:'Ali',
      age: 24,
    },
    {
      name:'Radouane',
      age: 18,
    },
    {
      name:'Samia',
      age: 30,
    },
  ]
  

  
  constructor() { }

  ngOnInit(): void {
  }

}
