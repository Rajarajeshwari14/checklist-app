import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserHomeComponent } from './userhome.component';
import { CustomMaterialModule } from '../material.module';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { TodoListService } from '../service/ToDoListService';
import { By } from 'protractor';

describe('UserHomeComponent', () => {
  let component: UserHomeComponent;
  let fixture: ComponentFixture<UserHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        UserHomeComponent
       ],
       imports : [
        CustomMaterialModule,
        FormsModule,
        RouterTestingModule.withRoutes([])
       ],
       providers : [
        TodoListService
       ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
