import { Component, OnInit } from '@angular/core';
import { IProduct } from './products';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
    PageTitle: string = 'Product List';
    imageWidth: number = 100;
    imageMargin: number = 2;
    showImage: boolean = false;
    _listFilter: string;
    get listFilter(): string {
        return this._listFilter;
    }
    set listFilter(value: string) {
        this._listFilter = value;
        this.fliteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }
    fliteredProducts: IProduct[];
    products: IProduct[] = [
    {
        "productId": 2,
        "productName": "Garden Cart",
        "productCode": "GDN-0023",
        "releaseDate": "March 18 2019",
        "description": "15 gallon capacity rolling Garden",
        "price": 32.99,
        "starRating": 3.0,
        "imageUrl": "assets/images/garden-cart.jpg"
    },
    {
        "productId": 4,
        "productName": "Hammer",
        "productCode": "TBX-0048",
        "releaseDate": "May 21 2019",
        "description": "Curved claw steel hammer",
        "price": 9.3,
        "starRating": 1.8,
        "imageUrl": "assets/images/hammer.jpg"
    }
    ];
    constructor() {
        this.fliteredProducts = this.products;
        this.listFilter = 'Cart';
    }
    onRatingClicked(message: string): void {
        this.PageTitle = 'Product List: ' + message;
    }
    toggleImage(): void {
        this.showImage = !this.showImage;
    }
    ngOnInit(): void {
        console.log('hey u started');
    }
    performFilter(filterBy: string): IProduct[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product: IProduct) =>
        product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }

}

