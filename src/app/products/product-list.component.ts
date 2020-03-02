import { Component } from '@angular/core';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
    PageTitle: string = 'Product List';
    products: any[] = [
    {
        "productId": 2,
        "productName": "Garden Cart",
        "productCode": "GDN-0023",
        "releaseDate": "March 18 2019",
        "description": "15 gallon capacity rolling Garden",
        "price": 32.99,
        "starRating": 4.0,
        "imageUrl": "assets/images/garden-cart.jpg"
    },
    {
        "productId": 4,
        "productName": "Hammer",
        "productCode": "TBX-0048",
        "releaseDate": "May 21 2019",
        "description": "Curved claw steel hammer",
        "price": 92.3,
        "starRating": 4.8,
        "imageUrl": "assets/images/hammer.jpg"
    }
    ];
}

