import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-tablesdb',
  templateUrl: './tablesdb.component.html',
  styleUrls: ['./tablesdb.component.css'],
  providers: [HomeService]
})
export class TablesdbComponent implements OnInit {

  columnNames: any[] = [];
  tableData: any = {};
  tablesName: String[] = [
    "answers", "check", "checklist", "employees", "employeesr_role", "questions",
    "roles", "subdvision", "subject", "users", "violation"
  ];
  constructor(private homeService: HomeService) { }

  setTableBut(tablename: string) {

    console.log("table: " + tablename);
    this.homeService.getData("tabledb?tname=" + tablename).subscribe((resp: any) => {
      console.log(resp);
      this.columnNames = [];
      this.tableData = {};

      this.columnNames = resp.fields;
      this.tableData = resp.results;

    });
  }

  getIndexRowTable(i: any) {
    console.log(i);
  }
  ngOnInit() {
  }

}
