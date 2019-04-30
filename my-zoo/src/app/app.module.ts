import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConvertisseurModule } from './convertisseur/convertisseur.module';
import { SharedModule } from './shared/shared.module';
import { PageAccueilConvertisseurComponent } from './convertisseur/page/page-accueil-convertisseur/page-accueil-convertisseur.component';

@NgModule({
    declarations: [
        AppComponent,
        PageAccueilConvertisseurComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ConvertisseurModule,
        SharedModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
