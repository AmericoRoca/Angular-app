import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Recipes } from './recipes.component';

describe('Recipes', () => {
  let component: RecipesComponent;
  let fixture: ComponentFixture<RecipesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecipesComponent]
    });
    fixture = TestBed.createComponent(RecipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
