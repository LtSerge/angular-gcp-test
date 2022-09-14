import { Component, OnInit, ViewChild } from '@angular/core';
import { CellClickedEvent, ColDef } from 'ag-grid-community';
import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { AgGridAngular } from 'ag-grid-angular';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
})
export class GridComponent implements OnInit {
  rowData: any[] = [
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxster', price: 72000 },
  ];

  colDefs: ColDef[] = [
    { field: 'make', rowGroup: true },
    { field: 'model' },
    { field: 'price' },
  ];

  defaultColDef: ColDef = {
    sortable: true,
    filter: true,
  };

  rowData$?: Observable<any[]>;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.rowData$ = this.http.get<any[]>(
      'https://www.ag-grid.com/example-assets/row-data.json'
    );
  }

  onCellClicked(event: CellClickedEvent) {
    console.log(event);
  }

  @ViewChild(AgGridAngular) agGrid!: AgGridAngular;

  clearSelection() {
    this.agGrid.api.deselectAll();
  }
}
