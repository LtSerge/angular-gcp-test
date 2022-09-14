import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GridComponent } from './grid/grid.component';

import { HttpClientModule } from '@angular/common/http';

import { AgGridModule } from 'ag-grid-angular';

import 'ag-grid-enterprise';

@NgModule({
  declarations: [AppComponent, HomeComponent, GridComponent],
  imports: [BrowserModule, AppRoutingModule, AgGridModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
