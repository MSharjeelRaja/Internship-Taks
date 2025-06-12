import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationalIinfoComponent } from './educational-iinfo.component';

describe('EducationalIinfoComponent', () => {
  let component: EducationalIinfoComponent;
  let fixture: ComponentFixture<EducationalIinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EducationalIinfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EducationalIinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
