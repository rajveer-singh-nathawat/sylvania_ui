import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SylvaniansComponent } from './sylvanians.component';

describe('SylvaniansComponent', () => {
  let component: SylvaniansComponent;
  let fixture: ComponentFixture<SylvaniansComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SylvaniansComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SylvaniansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
