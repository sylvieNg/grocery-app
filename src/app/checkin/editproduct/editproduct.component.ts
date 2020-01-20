import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'warehouse-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.scss']
})
export class EditproductComponent implements OnInit {
  productForm: FormGroup;
  submitted: boolean;
  constructor(private apiService: ApiService, private router: Router,private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.productForm = this.formBuilder.group({
      id: [''],
      barcode: [0, [Validators.required, Validators.pattern("[0-9]{12}")]],
      name: ['', Validators.required],
      description: [''],
      price: [''],
      imageUrl: [''],
      quantity: ['']
    });

    this.apiService.getSelectedProduct(this.router.url.split('/')[2]).subscribe((data: any )=>{ 
      this.productForm.controls['barcode'].setValue(data.barcode || '');
      this.productForm.controls['name'].setValue(data.name);
      this.productForm.controls['description'].setValue(data.description);
      this.productForm.controls['id'].setValue(data.id);
      this.productForm.controls['price'].setValue(data.price);
      this.productForm.controls['imageUrl'].setValue(data.imageUrl);
      this.productForm.controls['quantity'].setValue(data.quantity);
		})  
  }

  onSubmit() {
    // stop here if form is invalid
    this.submitted = this.productForm.invalid
    if (this.productForm.invalid) { return; }
    this.apiService.editProduct(this.router.url.split('/')[2], this.productForm.value).subscribe(resp => {
      debugger
      window.alert('Save successfully');
      this.router.navigate(['/']);
    });
  }

  public cancel(){
    this.router.navigate(['/']);
  }

}
