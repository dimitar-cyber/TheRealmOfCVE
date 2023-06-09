import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {FrontpageComponent} from './frontpage/frontpage.component';
import {CvesComponent} from './cves/cves.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {ReactiveFormsModule} from "@angular/forms";
import { CveComponent } from './cve/cve.component';

@NgModule({
  declarations: [
    AppComponent,
    FrontpageComponent,
    CvesComponent,
    NotFoundComponent,
    CveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
