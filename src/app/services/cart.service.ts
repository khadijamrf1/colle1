import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private produits = [
    { id: 1, name: 'Jacket cuir', price: 1000, image: 'https://i.pinimg.com/originals/98/00/b6/9800b6dc9703d6a9c1ef8c52673e8a3d.jpg' },
    { id: 2, name: 'Monteau femme', price: 3400, image: 'https://www.twinset.com/dw/image/v2/BCKJ_PRD/on/demandware.static/-/Sites-master-catalog/default/dwefbd149c/images/TwinSet/Images/Catalog/202TP2240-00775-04.JPG?sw=930' },
    { id: 3, name: 'Ensemble', price: 5400, image: 'https://www.taaora.fr/blog/wp-content/uploads/2022/09/mango-femme-automne-hiver-2022-2023-4-683x1024.jpg' },
    {id:4,name:'robe', price:4900 , image:"https://belleandchic.com/wp-content/uploads/2021/11/comment-porter-la-robe-en-hiver-1.jpg"},
    {id:5,name:'Tricot', price:600 , image:"https://i.pinimg.com/originals/23/62/11/236211c7d8e119894412c5382d86bbd6.jpg"},
    {id:6,name:'chemise', price:400 , image:"https://fac.img.pmdstatic.net/fit/https.3A.2F.2Fi.2Epmdstatic.2Enet.2Ffac.2F2022.2F08.2F25.2Fb949e8cb-4c9f-4198-88ce-2b5bec532cdd.2Ejpeg/900x600/quality/65/blouses-et-chemises-tendance-romantique.jpg"},



  ];

  constructor() { }
  private cartItems: any[] = [];
  getProducts() {
    return this.produits;
  }

  addToCart(product: any) {
    const existingProduct = this.cartItems.find((item) => item.id === product.id);
    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      this.cartItems.push({ ...product, quantity: 1 });
    }
  }

  getCartItems() {
    return this.cartItems;
  }

  removeFromCart(productId: number) {
    this.cartItems = this.cartItems.filter((item) => item.id !== productId);
  }

  getTotalPrice() {
    return this.cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }
}


