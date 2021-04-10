import React from 'react';
import Header from '../../components/header/webBar/webbar';
import Footer from '../../components/footer/footer';

export default function Layout({children}){
    return(
        <>
            <Header/>
            {children}
            <Footer/>
        </>
    )
}