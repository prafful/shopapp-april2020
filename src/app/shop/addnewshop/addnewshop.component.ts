import { Component, OnInit } from '@angular/core';
import { ShopService } from '../service/shop.service';

@Component({
  selector: 'app-addnewshop',
  templateUrl: './addnewshop.component.html',
  styleUrls: ['./addnewshop.component.css']
})
export class AddnewshopComponent implements OnInit {

  newShop: any ={}
  shopOwner:string='Shop Owner'
  shopName:string=''
  address1:string=''
  address2:string=''
  city:string=''
  state:string=''
  pincode:string=''
  services1:string=''
  services2:string=''
  description:string=''
  shopPicture:string=''

  constructor(private shopService: ShopService) { }

  ngOnInit(): void {
  }

  addNewShop = (shop) =>{
    console.log(shop);
    this.shopService.addNewShop(shop)
                    .subscribe(response =>{
                      console.log(response);
                      this.newShop ={}
                      this.shopName=''
                      this.address1=''
                      this.address2=''
                      this.city=''
                      this.state=''
                      this.pincode=''
                      this.services1=''
                      this.services2=''
                      this.description=''
                      this.shopPicture=''
                    }, error=>{
                      console.log(error);
                    })
  }

  resetShopForm = () =>{
    this.newShop ={}
    this.shopName=''
    this.address1=''
    this.address2=''
    this.city=''
    this.state=''
    this.pincode=''
    this.services1=''
    this.services2=''
    this.description=''
    this.shopPicture=''
  }




}
