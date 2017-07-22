/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FitbitauthComponent } from './fitbitauth.component';

describe('FitbitauthComponent', () => {
  let component: FitbitauthComponent;
  let fixture: ComponentFixture<FitbitauthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FitbitauthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FitbitauthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
