import { Http, Response, Headers } from "@angular/http";
import { Injectable, EventEmitter } from "@angular/core";
import 'rxjs/Rx';
import { Observable } from "rxjs";

import { Product } from "./product.model";
import {toArray} from "rxjs/operator/toArray";

@Injectable()
export class ProductService {
    private products:any = [];

    constructor(private http:Http) {}

    getProductsByCategory(category:string) {
        return this.http.get('https://fendershop.herokuapp.com/products/category/' + category)
            .map((response:Response) => {
                const products = response.json().products;
                this.products = products;
                return products;
            })
            .catch((error:Response) => Observable.throw(error.json()));
    }
}