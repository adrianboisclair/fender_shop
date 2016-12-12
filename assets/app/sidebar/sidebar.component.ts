import { Component } from "@angular/core";

@Component({
    selector: 'fender-sidebar',
    styles: [`
    .nav-pills>li.active>a,
    .nav-pills>li.active>a:focus,
    .nav-pills>li.active>a:hover {
        background-color: #d12f27;
    }
    `],
    template: `
<aside class="sidebar col-sm-2">
    <nav class="navbar navbar-default">
        <div class="container-fluid">
            <div class="sidebar-header">
                <h4>Fender Categories</h4>
            </div>
        </div>
    </nav>
    <nav>
        <ul class="nav nav-pills nav-stacked">
            <li routerLinkActive="active"><a [routerLink]="['/category/electric_guitars']">Electric Guitars</a></li>
            <li routerLinkActive="active"><a [routerLink]="['/category/bass_guitars']">Bass Guitars</a></li>
            <li routerLinkActive="active"><a [routerLink]="['/category/mounting_hardware']">Mounting Hardware</a></li>
            <li routerLinkActive="active"><a [routerLink]="['/category/miscellaneous_parts']">Miscellaneous Parts</a></li>
            <li routerLinkActive="active"><a [routerLink]="['/category/plates_and_metal_covers']">Plates and Covers</a></li>
            <li routerLinkActive="active"><a [routerLink]="['/category/control_knobs']">Control Knobs</a></li>
            <li routerLinkActive="active"><a [routerLink]="['/category/pickguards_backplates']">Pickgards and Plates</a></li>
        </ul>
    </nav>
</aside>
    `
})
export class SidebarComponent {

}