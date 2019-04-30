import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { PageAccueilConvertisseurComponent } from './convertisseur/page/page-accueil-convertisseur/page-accueil-convertisseur.component';

const routes: Routes = [
    { path: '', redirectTo: '/animal', pathMatch: 'full' },
    { path: 'animal', loadChildren: './animal/animal.module#AnimalModule' },
    { path: 'convertisseur', component: PageAccueilConvertisseurComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
            enableTracing: false, // <-- debugging purposes only
            preloadingStrategy: PreloadAllModules
        })],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
