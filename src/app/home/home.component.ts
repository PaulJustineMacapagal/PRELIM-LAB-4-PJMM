import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  featuredGifts = [
    { id: 1, name: 'Personalized T-Shirt', description: 'Custom printed with your message or design', imageUrl: '/assets/tshirt.jpg' },
    { id: 2, name: 'Engraved Mug', description: 'Customized with names, dates, or messages', imageUrl: '/assets/mug.jpg' },
    { id: 3, name: 'Custom Keychains', description: 'Perfectly personalized keychains for every occasion', imageUrl: '/assets/keychain.jpg' }
  ];

  selectedGift = null;

  selectGift(gift: any) {
    this.selectedGift = gift;
    console.log('Selected Gift:', gift);
    
  }
}
