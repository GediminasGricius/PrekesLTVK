import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/products.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  public name;
  public price;
  public quantity;

  constructor(private productsService:ProductsService, private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm): void{
    console.log(form.form.value);
    this.productsService.addProduct(form.form.value).subscribe((response)=>{
      this.name="";
      this.price="";
      this.quantity="";
      this.router.navigate(["/"]);
    });
  }

}
