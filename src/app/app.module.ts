import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { Router, RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './components/add-product/add-product.component';
import { ProductsComponent } from './components/products/products.component';
import { FormsModule } from '@angular/forms';
import { EditProductComponent } from './components/edit-product/edit-product.component';

const appRoutes:Routes=[
  {path: '', component:ProductsComponent},
  {path: 'add', component:AddProductComponent},
  {path: 'edit/:id', component:EditProductComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    AddProductComponent,
    ProductsComponent,
    EditProductComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
