import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../todo/model/todo.model';
import * as fromFilter from './filter.actions';

@Pipe({
  name: 'filterTodo'
})
export class FilterPipe implements PipeTransform {

  transform(todos: Todo[], filter: fromFilter.validFilters): Todo[] {

    switch (filter) {
      case 'active':
      return todos.filter(todo => !todo.completado);

      case 'completed':
          return todos.filter(todo => todo.completado);

      default:
        return todos;
    }
  }

}
