import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvesComponent } from './cves.component';

describe('CvesComponent', () => {
  let component: CvesComponent;
  let fixture: ComponentFixture<CvesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CvesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CvesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
