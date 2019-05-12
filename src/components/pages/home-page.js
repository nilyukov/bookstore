import React from 'react';
import BookList from '../book-list';
import ShoppingCartTable from "../shopping-cart-table";
import ShopHeader from "../shop-header/shop-header";

const HomePage = () => {
    return (
        <div>
            <ShopHeader/>
            <BookList/>
            <ShoppingCartTable/>
        </div>
    );
};

export default HomePage;
