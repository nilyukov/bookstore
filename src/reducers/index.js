const initialState = {
    books: [
        {
            id: 0,
            title: 'Microlab pro 3',
            author: 'Susan'
        },
        {
            id: 1,
            title: 'Fuze tea',
            author: 'Bar D.'
        }
    ]
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'BOOKS_LOADED':
            return {
                books: action.payload
            };

        default:
            return state;
    }
};

export default reducer;