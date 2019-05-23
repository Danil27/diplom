import { Component, OnInit } from '@angular/core';
import { ChecklistService } from './checklist.service';

@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.css'],
  providers: [ChecklistService]
})
export class ChecklistComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
