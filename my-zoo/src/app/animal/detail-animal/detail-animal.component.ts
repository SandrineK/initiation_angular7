import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Animal } from '../../shared/models/animal.model';
import { AnimalService } from '../services/animal.service';

@Component({
  selector: 'zoo-detail-animal',
  templateUrl: './detail-animal.component.html',
  styleUrls: ['./detail-animal.component.css']
})
export class DetailAnimalComponent implements OnInit {


    animal: Animal;
    id:number;


  constructor(private route: ActivatedRoute, private animalService : AnimalService) { }

  ngOnInit() {
      const id = +this.route.snapshot.paramMap.get('id');
      console.log(id);
      this.id = id;
      this.animal = this.animalService.get(id);
  }

}
