import { Component, OnInit, ViewChild } from '@angular/core';
import { NgxCsvParser, NgxCSVParserError } from 'ngx-csv-parser';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss']
})
export class UploadFileComponent implements OnInit {
    csvRecords: any = [];
    header: boolean = true;
    headerNames: Array<string> = [];
    records: Array<any> = [];
    constructor(private ngxCsvParser: NgxCsvParser) {
    }
    ngOnInit(): void {
      
    }
  
    @ViewChild('fileImportInput') fileImportInput: any;
  
    uploadListener($event: any): void {
  
      this.fileImportInput = this.fileImportInput;
      const files = $event.srcElement.files;
      this.header = (this.header as unknown as string) === 'true' || this.header === true;
  
      this.ngxCsvParser.parse(files[0], { header: this.header, delimiter: ',' })
        .pipe().subscribe({
          next: (result: any): void => {
            console.log('Result', result);
            this.headerNames = Object.keys(result[0]).filter(x => x !== '');

            localStorage.setItem('csvData',  JSON.stringify(result));
            localStorage.setItem('csvHeaders', JSON.stringify(this.headerNames));

            this.csvRecords = result;
          },
          error: (error: NgxCSVParserError): void => {
            console.log('Error', error);
          }
        });
    } 
  }
  
  // import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';
  // import { HttpClient } from '@angular/common/http';
  // import { Component, OnInit } from '@angular/core';
  
  // @Component({
  //   selector: 'app-search-result',
  //   templateUrl: './search-result.component.html',
  //   styleUrls: ['./search-result.component.scss']
  // })
  // export class SearchResultComponent implements OnInit {
  
    
  //   covidData = 'data/wp4_inventory.csv';
  
  //   constructor(private http: HttpClient) { }
  //   ngOnInit() {
  //     this.getInfo();
  //   }
  
  //   // getInfo() {
  //   //   // return this.http.get(this.covidData, {responseType: 'tex'}).subscribe(x => {
  //   //   return this.http.get(this.covidData).subscribe(x => {
  //   //     console.log('x: ', x);
  //   //   });
  //   // }
  
  //   public userArray: any[] = [];
  //   getInfo() {
  //     const { convertCSVToArray } = require('convert-csv-to-array');
  //     const converter = require('convert-csv-to-array');  
  //     // const array = convertCSVToArray(data, options);
  //     this.http.get('assets/wp4_inventory.csv', {responseType: 'text'}).subscribe(
  //       x => {
  //         const arrayofArrays = convertCSVToArray(x, {
  //           type: 'object',
  //           separator: ',', // use the separator you use in your csv (e.g. '\t', ',', ';' ...)
  //         });
  //       }
  //     );
  //     // .subscribe(
  //     //     data => {
  //     //         let csvToRowArray = data.split("\n");
  //     //         for (let index = 1; index < csvToRowArray.length - 1; index++) {
  //     //           let row = csvToRowArray[index].split(",");
  //     //           this.userArray.push(new User( parseInt( row[0], 10), row[1], row[2].trim()));
  //     //         }
  //     //         console.log(this.userArray);
  //     //     },
  //     //     error => {
  //     //         console.log(error);
  //     //     }
  //     // );
  //   }
  
  //   // modules = [ClientSideRowModelModule];
  //   // columnDefs = [
  //   //       {headerName: 'Make', field: 'make'},
  //   //       {headerName: 'Model', field: 'model'},
  //   //       {headerName: 'Price', field: 'price'}
  //   //   ];
  
  //   //   rowData = [
  //   //       {make: 'Toyota', model: 'Celica', price: 35000},
  //   //       {make: 'Ford', model: 'Mondeo', price: 32000},
  //   //       {make: 'Ford', model: 'Mondeo', price: 32000},
  //   //       {make: 'Ford', model: 'Mondeo', price: 32000},
  //   //       {make: 'Ford', model: 'Mondeo', price: 32000},
  //   //       {make: 'Ford', model: 'Mondeo', price: 32000},
  //   //       {make: 'Ford', model: 'Mondeo', price: 32000},
  //   //       {make: 'Ford', model: 'Mondeo', price: 32000},
  //   //       {make: 'Ford', model: 'Mondeo', price: 32000},
  //   //       {make: 'Ford', model: 'Mondeo', price: 32000},
  //   //       {make: 'Ford', model: 'Mondeo', price: 32000},
  //   //       {make: 'Ford', model: 'Mondeo', price: 32000},
  //   //       {make: 'Ford', model: 'Mondeo', price: 32000},
  //   //       {make: 'Ford', model: 'Mondeo', price: 32000},
  //   //       {make: 'Ford', model: 'Mondeo', price: 32000},
  //   //       {make: 'Ford', model: 'Mondeo', price: 32000},
  //   //       {make: 'Ford', model: 'Mondeo', price: 32000},
  //   //       {make: 'Ford', model: 'Mondeo', price: 32000},
  //   //       {make: 'Ford', model: 'Mondeo', price: 32000},
  //   //       {make: 'Ford', model: 'Mondeo', price: 32000},
  //   //       {make: 'Ford', model: 'Mondeo', price: 32000},
  //   //       {make: 'Ford', model: 'Mondeo', price: 32000},
  //   //       {make: 'Porsche', model: 'Boxter', price: 72000}
  //   //   ];
  //   // constructor() { }
  
  //   // ngOnInit() {
  //   // }
  
  
  // }
   
