import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products = [
    { id: 1, name: 'Custom T-Shirt', description: 'Personalized with names, designs, or messages', imageUrl: '/assets/custom-tshirt.jpg' },
    { id: 2, name: 'Custom Keychains', description: 'Perfect for any occasion, engraved with custom details', imageUrl: '/assets/custom-keychain.jpg' },
    { id: 3, name: 'Personalized Notebooks', description: 'Customizable with names, dates, or messages', imageUrl: '/assets/custom-notebook.jpg' },
    { id: 4, name: 'Custom Tote Bags', description: 'Perfect for carrying your essentials with custom designs', imageUrl: '/assets/custom-tote.jpg' }
  ];

  selectedProduct = null;

  selectProduct(product: any) {
    this.selectedProduct = product;
    console.log('Selected Product:', product);
  }
}
