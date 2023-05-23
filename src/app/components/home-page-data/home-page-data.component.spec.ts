import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageDataComponent } from './home-page-data.component';

describe('HomePageDataComponent', () => {
  let component: HomePageDataComponent;
  let fixture: ComponentFixture<HomePageDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePageDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomePageDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
