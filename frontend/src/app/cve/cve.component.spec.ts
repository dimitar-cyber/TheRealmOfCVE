import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CveComponent } from './cve.component';

describe('UserComponent', () => {
  let component: CveComponent;
  let fixture: ComponentFixture<CveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
