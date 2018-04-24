import { Component, OnInit } from '@angular/core';
import { WebapiService } from '../server/webapi.service';



@Component({
  selector: 'app-coupns',
  templateUrl: './coupns.component.html',
  styleUrls: ['./coupns.component.css']
})
export class CoupnsComponent implements OnInit {
 posts:Post[];
  userClaims: any;
  maxPrice :number; 
  constructor(private webapiService: WebapiService) { }
   ngOnInit() {
    this.maxPrice=12.00;
    this.webapiService.getPost().subscribe((post)=>{
      console.log(post);
      this.posts=post; 
  });
  this.webapiService.getcoupons().subscribe((post)=>{
    console.log(post);
    // this.posts=post; 
});
  }
  // coupns(){
  //   this.webapiService.getMaxPriceFromCopany(10.00).subscribe((data: any) => {
  //     this.userClaims = data;

  //   });;
  // }
}
interface Post{
  id:number,
  title:string,
  body:string,
  userId:number,
  dia:number
}