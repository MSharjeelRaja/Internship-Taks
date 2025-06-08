import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentTaskComponent } from './component-task.component';

describe('ComponentTaskComponent', () => {
  let component: ComponentTaskComponent;
  let fixture: ComponentFixture<ComponentTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentTaskComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComponentTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
