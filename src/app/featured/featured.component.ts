import { Component } from '@angular/core';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.css']
})
export class FeaturedComponent {
  featuredProducts = [
    { id: 1, name: 'Personalized Mug', description: 'Custom printed with names, dates, or designs', imageUrl: '/assets/custom-mug.jpg' },
    { id: 2, name: 'Engraved Flask', description: 'Stainless steel flasks engraved with custom messages', imageUrl: '/assets/custom-flask.jpg' }
  ];

  selectedProduct = null;

  selectProduct(product: any) {
    this.selectedProduct = product;
    console.log('Selected Product:', product);
  }
}
