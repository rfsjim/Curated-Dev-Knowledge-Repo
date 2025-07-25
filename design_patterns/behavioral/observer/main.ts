/*
 * main.ts - for observer usage
 * Example Observer usage
 * Ovserver, subscriber, in an IoT example 
 */

import {HomeHub, SmartTVObserver, AirConditionerObserver} from "../observer";

const hub = new HomeHub();

const tv = new SmartTVObserver();

const ac = new AirConditionerObserver();

hub.subscribe("movie-night", tv);
hub.subscribe("movie-night", ac);
hub.subscribe("good-morning", ac);

hub.notify("movie-night");
hub.notify("good-morning");