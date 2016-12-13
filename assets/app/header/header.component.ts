import { Component, HostListener, Inject, OnInit } from "@angular/core";
import { DOCUMENT } from '@angular/platform-browser';

@Component({
    selector: 'fender-header',
    styleUrls: ['./header.component.css'],
    templateUrl: './header.component.html'
})
export class FenderHeader implements OnInit {
    brand:string = 'Fender';
    brand_image_url:string = '/images/fender_logo.png';
    links:any = [
        { name: 'Products', url: '#products' },
        { name: 'Holiday', url: '#holiday' },
        { name: 'Customize', url: '#custom' },
        { name: 'Dealers', url: '#dealers' }
    ];
    navIsFixed:boolean = false;
    searchBoxText:string = 'search';

    constructor(@Inject(DOCUMENT) private document: Document) { }

    ngOnInit() { }

    @HostListener("window:scroll", [])
    onWindowScroll() {
        let top = this.document.body.scrollTop;
        console.log(top);
        if (top > 64) {
            this.navIsFixed = true;
        } else if (this.navIsFixed && top < 64) {
            this.navIsFixed = false;
        }
    }

}