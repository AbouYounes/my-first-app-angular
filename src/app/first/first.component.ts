import { Component, OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AddComponent } from "../add/add.component";
import { ListComponent } from "../list/list.component";


@Component({
  selector: 'app-first',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    AddComponent,
    ListComponent
],
  templateUrl: './first.component.html',
  styleUrl: './first.component.css'
})
export class FirstComponent implements OnInit{

  
   
  constructor() { }

  ngOnInit(): void {
  }

}
