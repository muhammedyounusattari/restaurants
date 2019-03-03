import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { MyFilterPipe } from './filter';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,MyFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,NgxPaginationModule,PaginationModule,
    AngularFontAwesomeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
