import { Component } from "@angular/core";

@Component({
    selector: 'fender-footer',
    styles: [`
    .global-footer {
        background-color: #f9f9f9;
        color: red;
        font-size: 14px;
        margin-top: 64px;
        padding: 30px;
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