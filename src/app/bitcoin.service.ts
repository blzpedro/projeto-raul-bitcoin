import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

interface Response {
  time: {
    updated: string;
  };
  bpi: {
    [key in "USD" | "BRL"]: {
      code: string;
      rate_float: number;
      rate: string;
    }
  };
}

interface PriceUpdate {
  timestamp: Date;
  USD: number;
  BRL: number;
}

@Injectable()
export class BitcoinService {
  currentPrice: Response;
  lastUpdate: Date;
  firstPrice: Number;
  lastPrice: Number;
  updateList: Array<PriceUpdate> = [];
  resultCompare: String;
  constructor(private http: HttpClient) {}

  getFirstValue() {
    this.http
      .get<Response>("https://api.coindesk.com/v1/bpi/currentprice/BRL.json")
      .subscribe(data => {
        this.firstPrice = data.bpi.BRL.rate_float;
      });
  }

  updateValues() {
    this.http
      .get<Response>("https://api.coindesk.com/v1/bpi/currentprice/BRL.json")
      .subscribe(data => {
        this.lastUpdate = new Date();
        this.currentPrice = data;
      });
  }

  updateInterval() {
    setInterval(() => {
      this.http
        .get<Response>("https://api.coindesk.com/v1/bpi/currentprice/BRL.json")
        .subscribe(data => {
          this.lastPrice = data.bpi.BRL.rate_float;
          this.updateList.push({
            timestamp: new Date(),
            USD: data.bpi.USD.rate_float,
            BRL: data.bpi.BRL.rate_float
          });
        });
    }, 60000);
  }

  compareValues() {
    setInterval(() => {
      if (this.lastPrice > this.firstPrice) {
        this.resultCompare = "maior comparado ao valor inicial";
      } else if (this.lastPrice < this.firstPrice) {
        this.resultCompare = "menor comparado ao valor inicial";
      } else {
        this.resultCompare = "igual comparado ao valor inicial";
      }
    }, 60000);
  }
}
