import { Component } from "@angular/core";

@Component({
    selector: 'fender-footer',
    styles: [`
    .global-footer {
        background-color: white;
        color: red;
        font-size: 14px;
        margin-top: 64px;
        padding: 0 16px 64px;
        text-align: center;
        width: 100%;
    }
    `],
    template: `
    <footer class="global-footer">
        Fender Footer
    </footer>
    `
})
export class FenderFooter {

}