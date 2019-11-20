import { Action } from '@ngrx/store';

export const SET_FILTER = '[FILTER] set filter';
export type validFilters = 'all' | 'active' | 'completed';

export class SetFilterAction implements Action {
    readonly type =  SET_FILTER;

    constructor(public filtro: validFilters) {}
}


export type Acciones = SetFilterAction;
