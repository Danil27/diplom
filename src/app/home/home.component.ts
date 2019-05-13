import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from './home.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [HomeService]
})
export class HomeComponent implements OnInit {
  //value: any;

  constructor(private router: Router,
    private homeService: HomeService
  ) { }

  value: string;
  ngOnInit() {
   /* this.homeService.getData("home").subscribe(
      value => {
        console.log(value)
      });*/
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

}
