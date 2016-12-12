import { Component } from "@angular/core";

@Component({
    selector: 'fender-header',
    styles: [`
    .global-header {
        display: flex;
        margin: auto;
        max-width: 1266px;
    }
    .brand-container {
        flex-grow: 1;
        text-align: center;
    }
    .brand-container img {
        height: 64px;
    }
    nav.menu {
        align-items: center;
        display: flex;
        flex: 1;
        padding-left: 100px;
    }
    .menu a {
        color: #666;
        flex-grow: 1;
        font-family: sans-serif;
        font-size: 12px;
        font-weight: bold;
        letter-spacing: .4px;
        padding: 10px;
        text-align: center;
        text-decoration: none;
        text-transform: uppercase;
    }
    .navbar-header {
        width: auto;
    }
    .search-container {
        align-items: center;
        display: flex;
        flex-grow: 1;
    }
    .search-box {
        flex: 1;
        text-align: center;
    }
    `],
    template: `
    <header class="global-header">
        <nav class="menu hidden-xs">
            <a href="#" *ngFor="let link of links">{{link.name}}</a>
        </nav>
        <div class="brand-container">
            <img src="{{brand_image_url}}" alt="{{brand}} Logo"></div>
        <div class="search-container">
            <div class="search-box">
                Search Box Here
            </div>
        </div>
    </header>
    `
})
export class FenderHeader {
    brand:string = 'Fender';
    brand_image_url:string = '/images/fender_logo.png';
    links:any = [
        {
            name: 'Products'
        },
        {
            name: 'Holiday'
        },
        {
            name: 'Customize'
        },
        {
            name: 'Dealers'
        }
    ];
}