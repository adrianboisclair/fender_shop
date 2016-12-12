import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { URLSearchParams } from '@angular/http';
import { Product } from "./product.model";
import { ProductService } from "./product.service";
import {EventEmitter} from "events";
import {Subscription} from "rxjs/Subscription";

@Component({
    selector: 'app-view',
    templateUrl: './product.component.html',
    styles: [`
        .panel-category {
            font-weight: bold;
            text-transform: capitalize;
        }
        .config {
            display: inline-block;
            text-align: right;
            font-size: 12px;
            width: 19%;
        }
        img {
            height: auto;
            width: 100%;
            display: block;
            margin: 0 auto;
        }
        .related-items {
            padding: 0;
        }
        .product-wrapper {
            min-height: 400px;
        }
        .product-container {
            align-items: center;
            background-color: #f9f9f9;
            display: flex;
            flex-direction: column;
            justify-content: center;
            margin-bottom: 16px;
            text-align: center;
        }
        .product {
            min-height: 200px;
        }
    `]
})
export class ProductComponent implements OnInit, OnDestroy {

    private subscription:Subscription;
    products:any;
    category:string = 'guitars';
    sub:any;
    rel:any;

    constructor(private productService:ProductService, private route:ActivatedRoute) {
    }

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