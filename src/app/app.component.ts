import { Component, OnInit } from "@angular/core";
import { Product } from "./models/product.model";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  products: Product[] = [
    {
      id: "1",
      name: "Product 1",
      description: "Description for product 1",
      price: 3000,
      img: "https://via.placeholder.com/200x150",
      quantity: 2
    },
    {
      id: "2",
      name: "Product 2",
      description: "Description for product 2",
      price: 2000,
      img: "https://via.placeholder.com/200x150",
      quantity: 1
    }
  ];

  itemNumbers = 0;
  subTotal = 0;
  discount: number;
  promoCodes = [
    {
      code: 'THUC',
      discount: 0.2
    },
    { code: 'TET',
    discount: 0.3
  }];

  ngOnInit() {
    this.clcSum();
  }

  updateQuantity(newProduct) {
    // TODO: Cập nhật product dựa theo payload
    let index = this.products.findIndex(product => product.id === newProduct.id);
    // Cập nhật lại tổng số lượng sản phẩm và tổng tiền
    if (index !== -1){
      this.products[index].quantity = Number(newProduct.quantity)
    }
    this.clcSum();
  }

  removeProduct(id) {
    // Xóa sản phẩm
    let index = this.products.findIndex(product => product.id === id);
    // Cập nhật lại tổng số lượng sản phẩm và tổng tiền
    if (index !== -1){
      this.products.splice(index,1)
    }
    this.clcSum();
  }
  handlePromoCode(promoValue){
    let found = this.promoCodes.find(
      promoCod => promoCod.code === promoValue
    );
    if ( found && found.code == promoValue) {
      this.discount = this.subTotal * found.discount;
      alert ("Code was applied");
    } else {
      this.clcSum();
      alert("Code not valid");
    }
  }

  clcSum() {
    this.itemNumbers = 0;
    this.subTotal = 0;
    this.discount = 0;

    for (let product of this.products) {
      this.itemNumbers += product.quantity;
      this.subTotal += product.price * product.quantity;
    }
  }
}
