import { Component, VERSION } from "@angular/core";
import { BitcoinService } from "./bitcoin.service";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "P1";

  constructor(public bitcoinService: BitcoinService) {}

  ngOnInit() {
    this.updateValues();
    this.initial();
    this.update();
    this.compare();
  }

  getInitialValue() {
    return this.bitcoinService.firstPrice;
  }

  getLastPrice() {
    return this.bitcoinService.lastPrice;
  }

  getCompare() {
    return this.bitcoinService.resultCompare;
  }

  initial() {
    this.bitcoinService.getFirstValue();
  }

  updateValues() {
    this.bitcoinService.updateValues();
  }

  update() {
    this.bitcoinService.updateInterval();
  }

  compare() {
    this.bitcoinService.compareValues();
  }
}
