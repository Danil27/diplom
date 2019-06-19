import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-text-analysis',
  templateUrl: './text-analysis.component.html',
  styleUrls: ['./text-analysis.component.css']
})
export class TextAnalysisComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  getText(form: NgForm) {
    console.log(form.value);
  }

}
