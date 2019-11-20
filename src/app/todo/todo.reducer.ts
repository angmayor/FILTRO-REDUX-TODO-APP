import * as fromTodo from './todo.actions';
import { Todo } from './model/todo.model';
import { filter } from 'minimatch';

const todo1 = new Todo('Hacer la comida');
const todo2 = new Todo('Lavar el coche');

const estadoInicial: Todo[] = [todo1, todo2];


export function todoReducer( state = estadoInicial,
                             action: fromTodo.Acciones): Todo[] {

            switch (action.type) {
                case fromTodo.AGREGAR_TODO:
                    const todo = new Todo(action.texto);
                    return [... state, todo];

                case fromTodo.TOGGLE_TODO:
                    return state.map( todoEdit => {
                        if (todoEdit.id === action.id) {
                                return {
                                        ...todoEdit,
                                        completado: !todoEdit.completado
                                       };
                        } else {
                                 return todoEdit;
                        }
                    });


                case fromTodo.EDITAR_TODO:
                    return state.map( textEdited => {
                        if (textEdited.id === action.id) {
                          return {
                                ...textEdited,
                                texto: action.text
                          };
                        } else {
                          return textEdited;
                        }
                    });

                case fromTodo.TOGGLE_ALL:
                    return state.map( item => {
                        return {
                            ...item,
                            completado: action.completado
                        };
                    });

                case fromTodo.BORRAR_TODO:
                    return state.filter( todolist  => todolist.id !== action.id );

                case fromTodo.DELETE_COMPLETED_TODO:
                        return state.filter( item => !item.completado);


                default:
                    return state;
            }
        }
