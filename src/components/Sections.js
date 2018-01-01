import React from 'react';
import { Component } from 'react';
import AboutMe from './AboutMe';
import WhatYouNeedToKnow from '../containers/WhatYouNeedToKnow';
import AdoptMe from './AdoptMe';
import HowToHelp from '../containers/HowToHelp';
import HuskiesForHire from './HuskiesForHire';
import SurrenderAHusky from '../containers/SurrenderAHusky';
import TheEntertaimnentBook from './TheEntertaimnentBook';
import ContactUs from '../containers/ContactUs';
import OurEvents from "./OurEvents";

export default class Sections extends Component {
    render() {
        return (
            <main>
                <AboutMe />
                <WhatYouNeedToKnow />
                <AdoptMe />
                <HowToHelp />
                <HuskiesForHire />
                <SurrenderAHusky />
                <OurEvents />
                <TheEntertaimnentBook />
                <ContactUs />
            </main>
        );
    }
}



