import { Component, OnInit } from '@angular/core';
import { Animal } from '../../shared/models/animal.model';
import { ANIMAUX } from '../../shared/data/animaux.data';

@Component({
  selector: 'zoo-liste-animaux',
  templateUrl: './liste-animaux.component.html',
  styleUrls: ['./liste-animaux.component.css']
})
export class ListeAnimauxComponent implements OnInit {

  animaux: Animal[] = ANIMAUX;

  constructor() { }

  ngOnInit() {
  }

}
