import { Component, OnInit } from '@angular/core';

interface Terminal {
  id: number;
  first: string;
}

@Component({
  selector: 'app-agencias',
  templateUrl: './agencias.page.html',
  styleUrls: ['./agencias.page.scss'],
})
export class AgenciasPage implements OnInit {

  terminales: Terminal[] = [
    {
      id: 1,
      first: 'Asuncion'
    },
    {
      id: 2,
      first: 'CDE'
    },
    {
      id: 3,
      first: 'Encarnacion'
    }
  ];

  compareWith(o1: Terminal, o2: Terminal) {
    return o1 && o2 ? o1.id === o2.id : o1 === o2;
  }

  constructor() { }

  ngOnInit() {
  }

}
