import { Component, OnInit } from '@angular/core';
import { IProduct } from './products';
import { ProductService } from './product.service';

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
    errorMessage: string;
    get listFilter(): string {
        return this._listFilter;
    }
    set listFilter(value: string) {
        this._listFilter = value;
        this.fliteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }
    fliteredProducts: IProduct[];
    products: IProduct[] = [];
    constructor(private ProductService: ProductService) {
    }
    onRatingClicked(message: string): void {
        this.PageTitle = 'Product List: ' + message;
    }
    toggleImage(): void {
        this.showImage = !this.showImage;
    }
    
    performFilter(filterBy: string): IProduct[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product: IProduct) =>
        product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }

    ngOnInit(): void {
         this.ProductService.getProducts().subscribe({
             next: products => {
                this.products = products
        this.fliteredProducts = this.products;
             },
             error: err=> this.errorMessage = err
         });
    }

}

