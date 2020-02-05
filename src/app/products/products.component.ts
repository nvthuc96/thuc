import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Product } from "../models/product.model";
// import { <a [routerLink]="[ '/products', routeParam ]">{{ product.name }}</a>}

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.css"]
})
export class ProductsComponent implements OnInit {
  // Nhận dữ liệu từ component cha (qua attribute)
  @Input() productList: Product[];

  // Truyền dữ liệu sang component cha (qua event)
  @Output() updateQuantity = new EventEmitter();
  @Output() removePr = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  removeProduct(id: string) {
    let answer = confirm("Ban dong y xoa san pham");

    if (answer) {
      const index = this.productList.findIndex(product => product.id === id);
      console.log(index)

      if (index !== -1) {
        this.removePr.emit(id);
      }
    } else {
      alert("ban chua xoa san pham");
    }
  }

  changeQuantity(quantity: string, id: string) {
    // Truyền dữ liệu ra ngoài App
    // TODO: Bổ sung hàm cập nhật số lượng sản phẩm
    this.updateQuantity.emit({ quantity, id });
  }
}
