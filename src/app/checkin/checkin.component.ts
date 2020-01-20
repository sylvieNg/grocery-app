import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'warehouse-checkin',
  templateUrl: './checkin.component.html',
  styleUrls: ['./checkin.component.scss']
})
export class CheckinComponent implements OnInit {

  products = [];
	constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit() {
    this.apiService.get().subscribe((data: any[])=>{  
			this.products = data;  
		})  
  }

  public edit(product){
    this.router.navigate([`/edit/${product.id}`]);
  }

}
