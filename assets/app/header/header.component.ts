import { Component } from "@angular/core";

@Component({
    selector: 'fender-header',
    styleUrls: ['./header.component.css'],
    templateUrl: './header.component.html'
})
export class FenderHeader {
    brand:string = 'Fender';
    brand_image_url:string = '/images/fender_logo.png';
    links:any = [
        { name: 'Products', url: '#products' },
        { name: 'Holiday', url: '#holiday' },
        { name: 'Customize', url: '#custom' },
        { name: 'Dealers', url: '#dealers' }
    ];
    searchBoxText:string = 'Search Box Here';
}