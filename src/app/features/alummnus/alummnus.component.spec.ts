import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlummnusComponent } from './alummnus.component';

describe('AlummnusComponent', () => {
  let component: AlummnusComponent;
  let fixture: ComponentFixture<AlummnusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlummnusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlummnusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
