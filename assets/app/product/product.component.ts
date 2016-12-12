import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { URLSearchParams } from '@angular/http';
import { Product } from "./product.model";
import { ProductService } from "./product.service";
import {EventEmitter} from "events";
import {Subscription} from "rxjs/Subscription";

@Component({
    selector: 'app-view',
    styleUrls: ['./product.component.css'],
    templateUrl: './product.component.html'
})
export class ProductComponent implements OnInit, OnDestroy {

    private subscription:Subscription;
    category:string = 'guitars';
    products:any;
    rel:any;
    sub:any;

    constructor(private productService:ProductService, private route:ActivatedRoute) { }

    ngOnInit() {
        this.getProductsByCategory();
    }

    getProductsByCategory() {
        this.sub = this.route.params.subscribe(params => {
            let category = params['category'];
            this.category = category;
            this.productService.getProductsByCategory(category)
                .subscribe(
                    result => {
                        this.products = result;
                        return result;
                    }
                );
        });
    }

    getCategory() {
        return this.category.replace(/_/g, " "); // Return properly spaced category name
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}