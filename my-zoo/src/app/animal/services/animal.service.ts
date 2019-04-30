import { Injectable } from '@angular/core';
import { Animal } from '../../shared/models/animal.model';
import { ANIMAUX } from '../../shared/data/animaux.data';

@Injectable({
    providedIn: 'root'
})
export class AnimalService {

    animaux: Animal[] = ANIMAUX;

    constructor() {
    }

    public getAll(): Animal[] {
        return this.animaux;
    }

    public get(id: number): Animal {
        return this.animaux[id];
    }
}
