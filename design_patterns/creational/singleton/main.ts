/*
 * main.ts
 * Example Singleton Implementation
 * An example of how the Singleton is used once the pattern is coded
 * AirConditioner and SmartTV
 */

import { SingletonHomeHub } from '../singleton';
import { SmartTVObserver } from '../../behavioral/observer';
import { AirConditionerObserver } from '../../behavioral/observer';
import { SmartTV } from '../../class';
import { AirConditioner } from '../../class';

const hub = SingletonHomeHub.getInstance();
const tv = new SmartTVObserver();
const ac = new AirConditionerObserver();

const smartTelly = new SmartTV("Lounge");
const smartAC = new AirConditioner("Dining");

// Subscribe the TV to the "romantic" scene
hub.subscribe("party-time", tv);

// Subscribe the A/C to the "warm-up-buttercup" scene
hub.subscribe("movie-night", ac);

smartTelly.home();
smartAC.powerOn();