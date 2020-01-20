import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GeneralModule } from './general/general.module';
import { CheckinComponent } from './checkin/checkin.component';
import { HttpService } from './shared/providers/http.service';
import { FilterPipe } from './filter.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditproductComponent } from './checkin/editproduct/editproduct.component';

@NgModule({
  declarations: [
    AppComponent,
    CheckinComponent,
    FilterPipe,
    EditproductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    GeneralModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
