import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClientHome } from '../httpHome.service';

@Component({
  selector: 'app-text-analysis',
  templateUrl: './text-analysis.component.html',
  styleUrls: ['./text-analysis.component.css'],
  providers: [HttpClientHome]
})
export class TextAnalysisComponent implements OnInit {

  constructor(private httpClient: HttpClientHome) { }

  ngOnInit() {
  }

  getText(form: NgForm) {
    //console.log(form.value.text);
    this.httpClient.getData("settext/?text=" + form.value.text).subscribe();
  }

}
