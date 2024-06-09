import { Component } from '@angular/core';

@Component({
  selector: 'app-component-one',
  standalone: true,
  imports: [],
  templateUrl: './component-one.component.html',
  styleUrl: './component-one.component.scss'
})
export class ComponentOneComponent {
/**
 * constructor componente uno
 */
constructor() {
  
}
title="this is a new title";
variables_Array=[
  "uno",
  "dos",
  "tres",
  "cuatro",
  "cinco"
]
}
