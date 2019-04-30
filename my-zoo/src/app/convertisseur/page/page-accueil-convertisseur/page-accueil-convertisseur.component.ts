import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'zoo-page-accueil-convertisseur',
    templateUrl: './page-accueil-convertisseur.component.html',
    styleUrls: ['./page-accueil-convertisseur.component.css']
})
export class PageAccueilConvertisseurComponent implements OnInit {

    public miles: number;
    public metres: number;
    private COEF: number = 1609;

    constructor() {
    }

    ngOnInit() {
        this.metres = 0;
        this.miles = 0;
    }

    public onKeyMiles(miles: string) {
        console.log(miles);
        this.miles = Number.parseInt(miles);
        this.metres = this.miles * this.COEF;
    }

    public onKeyMetres(metres: string) {
        this.metres = Number.parseInt(metres);
        this.miles = this.metres / this.COEF;
    }

}
