import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExReactFormComponent } from './ex-react-form.component';

describe('ExReactFormComponent', () => {
  let component: ExReactFormComponent;
  let fixture: ComponentFixture<ExReactFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExReactFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExReactFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
