import { combineReducers } from 'redux';

import AboutMeReducer from './reducer_aboutMe'
import AdoptMeReducer from './reducer_adoptMe'
import ContactUsReducer from './reducer_contactUs'
import HowToHelpReducer from './reducer_howToHelp'
import HuskiesForHireReducer from './reducer_huskiesForHire'
import OurEventsReducer from './reducer_ourEvents'
import SurrenderAHuskyReducer from './reducer_surrenderAHusky'
import WhatYouNeedToKnowReducer from './reducer_whatYouNeedToKnow'

const rootReducer = combineReducers({
    aboutMeSection: AboutMeReducer,
    adoptMeSection: AdoptMeReducer,
    contactUsSection: ContactUsReducer,
    howToHelpSection: HowToHelpReducer,
    huskiesForHireSection: HuskiesForHireReducer,
    ourEventsSection: OurEventsReducer,
    surrenderAHuskySection: SurrenderAHuskyReducer,
    whatYouNeedToKnowSection: WhatYouNeedToKnowReducer,
});

export default rootReducer;
