import * as fromFilter from './filter.actions';

const estadoInicial: fromFilter.validFilters = 'all';

export function filterReducer( state = estadoInicial,
                               action: fromFilter.Acciones ): fromFilter.validFilters {


                                    switch (action.type) {

                                        case fromFilter.SET_FILTER:
                                            return action.filtro;

                                        default:
                                            return state;


                                    }
                               }

