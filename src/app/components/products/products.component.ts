import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public products;
  constructor(private productService:ProductsService, private router:Router) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(
      (response)=>{
        const products=[];
        for (const key in response){
          products.push({...response[key], id:key});
        }
        this.products=products;
        console.log(products)
      }
    );

  }

  onDelete(id){
    this.productService.deleteProduct(id).subscribe((response)=>{
      console.log(response);
      this.ngOnInit();
    });
  }

  onEdit(id){
    this.router.navigate(["/edit",id]);
  }

}
