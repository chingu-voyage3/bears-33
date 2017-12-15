import React from 'react';
import { Component } from 'react';
import Navbar from './Navbar';
import Header from './Header';
import Sections from './Sections';
import Footer from './Footer';

export default class App extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Header />

                <Sections />

                <Footer />
            </div>


        );
    }
}



