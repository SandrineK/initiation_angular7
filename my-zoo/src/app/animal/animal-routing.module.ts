import { NgModule } from '@angular/core';
import { PageAccueilAnimalComponent } from './page/page-accueil-animal/page-accueil-animal.component';
import { DetailAnimalComponent } from './detail-animal/detail-animal.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
    { path: '', component: PageAccueilAnimalComponent },
    { path: 'detail/:id', component: DetailAnimalComponent },
];

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forChild(
            appRoutes
        )
    ]
})
export class AnimalRoutingModule {
}
