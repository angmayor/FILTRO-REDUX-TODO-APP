import { Action } from '@ngrx/store';

export const AGREGAR_TODO = '[TODO] Agregar todo';
export const TOGGLE_TODO = '[TODO] Toggle todo';
export const EDITAR_TODO = '[TODO] Editar todo';
export const BORRAR_TODO = '[TODO] Borrar todo';
export const TOGGLE_ALL = '[TODO] Toggle All todo';
export const DELETE_COMPLETED_TODO = '[TODO] Borrar todo Completos';


export class AgregarTodoAction implements Action {
    readonly type = AGREGAR_TODO;

    constructor( public texto: string ) {}
}

export class ToggleTodoAction implements Action {
    readonly type = TOGGLE_TODO;

    constructor( public id: number ) {}
}

export class EditarTodoAction implements Action {
    readonly type = EDITAR_TODO;

    constructor(public id: number, public text: string) {}
}

export class BorrarTodoAction implements Action {
    readonly type = BORRAR_TODO;

    constructor(public id: number) {}
}

export class ToggleAllAction implements Action {
    readonly type = TOGGLE_ALL;

    constructor(public completado: boolean) {}
}

export class DeleteCompletedTodoAction implements Action {
    readonly type = DELETE_COMPLETED_TODO;
}


export type Acciones = AgregarTodoAction |
                       ToggleTodoAction |
                       EditarTodoAction |
                       ToggleAllAction  |
                       DeleteCompletedTodoAction |
                       BorrarTodoAction;

