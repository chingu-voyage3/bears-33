import React from 'react';
import { Component } from 'react';
import AboutMe from './AboutMe';
import WhatYouNeedToKnow from './WhatYouNeedToKnow';
import AdoptMe from './AdoptMe';
import HowToHelp from './HowToHelp';
import HuskiesForHire from './HuskiesForHire';
import SurrenderAHusky from './SurrenderAHusky';
import HuskyDayOut from './HuskyDayOut';
import TheEntertaimnentBook from './TheEntertaimnentBook';
import ContactUs from './ContactUs';

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
                <HuskyDayOut />
                <TheEntertaimnentBook />
                <ContactUs />
            </main>
        );
    }
}


