import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from './home.service';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [HomeService, LoginService]
})
export class HomeComponent implements OnInit {

  columnNames: any[] = [];
  tableData: any = {};
  tablesName: String[] = [
    "answers", "check", "checklist", "employees", "employeesr_role", "questions",
    "roles", "subdvision", "subject", "users", "violation"
  ];

  constructor(private router: Router,
    private homeService: HomeService,
    private loginService: LoginService
  ) { }

  setTableBut(tablename: string) {

    console.log("table: " + tablename);
    this.homeService.getData("tabledb?tname=" + tablename).subscribe((resp: any) => {
      console.log(resp);
      this.columnNames = [];
      this.tableData = {};
      /*for (var key in resp.fields) {
        this.columnNames.push(resp.fields[key].name);
      }*/
      this.columnNames = resp.fields;
      this.tableData = resp.results;

    });
  }

  ngOnInit() {
  }

  logout() {
    this.loginService.logout();
    this.router.navigate(['/login']);
  }

}
