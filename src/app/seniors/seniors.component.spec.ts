import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeniorsComponent } from './seniors.component';

describe('SeniorsComponent', () => {
  let component: SeniorsComponent;
  let fixture: ComponentFixture<SeniorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeniorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeniorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
