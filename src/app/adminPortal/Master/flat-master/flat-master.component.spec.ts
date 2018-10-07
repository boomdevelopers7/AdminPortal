import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlatMasterComponent } from './flat-master.component';

describe('FlatMasterComponent', () => {
  let component: FlatMasterComponent;
  let fixture: ComponentFixture<FlatMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlatMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlatMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
