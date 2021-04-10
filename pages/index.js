import React from 'react';
import Layout from './Layout/layout';
import Banner from '../components/banner/banner';
import Blog from './blog/index';
import Vasilitas from '../components/content/vasilitas';
import Gallery from '../components/content/gallery';

export default function Home(){
    return(
        <>
           <Layout>
                <Banner/>
                <Blog/>
                <Vasilitas/>
                <Gallery/>
           </Layout>
        </>
    )
}