import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { BitcoinComponent } from "./bitcoin/bitcoin.component";
import { MinhacarteiraComponent } from "./minhacarteira/minhacarteira.component";
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { HomeComponent } from "./home/home.component";
import { BitcoinService } from './bitcoin.service';
import { APP_BASE_HREF } from '@angular/common';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: "", component: HomeComponent },
      { path: "minha-carteira", component: MinhacarteiraComponent },
      { path: "bitcoin", component: BitcoinComponent }
    ]),
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    BitcoinComponent,
    MinhacarteiraComponent,
    HomeComponent
  ],
  bootstrap: [AppComponent],
  providers: [BitcoinService, {provide: APP_BASE_HREF, useValue : '/'}]
})
export class AppModule {}
