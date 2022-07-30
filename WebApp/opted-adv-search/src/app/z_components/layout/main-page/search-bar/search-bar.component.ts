import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SpinnerService } from 'src/app/Services/spinner.service';
import { FormBuilder,FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  csvData: any;
  csvHeaders: any;
  countryList: Array<string> = [];
  form : FormGroup = new FormGroup({});
  constructor(private spinnerService: SpinnerService,
              private _router: Router,
              private fb: FormBuilder
    ) {
      this.form = fb.group({
        countryNames: ['',[Validators.required]],
       })
     }

  ngOnInit() {
    this.getSearchDataList();
  }
  

  getSearchDataList(){
    this.spinnerService.Show();
    this.csvData = localStorage.getItem('csvData');
    this.csvHeaders = localStorage.getItem('csvHeaders');
    if(this.csvData) {
      const csvDataList: any[] = JSON.parse(this.csvData);
      csvDataList.forEach(data => {
        if(data['country.name'] &&  data['country.name'] !== '') {
          const lists: any[] = data['country.name'].split(',');
          // console.log(lists);
          
          lists.forEach(item => {
            item = item.trim();
            const index = this.countryList.findIndex(x => x.toLowerCase() === item.toLowerCase());
            if(index === -1) {
              this.countryList.push(item);
            }
          });
        }
      });
    } 
    // else {
    //   this._router.navigate(['upload']);
    // }
    // setTimeout(() => {
    //   this.spinnerService.Hide();
    // }, 1000);
  }

}
