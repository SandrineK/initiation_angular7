import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageAccueilAnimalComponent } from './page/page-accueil-animal/page-accueil-animal.component';
import { SharedModule } from '../shared/shared.module';
import { ListeAnimauxComponent } from './liste-animaux/liste-animaux.component';
import { DetailAnimalComponent } from './detail-animal/detail-animal.component';
import { AnimalRoutingModule } from './animal-routing.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [PageAccueilAnimalComponent, ListeAnimauxComponent, DetailAnimalComponent],
    exports:[ListeAnimauxComponent],
    imports: [
        CommonModule,
        SharedModule,
        RouterModule,
        AnimalRoutingModule,
        FormsModule
    ]
})
export class AnimalModule {
}
