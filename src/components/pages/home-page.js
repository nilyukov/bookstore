import React from 'react';
import BookList from "../book-list";

const HomePage = () => {
    const books = [
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
    ];
    return (
        <BookList books={books}/>
    );
};

export default HomePage;