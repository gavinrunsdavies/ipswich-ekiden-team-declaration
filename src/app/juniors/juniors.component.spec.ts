import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JuniorsComponent } from './juniors.component';

describe('JuniorsComponent', () => {
  let component: JuniorsComponent;
  let fixture: ComponentFixture<JuniorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JuniorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JuniorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
