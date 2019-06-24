import { Component, OnInit, Input } from '@angular/core';
import { HttpClientHome } from '../httpHome.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.css'],
  providers: [HttpClientHome]
})
export class ChecklistComponent implements OnInit {
  checkListInfo: any;
  answerList: any[] = [];
  questionlist: any;
  checkListId: number;

  constructor(private httpClientHome: HttpClientHome) { }

  ngOnInit() {
    this.httpClientHome.getData("check").subscribe((resp: any) => {
      this.checkListInfo = resp;
    });
  }

  formationCheckList() {
    var questions: any[] = [];
    this.httpClientHome.getData("checkData").subscribe((resp: any) => {
      questions = resp.questions;
      for (var i = 0; i < questions.length; i++) {
        if (questions[i].checklist_id != this.checkListId) {
          questions.splice(i, 1);
        }
      }
      this.questionlist = questions;
    });
  }

  setCheckListName(id: any) {
    this.checkListId = id;
    this.formationCheckList();
  }

  testCheckList(form: NgForm) {
    this.answerList = form.value;

    this.httpClientHome.getDataPost("addAnswers?test=", this.answerList).subscribe();
  }

  analysisCheckList(form: NgForm) {
    this.answerList = form.value;

    this.httpClientHome.getDataPost("analysisCheckList?test=", this.answerList).subscribe();
  }
}
