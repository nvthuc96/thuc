import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  // Lấy dữ liệu từ App
  @Input() subTotal: number;
  @Input() discount: number;
  @Output() promoCode = new EventEmitter;
  promoValue: string;
  total: number;
  tax: number;
  constructor(){}
  ngOnInit(){}
  ngOnChange(){}
  handlePromo(promoValue){
    this.promoCode.emit(promoValue);
  }
}
