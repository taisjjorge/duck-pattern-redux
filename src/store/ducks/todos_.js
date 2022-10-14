export const Types = {
    ADD: "todos/ADD_TODO",
    TOGGLE: "todos/TOGGLE_TODO",
    REMOVE: "todos/REMOVE_TODO",
}

const INITIAL_STATE = [];
//reducers
export default function todos(state = INITIAL_STATE, action) {
    switch (action.type) {
        case Types.ADD:
            return [
                ...state,
                { id: Math.random(), text: action.payload.text, complete: false }
            ];

        case Types.TOGGLE:
            return state.map(
                todo =>
                    todo.id === action.payload.id
                        ? { ...todo, complete: !todo.complete }
                        : todo
            );

        case Types.REMOVE:
            return state.filter(todo => todo.id !== action.payload.id);

        default:
            return state;
    }
}


//actions
export const Creators = {
    addTodo: (text) => ({
        type: Types.ADD,
        payload: {
            text
        }
    }),

    toggleTodo: (id) => ({
        type: Types.TOGGLE,
        payload: {
            id
        }
    }),

    removeTodo: (id) => ({
        type: Types.REMOVE,
        payload: {
            id
        }
    })
}