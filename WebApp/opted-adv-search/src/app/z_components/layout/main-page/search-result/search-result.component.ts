import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {

  // modules = [ClientSideRowModelModule];
  columnDefs = [
        {headerName: 'Make', field: 'make', width: 150, resizable: true },
        {headerName: 'Model', field: 'model', width: 150, resizable: true },
        {headerName: 'Price', field: 'price', width: 150, resizable: true }
    ];

    rowData = [
        {make: 'Toyota', model: 'Celica', price: 35000},
        {make: 'Ford', model: 'Mondeo', price: 32000},
        {make: 'Porsche', model: 'Boxter', price: 72000}
    ];
  constructor() { }

  ngOnInit() {

  }

}
 