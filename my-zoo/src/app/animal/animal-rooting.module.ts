import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageAccueilAnimalComponent } from './page/page-accueil-animal/page-accueil-animal.component';

const appRoutes: Routes = [
    { path: '', component: PageAccueilAnimalComponent }
];

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forChild(
            appRoutes
        )
    ]
})
export class AnimalRootingModule { }