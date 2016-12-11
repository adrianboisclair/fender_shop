import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from "@angular/http";

import { AppComponent } from "./app.component";
import { ProductComponent } from "./product/product.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { FenderContent } from "./content/content.component";
import { FenderHeader } from "./header/header.component";
import { FenderFooter } from "./footer/footer.component";
import { routing } from "./app.routing";

@NgModule({
    declarations: [
        AppComponent,
        ProductComponent,
        FenderContent,
        FenderHeader,
        FenderFooter,
        SidebarComponent
    ],
    imports: [
        BrowserModule,
        routing,
        HttpModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule {

}
