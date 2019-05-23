import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablesdbComponent } from './tablesdb.component';

describe('TablesdbComponent', () => {
  let component: TablesdbComponent;
  let fixture: ComponentFixture<TablesdbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablesdbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablesdbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
