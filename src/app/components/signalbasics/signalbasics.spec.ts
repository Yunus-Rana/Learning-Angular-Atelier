import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Signalbasics } from './signalbasics';

describe('Signalbasics', () => {
  let component: Signalbasics;
  let fixture: ComponentFixture<Signalbasics>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Signalbasics],
    }).compileComponents();

    fixture = TestBed.createComponent(Signalbasics);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
