import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationaIinfoComponent } from './informationa-iinfo.component';

describe('InformationaIinfoComponent', () => {
  let component: InformationaIinfoComponent;
  let fixture: ComponentFixture<InformationaIinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InformationaIinfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformationaIinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
