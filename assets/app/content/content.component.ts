import { Component } from "@angular/core";

@Component({
    selector: 'fender-content',
    template: `
    <main class="col-sm-8 col-md-10">
        <router-outlet></router-outlet>
    </main>`,
    styles: [`
    main {
        min-height: 100vh;
    }
    `]
})
export class FenderContent {}