import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from 'src/app/products.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  constructor(private route:ActivatedRoute, private productService:ProductsService, private router:Router) { }

  public id;
  public name;
  public price;
  public quantity;
  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    console.log(this.id);
    this.productService.getProduct(this.id).subscribe((response)=>{
      this.name=response.name;
      this.price=response.price;
      this.quantity=response.quantity;

    });
  }

  onSubmit(f:NgForm){
    console.log("UPDATE");
    this.productService.updateProduct(this.id,f.form.value).subscribe((response)=>{
      console.log(response);
      this.router.navigate(["/"]);
    })

  }

}
