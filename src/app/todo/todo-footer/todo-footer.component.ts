import { Component, OnInit } from '@angular/core';
import * as fromFiltro from '../../filter/filter.actions';
import * as fromTodos from '../todo.actions';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { Todo } from '../model/todo.model';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styles: []
})
export class TodoFooterComponent implements OnInit {

  setFiltersValid: fromFiltro.validFilters[] = ['all', 'active', 'completed'];
  selectedFilter: fromFiltro.validFilters;
  active: number;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.subscribe(state => {
      this.countActiveTodo(state.todos);
      this.selectedFilter = state.filter; });
  }

  cangeFilter(selectedFilter: fromFiltro.validFilters) {
    const accion = new fromFiltro.SetFilterAction(selectedFilter);
    this.store.dispatch(accion);
  }

  countActiveTodo(todo: Todo[]) {
    this.active = todo.filter( item  => !item.completado).length;
  }

  clearCompletedTodo() {
    const accion = new fromTodos.DeleteCompletedTodoAction();
    this.store.dispatch(accion);
  }

}
