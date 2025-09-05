/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OrbitingCirclesComponent } from './OrbitingCircles.component';

describe('OrbitingCirclesComponent', () => {
  let component: OrbitingCirclesComponent;
  let fixture: ComponentFixture<OrbitingCirclesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrbitingCirclesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrbitingCirclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
