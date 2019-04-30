import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageAccueilAnimalComponent } from './page/page-accueil-animal/page-accueil-animal.component';
import { AnimalRootingModule } from './animal-rooting.module';
import { ListeAnimauxComponent } from './liste-animaux/liste-animaux.component';

@NgModule({
    declarations: [PageAccueilAnimalComponent, ListeAnimauxComponent],
    imports: [
        CommonModule,
        AnimalRootingModule
    ]
})
export class AnimalModule {
}
