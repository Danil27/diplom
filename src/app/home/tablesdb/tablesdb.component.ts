import { Component, OnInit } from '@angular/core';
import { HttpClientHome } from '../httpHome.service';

@Component({
  selector: 'app-tablesdb',
  templateUrl: './tablesdb.component.html',
  styleUrls: ['./tablesdb.component.css'],
  providers: [HttpClientHome]
})
export class TablesdbComponent implements OnInit {

  buttonVisible: boolean = false;
  columnNames: any[] = [];
  tableData: any = {};
  tablesName: String[] = [
    "answers", "check", "checklist", "questions",
     "subdvision", "users", "violation"
  ];
  constructor(private homeService: HttpClientHome) { }

  setTableBut(tablename: string) {

    console.log("table: " + tablename);
    this.homeService.getData("tabledb?tname=" + tablename).subscribe((resp: any) => {
      //console.log(resp);
      this.columnNames = [];
      this.tableData = {};

      this.columnNames = resp.fields;
      this.tableData = resp.results;
      this.buttonVisible = true;

    });
  }

  getIndexRowTable(i: any) {
    console.log(i);
  }
  ngOnInit() {
  }

}
