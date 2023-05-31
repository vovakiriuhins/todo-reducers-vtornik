import {FilterValuesType} from "../App";

export const filterReducer = (state: FilterValuesType, action: FilterReducerACType) => {
  switch (action.type) {
      case 'FILTER-TASKS': {
          return state
      }
      default: return state
  }
}

type FilterReducerACType = ReturnType<typeof filterReducerAC>

export const filterReducerAC = (value: FilterValuesType) => {
    return {
        type: 'FILTER-TASKS',
        payload: {
            value
        }
    } as const
}