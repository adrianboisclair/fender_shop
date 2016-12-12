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
            font-size: 12px;
            text-align: right;
            width: 19%;
        }
        img {
            display: block;
            height: auto;
            margin: 0 auto;
            width: 100%;
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
        .product-image-container {
            min-height: 200px;
        }
        .product-info {
            background: white;
            text-align: left;
        }
        .product-wrapper {
            min-height: 400px;
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