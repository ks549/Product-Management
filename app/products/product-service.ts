import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { IProduct } from './product';

@Injectable()
export class ProductService {
    
    constructor(private _http : Http) {
        
    }
    getProducts() : Observable<IProduct[]> {
        return this._http.get('api/products/products.json')
                .map((response: Response) => <IProduct[]>response.json());
    }
}
