import { Component, OnInit } from "@angular/core";
import { parse } from 'querystring';
import { BitcoinService } from "../bitcoin.service";

@Component({
  selector: "app-minhacarteira",
  templateUrl: "./minhacarteira.component.html",
  styleUrls: ["./minhacarteira.component.css"]
})
export class MinhacarteiraComponent implements OnInit {
  constructor(public bitcoinService: BitcoinService) {}

  ngOnInit() {}

  getCurrentPrice() {
    return this.bitcoinService.currentPrice;
  }

  comprar() {
    const value = this.bitcoinService.currentPrice.bpi.BRL.rate.replace(
      ",",
      ""
    );
    const actualValue = document
      .getElementById("myValue")
      .innerHTML.replace(",", "");

    const finalValue = parseFloat(value) + parseFloat(actualValue);
    document.getElementById("myValue").innerHTML = finalValue
      .toFixed(2)
      .toString();
  }

  vender() {
    const value = this.bitcoinService.currentPrice.bpi.BRL.rate.replace(
      ",",
      ""
    );
    const actualValue = document
      .getElementById("myValue")
      .innerHTML.replace(",", "");

    if(parseFloat(actualValue) <= 0){
      alert('Não é possível vender pois você possui R$ 0 em sua carteira')
      document.getElementById("myValue").innerHTML = '0.00'
    } else {
      const finalValue = parseFloat(actualValue) - parseFloat(value);
      document.getElementById("myValue").innerHTML = finalValue
        .toFixed(2)
        .toString();
    }
  }
}
